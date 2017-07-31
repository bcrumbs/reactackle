/**
 * @author Dmitriy Malakhov
 */

'use strict';

import React, { Component } from 'react';

export const withTestWrapper = WrappedComponent => {
  class TestWrapper extends Component {
    constructor(props) {
      super(props);

      this.state = {
        newProps: {},
      };
    }

    setProps(newProps) {
      this.setState(newProps);
    }

    render() {
      return <WrappedComponent {...this.props} {...this.state.newProps} />;
    }
  }

  TestWrapper.propTypes = WrappedComponent.propTypes;
  TestWrapper.defaultProps = WrappedComponent.defaultProps;
  TestWrapper.displayName = `withTestWrapper(${WrappedComponent.displayName})`;

  return TestWrapper;
};
