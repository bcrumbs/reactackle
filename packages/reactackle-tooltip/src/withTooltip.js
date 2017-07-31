'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isUndef } from 'reactackle-core';
import Tooltip from './Tooltip';

const propTypes = {
  tooltip: PropTypes.shape(Tooltip.propTypes),
  hideTooltipAfter: PropTypes.number,
};

const defaultProps = {
  tooltip: Tooltip.defaultProps,
};

/**
 * @param {(React.Component|function)} WrappedComponent
 * @param {?boolean} dontModifyProps
 * @return {React.Component}
 */

export const withTooltip = (WrappedComponent, dontModifyProps = false) => {
  class WithTooltip extends Component {
    constructor(props) {
      super(props);
      this.state = { showTooltip: false };
      this._toggleTooltip = this.toggleTooltip.bind(this);
      this._showTooltip = this.showTooltip.bind(this);
      this._hideTooltip = this.hideTooltip.bind(this);

      this.Tooltip = propsToOverride =>
        (this.props.tooltip && this.props.tooltip.text) || propsToOverride.text
          ? <Tooltip
              {...this.props.tooltip}
              isVisible={this.state.showTooltip}
              {...propsToOverride}
            />
          : null;
    }

    componentWillUnmount() {
      this.clearHideTimeout();
    }

    setHideTimeout(time) {
      this.tooltipHideTimeout = setTimeout(this._hideTooltip, time);
    }

    toggleTooltip(show) {
      const showTooltip =
        typeof show === 'boolean' ? show : !this.state.showTooltip;

      const { hideTooltipAfter } = this.props;
      this.setState({ showTooltip });

      if (!isUndef(hideTooltipAfter)) {
        if (showTooltip) this.setHideTimeout(hideTooltipAfter);
        else this.clearHideTimeout();
      }
    }

    clearHideTimeout() {
      clearTimeout(this.tooltipHideTimeout);
    }

    showTooltip() {
      this._toggleTooltip(true);
    }

    hideTooltip() {
      this._toggleTooltip(false);
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          toggleTooltip={this._toggleTooltip}
          showTooltip={this._showTooltip}
          hideTooltip={this._hideTooltip}
          Tooltip={this.Tooltip}
          isTooltipActive={this.state.showTooltip}
        />
      );
    }
  }

  WithTooltip.propTypes = {
    ...WrappedComponent.propTypes,
    ...(!dontModifyProps ? propTypes : {}),
  };

  WithTooltip.defaultProps = {
    ...WrappedComponent.defaultProps,
    ...(!dontModifyProps ? defaultProps : {}),
  };

  WithTooltip.displayName = `WithTooltip(${WrappedComponent.displayName})`;

  [
    'toggleTooltip',
    'showTooltip',
    'hideTooltip',
    'isTooltipActive',
    'Tooltip',
  ].forEach(propName => {
    delete WithTooltip.propTypes[propName];
    delete WithTooltip.defaultProps[propName];
  });

  return WithTooltip;
};
