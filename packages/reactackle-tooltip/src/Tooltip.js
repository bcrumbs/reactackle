import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Portal } from 'react-portal';
import { registerDefaultComponentTheme } from 'reactackle-core';
import { TooltipStyled } from './styles/TooltipStyled';
import { TooltipWrapperStyled } from './styles/TooltipWrapperStyled';
import { TooltipContentStyled } from './styles/TooltipContentStyled';
import componentTheme from './styles/theme';

registerDefaultComponentTheme('tooltip', componentTheme);

const propTypes = {
  /**
   * Text of the Tooltip
   */
  text: PropTypes.string,
  /**
   * Determines x axis Tooltip position
   */
  positionX: PropTypes.oneOf(['right', 'left']),
  /**
   * Determines y axis Tooltip position
   */
  positionY: PropTypes.oneOf(['top', 'bottom']),
  /**
   * Determines whether Tooltip is visible
   */
  isVisible: PropTypes.bool,
};

const defaultProps = {
  text: '',
  positionX: 'right',
  positionY: 'bottom',
  isVisible: false,
};

export default class Tooltip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      positionX: void 0,
      positionY: void 0,
      top: 0,
      left: 0,
    };

    this._element = null;
    this._createElementRef = this._createElementRef.bind(this);
    this._setPosition = this._setPosition.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this._setPosition);
    document.addEventListener('mousemove', this._setPosition);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._setPosition);
    document.removeEventListener('mousemove', this._setPosition);
  }

  _setPosition({ clientX: left = 0, clientY: top = 0 }) {
    if (!this._element || !this.props.isVisible) return;

    const { width, height } = this._element.getBoundingClientRect();

    let positionX = void 0,
      positionY = void 0;

    if (left + width > document.body.clientWidth) positionX = 'left';
    else if (left < 0) positionX = 'right';

    if (top + height > document.body.clientHeight) positionY = 'top';
    else if (top < 0) positionY = 'bottom';

    this.setState({
      left,
      top,
      positionX,
      positionY,
    });
  }

  _createElementRef(ref) {
    this._element = ref;
  }

  render() {
    const { state: { left, top } } = this;

    return !this.props.isVisible ? null : (
      <Portal>
        <TooltipWrapperStyled style={{ left, top }}>
          <TooltipStyled
            innerRef={this._createElementRef}
            visible={this.props.isVisible}
            positionX={this.state.positionX || this.props.positionX}
            positionY={this.state.positionY || this.props.positionY}
          >
            <TooltipContentStyled>
              {this.props.text}
            </TooltipContentStyled>
          </TooltipStyled>
        </TooltipWrapperStyled>
      </Portal>
    );
  }
}

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;
Tooltip.displayName = 'Tooltip';
