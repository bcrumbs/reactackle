/**
 * @author Dmitriy Malakhov
 */

'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Portal from 'react-portal';
import pick from 'lodash.pick';
import throttle from 'lodash.throttle';

import { noop } from 'reactackle-core';

const SCROLL_THROTTLE_DELAY = 20;
const keysPortalPropTypes = Object.keys(Portal.propTypes);

const propTypes = {
  /**
   * Define the element to which the component will be positioned
   */
  parent: PropTypes.object,
  /**
   * Define boundaries to which the component will be positioned
   */
  wrapper: PropTypes.object,
  /**
   * Determines css position property. We recommend to use 'absolute'
   * positioning as it requires less calculations and is more effective.
   */
  positionStyle: PropTypes.oneOf(['fixed', 'absolute']),
  /**
   * Determines whether AutoPosition component visible or not
   */
  visible: PropTypes.bool,
  /**
   * Determines x axis position
   */
  positionX: PropTypes.oneOf(['left', 'right']),
  /**
   * Determines y axis position
   */
  positionY: PropTypes.oneOf(['top', 'bottom']),
  /**
   * Set the bypass curcuit: along the outer or inner border of the component
   */
  type: PropTypes.oneOf(['outer', 'inner']),
  /**
   * Set priority direction. The positioned component doesn't fit boundaries
   * in default direction this defines which side this component will try to
   * occupy first: opposite horizontal or opposite vertical.
   */
  direction: PropTypes.oneOf(['vertical', 'horizontal']),
  /**
   * Set the tolerance for verifying that the positioned component fits its
   * boundaries
   */
  overflowMargin: PropTypes.number,
  /**
   * When AutoPosition component dont fit in window, display it in center
   */
  allowedShowByCenter: PropTypes.bool,
  /**
   * Allow the component to change its position along the current edge
   */
  allowedSlideOnCurrentEdge: PropTypes.bool,
  /**
   * Allow the component to jump to the opposite edge if necessary
   */
  allowedSlideOnOppositeEdge: PropTypes.bool,
  /**
   * Allow the component to jump to the adjacent edge if necessary
   */
  allowedSlideOnAdjacentEdge: PropTypes.bool,
  /**
   * Allow the component to change bypass circuit if necessary
   */
  allowedChangeType: PropTypes.bool,
  /**
   * Set positioning priority template
   */
  slidePriority: PropTypes.arrayOf(
    PropTypes.oneOf([
      'slideOnCurrentEdge',
      'slideOnOppositeEdge',
      'slideOnAdjacentEdge',
      'changeType',
    ]),
  ),
  /**
   * Specify function to call on overflow
   */
  onOverflow: PropTypes.func,
  ...Portal.propTypes,
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
  ]).isRequired,
};

const defaultProps = {
  parent: window,
  wrapper: window,
  positionStyle: 'absolute',
  visible: false,
  positionX: 'left',
  positionY: 'top',
  type: 'inner',
  direction: 'horizontal',
  overflowMargin: -5,
  allowedShowByCenter: false,
  slidePriority: [
    'slideOnAdjacentEdge',
    'changeType',
    'slideOnOppositeEdge',
    'slideOnCurrentEdge',
  ],
  allowedSlideOnCurrentEdge: true,
  allowedSlideOnOppositeEdge: true,
  allowedSlideOnAdjacentEdge: false,
  allowedChangeType: false,
  onOverflow: noop,
  ...Portal.defaultProps,
};

let autoPositionInstances = [];

export default class AutoPosition extends Component {
  constructor(props) {
    super(props);

    this._domNode = null;

    this.state = {
      visible: props.visible,
      currentPosition: {
        top: null,
        left: null,
      },
      currentDirection: props.direction,
      currentPositionX: props.positionX,
      currentPositionY: props.positionY,
      currentType: props.type,
    };

    this._handleScrollThrottled = throttle(
      this._handleScroll.bind(this),
      SCROLL_THROTTLE_DELAY,
    );

    this._saveRef = this._saveRef.bind(this);
    this._handleOpen = this._handleOpen.bind(this);
    this._handleResize = this._handleResize.bind(this);
  }

  componentDidMount() {
    autoPositionInstances.push(this);

    window.addEventListener('resize', this._handleResize);

    window.addEventListener('scroll', this._handleScrollThrottled, true);
  }

  componentWillReceiveProps(nextProps) {
    const { positionX, positionY, type, direction, parent } = nextProps;

    if (
      positionX !== this.props.positionX ||
      positionY !== this.props.positionY ||
      type !== this.props.type ||
      direction !== this.props.direction ||
      parent !== this.props.parent
    )
      this._recalculatePosition(nextProps);
  }

  componentWillUnmount() {
    const index = autoPositionInstances.indexOf(this);

    if (index + 1) {
      autoPositionInstances = [
        ...autoPositionInstances.slice(0, index),
        ...autoPositionInstances.slice(index + 1),
      ];
    }

    window.removeEventListener('resize', this._handleResize);

    window.removeEventListener('scroll', this._handleScrollThrottled, true);
  }

