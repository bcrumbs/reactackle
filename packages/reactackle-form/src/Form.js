'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { registerDefaultComponentTheme, noop } from 'reactackle-core';
import { FormMessageStyled } from './styles/FormMessageStyled';
import componentTheme from './styles/theme';

registerDefaultComponentTheme('form', componentTheme);

const propTypes = {
  /**
   * Determines error text of the form
   */
  errorMessage: PropTypes.string,
  /**
   * Specify function that will be called on Form submit
   */
  onSubmit: PropTypes.func,
};
const defaultProps = {
  errorMessage: '',
  onSubmit: noop,
};

export default class Form extends Component {
  constructor() {
    super();

    this.domNode = null;

    this._scrollToError = this._scrollToError.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._saveRef = this._saveRef.bind(this);
  }

  componentDidMount() {
    if (this.props.errorMessage) this._scrollToError();
  }

  componentDidUpdate() {
    if (this.props.errorMessage) this._scrollToError();
  }

  _scrollToError() {
    if (this.domNode) {
      this.domNode.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }

  _saveRef(ref) {
    this.domNode = ref;
  }

  _handleSubmit(e) {
    e.preventDefault();
    if (this.props.onSubmit) this.props.onSubmit();
  }

  render() {
    const { errorMessage, children } = this.props;
    const message = errorMessage
      ? <FormMessageStyled>
          {errorMessage}
        </FormMessageStyled>
      : null;

    return (
      <form ref={this._saveRef} onSubmit={this._handleSubmit}>
        {message}
        {children}
      </form>
    );
  }
}

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;
Form.displayName = 'Form';
