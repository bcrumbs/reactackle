'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { isUndef } from 'reactackle-core';
import { AutoPosition } from 'reactackle-autoposition';

import Tooltip from './Tooltip';
import TooltipWrapper from './TooltipWrapper';
import DynamicTooltipSlot from './DynamicTooltipSlot';
import StaticTooltipSlot from './StaticTooltipSlot';

const wrapWithClass = Component => {
  const isFunctionalComponent = Component =>
    !Component.prototype.render;
  if (!isFunctionalComponent(Component)) return Component;
  // eslint-disable-next-line react/prefer-stateless-function
  return class ClassComponent extends React.Component {
    render() {
      return <Component {...this.props} />;
    }
  };
};

const propTypes = {
  tooltip: PropTypes.shape(Tooltip.propTypes),
  hideTooltipAfter: PropTypes.number,
};

const defaultProps = {
  tooltip: Tooltip.defaultProps,
};

export const withTooltip = (WrappedComponent, dontModifyProps = false) => {
  class WithTooltip extends Component {
    // tooltip container in another component
    constructor(props) {
      super(props);
      this.state = { showTooltip: false, ref: null };
      this._toggleTooltip = this.toggleTooltip.bind(this);
      this._showTooltip = this.showTooltip.bind(this);
      this._hideTooltip = this.hideTooltip.bind(this);
      this._handleRef = this._handleRef.bind(this);
      this._handleVisibleCallback = this._handleVisibleCallback.bind(this);

      this.TooltipSlot = props => {
        const { mode } = this.props;

        if (mode !== 'dynamic' && mode !== 'static') return null;

        return mode === 'dynamic'
          ? <DynamicTooltipSlot
              isVisible={this.state.showTooltip}
              children={props.children}
            />
          : <StaticTooltipSlot
              isVisible={this.state.showTooltip}
              visibleCallback={this._handleVisibleCallback}
              targetRef={this.state.ref}
              hideTooltip={this._hideTooltip}
              closeOnOutsideClick={this.props.closeOnOutsideClick}
              children={props.children}
            />;
      };

      this.Tooltip = ({ children }) =>
        <this.TooltipSlot>
          {slotProps =>
            <TooltipWrapper {...slotProps}>
              {children}
            </TooltipWrapper>
          }
        </this.TooltipSlot>;

      this.WrappedComponent = wrapWithClass(WrappedComponent);
    }

    componentWillUnmount() {
      this.clearHideTimeout();
    }

    setHideTimeout(time) {
      this.tooltipHideTimeout = setTimeout(this._hideTooltip, time);
    }

    _handleRef(ref) {
      const targetRef = ReactDOM.findDOMNode(ref);
      this.setState({ ref: targetRef });
    }

    _handleVisibleCallback(cb) {
      this.setState({ visibleCallback: cb });
    }

    toggleTooltip(show) {
      const showTooltip =
        typeof show === 'boolean' ? show : !this.state.showTooltip;

      const { hideTooltipAfter } = this.props;
      const { visibleCallback } = this.state;

      const cb = !visibleCallback
        ? () => {}
        : () => visibleCallback(this.state.showTooltip);
      this.setState({ showTooltip }, cb);

      if (!isUndef(hideTooltipAfter)) {
        if (showTooltip) this.setHideTimeout(hideTooltipAfter);
        else this.clearHideTimeout();
      }
    }

    showTooltip() {
      this._toggleTooltip(true);
    }

    hideTooltip() {
      this._toggleTooltip(false);
    }

    clearHideTimeout() {
      clearTimeout(this.tooltipHideTimeout);
    }

    render() {
      const WrappedComponent = this.WrappedComponent;
      return (
        <WrappedComponent
          {...this.props}
          ref={this._handleRef}
          toggleTooltip={this._toggleTooltip}
          showTooltip={this._showTooltip}
          hideTooltip={this._hideTooltip}
          Tooltip={this.Tooltip}
          TooltipSlot={this.TooltipSlot}
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
