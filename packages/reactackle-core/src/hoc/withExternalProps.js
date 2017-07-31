/**
 * @author Dmitriy Malakhov
 */

'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash.omit';

export const withExternalProps = channel => WrappedComponent => {
  const contextTypes = {
    [channel]: PropTypes.func,
  };

  const childContextTypes = {
    [channel]: PropTypes.func.isRequired,
  };

  class WithExternalProps extends Component {
    constructor(props) {
      super(props);

      this.state = {
        externalProps: {},
      };

      this._unsubscribe = null;
    }

    componentWillMount() {
      if (this.context[channel]) {
        const subscribe = this.context[channel];
        this._unsubscribe = subscribe(state => {
          this.setState({
            externalProps: state,
          });
        });
      }
    }

    componentWillUnmount() {
      if (this._unsubscribe) this._unsubscribe();
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          externalProps={this.state.externalProps}
        >
          {this.props.children}
        </WrappedComponent>
      );
    }
  }

  WithExternalProps.propTypes = omit(WrappedComponent.propTypes, [
    'externalProps',
  ]);

  WithExternalProps.defaultProps = omit(WrappedComponent.defaultProps, [
    'externalProps',
  ]);

  WithExternalProps.contextTypes = contextTypes;
  WithExternalProps.childContextTypes = childContextTypes;
  WithExternalProps.displayName = `WithExternalProps(${WrappedComponent.displayName})`;

  return WithExternalProps;
};
