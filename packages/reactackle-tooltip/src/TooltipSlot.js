import React, { Component } from 'react';

import { withEventListeners } from './common';

class TooltipSlot extends Component {
  // auto position or manual;
  // lets first do mouse handling;
  constructor(props) {
    super(props);

    this._setPosition = this._setPosition.bind(this);
  }

  componentDidMount() {
    const {
      mode,
      toggleEventListener,
      cleanEventListeners,
    } = this.props;

    if (mode === 'dynamic') {
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
  }

  componentWillUnmount() {
    this.props.cleanEventListeners();
  }

  _setPosition() {

  }

  render() {
    // auto position or manual;
    // lets first do mouse handling;
  }
}

export default withEventListeners(TooltipSlot);
