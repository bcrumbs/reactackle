import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { AutoPosition } from 'reactackle-autoposition';

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

export const withContentTooltip = (Component, TooltipContent) => {
  const propTypes = {
    closeOnOutsideClick: PropTypes.bool,
  };
  const defaultProps = {
    closeOnOutsideClick: true,
  };
  // eslint-disable-next-line react/no-multi-comp
  class WithTooltip extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        targetRef: null,
        contentRef: null,
        visible: false,
      };

      this.TooltipTarget = wrapWithClass(Component);
      this.TooltipContent = wrapWithClass(TooltipContent);

      this._handleContentRef = this._handleContentRef.bind(this);
      this._handleTargetRef = this._handleTargetRef.bind(this);
      this._toggleTooltip = this._toggleTooltip.bind(this);
      this._openTooltip = this._openTooltip.bind(this);
      this._closeTooltip = this._closeTooltip.bind(this);
      this._handleOutsideClick = this._handleOutsideClick.bind(this);
      this._applyOutsideListener = this._applyOutsideListener.bind(this);
    }

    componentWillUnmount() {
      document.removeEventListener('click', this._handleOutsideClick);
    }

    _handleTargetRef(ref) {
      // eslint-disable-next-line
      this.setState({ targetRef: ReactDOM.findDOMNode(ref) });
    }

    _handleContentRef(ref) {
      // eslint-disable-next-line
      this.setState({ contentRef: ReactDOM.findDOMNode(ref) });
    }

    _toggleTooltip() {
      this.setState(({ visible }) => ({
        visible: !visible,
      }), this._applyOutsideListener);
    }

    _openTooltip() {
      this.setState({ visible: true }, this._applyOutsideListener);
    }

    _closeTooltip() {
      this.setState({ visible: false }, this._applyOutsideListener);
    }

    _applyOutsideListener() {
      if (!this.props.closeOnOutsideClick) return;

      if (this.state.visible) {
        document.addEventListener('click', this._handleOutsideClick);
      } else {
        document.removeEventListener('click', this._handleOutsideClick);
      }
    }
    
    _handleOutsideClick(e) {
      if (!this.state.contentRef.contains(e.target)) {
        this._closeTooltip();
      }
    }

    render() {
      const {
        TooltipTarget,
        TooltipContent,
      } = this;

      const tooltipProps = {
        openTooltip: this._openTooltip,
        closeTooltip: this._closeTooltip,
        toggleTooltip: this._toggleTooltip,
      };

      const renderAutoPosition = !this.state.targetRef && !this.state.visible
        ? null
        : <AutoPosition
            parent={this.state.targetRef}
            type="outer"
            visible={this.state.visible}
          >
            <TooltipContent
              {...this.props}
              {...tooltipProps}
              ref={this._handleContentRef}
            />
          </AutoPosition>;

      return (
        <div>
          <TooltipTarget
            {...this.props}
            {...tooltipProps}
            ref={this._handleTargetRef}
          />
          {renderAutoPosition}
        </div>
      );
    }
  }
  WithTooltip.propTypes = propTypes;
  WithTooltip.defaultProps = defaultProps;
  WithTooltip.displayName = `withContentTooltip(${Component.displayName})`;

  return WithTooltip;
};
