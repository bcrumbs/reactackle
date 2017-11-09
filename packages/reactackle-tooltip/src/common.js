import React, { Component } from 'react';

// event names coercion
export const withEventListeners = WrappedComponent => {
  class WithEventListeners extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        eventListeners: {},
      };

      this._toggleEventListener = this._toggleEventListener.bind(this);
      this._cleanEventListeners = this._cleanEventListeners.bind(this);
    }

    _toggleEventListener(newListener) {
      const {
        [newListener.event]: existedListener,
        ...eventListeners
      } = this.state.eventListeners;
      if (existedListener) {
        existedListener.target.removeEventListener(
          existedListener.event,
          existedListener.cb,
        );
        this.setState({ eventListeners });
      } else {
        const {
          target,
          event,
          cb,
        } = newListener;
        target.addEventListener(event, cb);
        this.setState(({ eventListeners }) => ({
          ...eventListeners,
          [event]: newListener,
        }));
      }
    }

    _cleanEventListeners() {
      const listeners = this.state.eventListeners;
      Object.values(listeners).forEach(listener => {
        this._toggleEventListener(listener);
      });
    }
  
    render() {
      return (
        <WrappedComponent
          {...this.props}
          toggleEventListener={this._toggleEventListener}
          cleanEventListeners={this._cleanEventListeners}
        />
      );
    }
  }

  return WithEventListeners;
};