  recalculatePosition() {
    this._recalculatePosition(this.props);
  }

  _handleOpen() {
    this._recalculatePosition(this.props);
    this.props.onOpen();
  }

  _handleResize() {
    if (!this.props.visible) return;
    this._recalculatePosition(this.props);
  }

  _handleScroll() {
    if (!this.props.visible) return;

    const forceRecalculate = this.props.positionStyle === 'fixed';
    this._recalculatePosition(this.props, forceRecalculate);
  }

  _recalculatePosition(props) {
    const {
      direction: initDirection,
      positionY,
      positionX,
      type,
      allowedShowByCenter,
      parent,
      slidePriority,
      allowedSlideOnCurrentEdge,
      allowedSlideOnOppositeEdge,
      allowedSlideOnAdjacentEdge,
      allowedChangeType,
    } = props;

    const {
      currentDirection,
      currentPositionY,
      currentPositionX,
      currentType,
    } = this.state;

    const initPosition = this._getPositions({
      positionY,
      positionX,
      type,
      direction: initDirection,
      parent,
    });

    const currentPosition = this._getPositions({
      positionY: currentPositionY,
      positionX: currentPositionX,
      type: currentType,
      direction: currentDirection,
      parent,
    });

    const overflowByCurrentPosition = this._overflowCheck(currentPosition),
      overflowByInitPosition = this._overflowCheck(initPosition);

    let newPosition = currentPosition,
      newDirection = currentDirection,
      newPositionY = currentPositionY,
      newPositionX = currentPositionX,
      newType = currentType;

    if (!overflowByInitPosition.length) {
      newPosition = initPosition;
      newDirection = initDirection;
      newPositionX = positionX;
      newPositionY = positionY;
      newType = type;
    }

    if (overflowByInitPosition.length) {
      const availablePropArrays = [],
        idxAllow = [];

      const sortItems = (firstItem, items) => {
        items.splice(items.indexOf(firstItem), 1);
        return [firstItem].concat(items);
      };

      slidePriority.forEach((priority, idx) => {
        if (priority === 'slideOnCurrentEdge') {
          if (currentDirection === 'horizontal') {
            idxAllow.positionY = idx;

            if (allowedSlideOnCurrentEdge)
              availablePropArrays.push(sortItems(positionY, ['top', 'bottom']));
            else availablePropArrays.push([positionY]);
          } else {
            idxAllow.positionX = idx;

            if (allowedSlideOnCurrentEdge)
              availablePropArrays.push(sortItems(positionX, ['left', 'right']));
            else availablePropArrays.push([positionX]);
          }
        }

        if (priority === 'slideOnOppositeEdge') {
          if (currentDirection === 'horizontal') {
            idxAllow.positionX = idx;

            if (
              allowedSlideOnOppositeEdge &&
              currentDirection === initDirection
            )
              availablePropArrays.push(sortItems(positionX, ['left', 'right']));
            else availablePropArrays.push([positionX]);
          } else {
            idxAllow.positionY = idx;

            if (
              allowedSlideOnOppositeEdge &&
              currentDirection === initDirection
            )
              availablePropArrays.push(sortItems(positionY, ['top', 'bottom']));
            else availablePropArrays.push([positionY]);
          }
        }

        if (priority === 'slideOnAdjacentEdge') {
          idxAllow.direction = idx;

          if (
            allowedSlideOnAdjacentEdge &&
            currentDirection === initDirection
          ) {
            availablePropArrays.push(
              sortItems(initDirection, ['horizontal', 'vertical']),
            );
          } else {
            availablePropArrays.push([currentDirection]);
          }
        }

        if (priority === 'changeType') {
          idxAllow.type = idx;

          if (allowedChangeType)
            availablePropArrays.push(sortItems(type, ['outer', 'inner']));
          else availablePropArrays.push([type]);
        }
      });

      const propCombinations = availablePropArrays.reduce(
        (acc, cur) => {
          const ret = [];
          acc.forEach(acc => cur.forEach(cur => ret.push(acc.concat([cur]))));
          return ret;
        },
        [[]],
      );

      let lastCheckPosition = newPosition;

      const newProps = propCombinations.find(combination => {
        lastCheckPosition = this._getPositions({
          positionY: combination[idxAllow.positionY] || positionY,
          positionX: combination[idxAllow.positionX] || positionX,
          type: combination[idxAllow.type] || type,
          direction: combination[idxAllow.direction],
          parent,
        });

        const overflow = this._overflowCheck(lastCheckPosition);
        return !overflow.length;
      });

      if (newProps) {
        newPosition = lastCheckPosition;
        newDirection = newProps[idxAllow.direction];
        newPositionY = newProps[idxAllow.positionY];
        newPositionX = newProps[idxAllow.positionX];
        newType = newProps[idxAllow.type];
      } else if (allowedShowByCenter) {
        newPosition = this._getCenterPosition();
      }

      this.props.onOverflow(overflowByCurrentPosition);
    }

    this.setState({
      currentPosition: newPosition,
      currentDirection: newDirection,
      currentPositionX: newPositionX,
      currentPositionY: newPositionY,
      currentType: newType,
    });
  }

