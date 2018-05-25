import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pick from 'lodash.pick';
import { AutoPosition } from 'reactackle-autoposition';

import { withEventListeners } from './common';

const AutoPositionPropsKeys = Object.keys(AutoPosition.propTypes);

const propTypes = {
  ...AutoPosition.propTypes,
  /**
   * Determines should tooltip be closed by outside click
   */
  closeOnOutsideClick: PropTypes.bool,
  /**
   * Determines x axis position
   */
  positionX: PropTypes.oneOf(['left', 'right']),
  /**
   * Determines y axis position
   */
  positionY: PropTypes.oneOf(['top', 'bottom']),
  /**
   * Set priority direction. The positioned component doesn't fit boundaries
   * in default direction this defines which side this component will try to
   * occupy first: opposite horizontal or opposite vertical.
   */
  direction: PropTypes.oneOf(['vertical', 'horizontal']),
  /**
   * Set the bypass curcuit: along the outer or inner border of the component
   */
  type: PropTypes.oneOf(['outer', 'inner']),
  /**
   * @ignore
   */
  hideTooltip: PropTypes.func.isRequired,
  /**
   * @ignore
   */
  onVisibleCallback: PropTypes.func.isRequired,
  /**
   * @ignore
   */
  cleanEventListeners: PropTypes.func.isRequired,
  /**
   * @ignore
   */
  toggleEventListener: PropTypes.func.isRequired,
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
};

const defaultProps = {
  closeOnOutsideClick: true,
  type: 'outer',
  positionX: 'left',
  positionY: 'bottom',
  direction: 'vertical',
  allowedSlideOnCurrentEdge: false,
  allowedSlideOnOppositeEdge: false,
  allowedSlideOnAdjacentEdge: false,
};

export class StaticTooltipSlot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tooltipRef: null,
    };

    this._handleTooltipRef = this._handleTooltipRef.bind(this);
    this._handleOutsideClick = this._handleOutsideClick.bind(this);
    this._applyOutsideListener = this._applyOutsideListener.bind(this);

    this.props.onVisibleCallback(this._applyOutsideListener);
  }

  componentWillUnmount() {
    this.props.cleanEventListeners();
  }

  _handleTooltipRef(ref) {
    this.setState({ tooltipRef: ref });
  }
  
  _applyOutsideListener() {
    const {
      toggleEventListener,
      closeOnOutsideClick,
    } = this.props;

    if (!closeOnOutsideClick) return;
    const listener = {
      target: document,
      event: 'click',
      cb: this._handleOutsideClick,
    };
    toggleEventListener(listener);
  }
  
  _handleOutsideClick(e) {
    if (!this.state.tooltipRef.contains(e.target)) {
      this.props.hideTooltip();
    }
  }

  render() {
    const {
      children,
    } = this.props;
    const autoPositionProps = pick(this.props, AutoPositionPropsKeys);

    return !autoPositionProps.parent && !autoPositionProps.visible
      ? null
      : <AutoPosition
          {...autoPositionProps}
        >
          {({ positionX, positionY }) =>
            typeof children !== 'function'
            ? children
            : children({
              positionX,
              positionY,
              tooltipRef: this._handleTooltipRef,
            })
          }
        </AutoPosition>;
  }
}

StaticTooltipSlot.propTypes = propTypes;
StaticTooltipSlot.defaultProps = defaultProps;

export default withEventListeners(StaticTooltipSlot);
