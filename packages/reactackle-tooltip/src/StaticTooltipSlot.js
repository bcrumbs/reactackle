import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pick from 'lodash.pick';
import { AutoPosition } from 'reactackle-autoposition';

import { withEventListeners } from './common';

const AutoPositionPropsKeys = Object.keys(AutoPosition.propTypes);

const propTypes = {
  ...AutoPosition.propTypes,
  closeOnOutsideClick: PropTypes.bool,
  hideTooltip: PropTypes.func.isRequired,
  handleVisibleCallback: PropTypes.func.isRequired,
  cleanEventListeners: PropTypes.func.isRequired,
  toggleEventListener: PropTypes.func.isRequired,
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

class StaticTooltipSlot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tooltipRef: null,
    };

    this._handleTooltipRef = this._handleTooltipRef.bind(this);
    this._handleOutsideClick = this._handleOutsideClick.bind(this);
    this._applyOutsideListener = this._applyOutsideListener.bind(this);

    this.props.handleVisibleCallback(this._applyOutsideListener);
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