  _saveRef(ref) {
    this._domNode = ref;
  }

  _overflowCheck({ top, left }) {
    const overflow = [];

    if (!this._domNode) return overflow;

    const { wrapper } = this.props,
      contentSize = this._domNode.getBoundingClientRect();

    let wrapperTop = 0,
      wrapperLeft = 0,
      wrapperBottom = 0,
      wrapperRight = 0;

    if (wrapper instanceof Window) {
      wrapperBottom = window.innerHeight;
      wrapperRight = window.innerWidth;
    } else if (wrapper instanceof HTMLElement) {
      const wrapperSize = wrapper.getBoundingClientRect();

      wrapperTop = wrapperSize.top;
      wrapperLeft = wrapperSize.left;
      wrapperBottom = wrapperSize.bottom;
      wrapperRight = wrapperSize.right;
    }

    if (
      left + contentSize.width > wrapperRight - this.props.overflowMargin ||
      left < wrapperLeft + this.props.overflowMargin
    )
      overflow.push('horizontal');

    if (
      top + contentSize.height > wrapperBottom - this.props.overflowMargin ||
      top < wrapperTop + this.props.overflowMargin
    )
      overflow.push('vertical');

    return overflow;
  }

  _getCenterPosition() {
    const viewportWidth = window.innerWidth,
      viewportHeight = window.innerHeight,
      contentSize = this._domNode.getBoundingClientRect();

    return {
      left: viewportWidth / 2 - contentSize.width / 2,
      top: viewportHeight / 2 - contentSize.height / 2,
    };
  }

  _getPositions({ positionX, positionY, type, direction, parent }) {
    if (this._domNode && parent) {
      const parentRect = parent.getBoundingClientRect(),
        contentRect = this._domNode.getBoundingClientRect();

      if (positionX === 'left' && positionY === 'bottom') {
        if (type === 'outer') {
          if (direction === 'horizontal') {
            return {
              top: parentRect.top - (contentRect.height - parentRect.height),
              left: parentRect.left - contentRect.width,
            };
          } else {
            return {
              top: parentRect.bottom,
              left: parentRect.left,
            };
          }
        } else {
          return {
            top: parentRect.top - (contentRect.height - parentRect.height),
            left: parentRect.left,
          };
        }
      } else if (positionX === 'left' && positionY === 'top') {
        if (type === 'outer') {
          if (direction === 'horizontal') {
            return {
              top: parentRect.top,
              left: parentRect.left - contentRect.width,
            };
          } else {
            return {
              top: parentRect.top - contentRect.height,
              left: parentRect.left,
            };
          }
        } else {
          return {
            top: parentRect.top,
            left: parentRect.left,
          };
        }
      } else if (positionX === 'right' && positionY === 'top') {
        if (type === 'outer') {
          if (direction === 'horizontal') {
            return {
              top: parentRect.top,
              left: parentRect.right,
            };
          } else {
            return {
              top: parentRect.top - contentRect.height,
              left: parentRect.right - contentRect.width,
            };
          }
        } else {
          return {
            top: parentRect.top,
            left: parentRect.right - contentRect.width,
          };
        }
      } else if (positionX === 'right' && positionY === 'bottom') {
        if (type === 'outer') {
          if (direction === 'horizontal') {
            return {
              top: parentRect.bottom - contentRect.height,
              left: parentRect.right,
            };
          } else {
            return {
              top: parentRect.bottom,
              left: parentRect.right - contentRect.width,
            };
          }
        } else {
          return {
            top: parentRect.bottom - contentRect.height,
            left: parentRect.right - contentRect.width,
          };
        }
      }
    }

    return {
      top: 0,
      left: 0,
    };
  }

  render() {
    const { children } = this.props;
    const style = {
      position: 'fixed',
      zIndex: 9000,
      ...this.state.currentPosition,
    };

    const pickProps = pick(this.props, keysPortalPropTypes);
    return (
      <Portal
        {...pickProps}
        isOpened={this.props.visible}
        onOpen={this._handleOpen}
      >
        <div style={style} ref={this._saveRef}>
          {typeof children !== 'function'
            ? children
            : children({
              positionX: this.state.currentPositionX,
              positionY: this.state.currentPositionY,
            })
          }
        </div>
      </Portal>
    );
  }
}

export const recalculateAllAutoPosition = () => {
  autoPositionInstances.forEach(instance => instance.recalculatePosition());
};

AutoPosition.propTypes = propTypes;
AutoPosition.defaultProps = defaultProps;
AutoPosition.displayName = 'AutoPosition';
