import React, { Component } from 'react';
import Portal from 'react-portal';

import { TooltipWrapperStyled } from './styles/TooltipWrapperStyled';

import { withEventListeners } from './common';

class DynamicTooltipSlot extends Component {
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
    const { toggleEventListener } = this.props;
    toggleEventListener({
      target: window,
      event: 'resize',
      cb: this._setPosition,
    });
    toggleEventListener({
      target: document,
      event: 'mousemove',
      cb: this._setPosition,
    });
  }

  componentWillUnmount() {
    this.props.cleanEventListeners();
  }

  _setPosition({ clientX: left = 0, clientY: top = 0 }) {
    if (!this._element || !this.props.visible) return;

    const { width, height } = this._element.getBoundingClientRect();

    let positionX = void 0,
      positionY = void 0;

    if (left + width > document.body.clientWidth) positionX = 'left';
    else if (left < 0) positionX = 'right';

    if (top + height > document.body.clientHeight) positionY = 'top';
    else if (top < 0) positionY = 'bottom';

    this.setState({
      left: left + 1,
      top: top + 1,
      positionX,
      positionY,
    });
  }

  _createElementRef(ref) {
    this._element = ref;
  }

  render() {
    const {
      state: { left, top },
      props: { children },
    } = this;

    return (
      <Portal
        isOpened={this.props.visible}
      >
        <TooltipWrapperStyled style={{ left, top }}>
          {typeof children !== 'function'
            ? children
            : children({
              positionX: this.state.positionX || this.props.positionX,
              positionY: this.state.positionY || this.props.positionY,
              tooltipRef: this._createElementRef,
            })
          }
        </TooltipWrapperStyled>
      </Portal>
    );
  }
}

export default withEventListeners(DynamicTooltipSlot);
