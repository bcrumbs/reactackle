import React, { Component } from 'react';
import { AutoPosition } from 'reactackle-autoposition';

import { withEventListeners } from './common';



class StaticTooltipSlot extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tooltipRef: null,
    };

    this._handleTooltipRef = this._handleTooltipRef.bind(this);
    this._handleOutsideClick = this._handleOutsideClick.bind(this);
    this._applyOutsideListener = this._applyOutsideListener.bind(this);

    this.props.visibleCallback(this._applyOutsideListener);
  }

  componentWillUnmount() {
    this.props.cleanEventListeners();
  }

  _handleTooltipRef(ref) {
    this.setState({ tooltipRef: ref });
  }
  
  _applyOutsideListener(isVisible) {
    debugger;
    if (!this.props.closeOnOutsideClick) return;

    if (isVisible) {
      document.addEventListener('click', this._handleOutsideClick);
    } else {
      document.removeEventListener('click', this._handleOutsideClick);
    }
  }
  
  _handleOutsideClick(e) {
    debugger;
    if (!this.state.tooltipRef.contains(e.target)) {
      this.props.hideTooltip();
    }
  }

  render() {
    const { children } = this.props;
    return !this.props.targetRef && !this.props.isVisible
      ? null
      : <AutoPosition
          parent={this.props.targetRef}
          type="outer"
          positionX="left"
          positionY="bottom"
          direction="vertical"
          visible={this.props.isVisible}
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


export default withEventListeners(StaticTooltipSlot);
