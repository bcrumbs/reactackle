'use strict';

/* eslint-disable import/no-extraneous-dependencies */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import { CodeBoxStyled } from './styles/CodeBoxStyled';

const propTypes = {
  language: PropTypes.string,
  code: PropTypes.string,
};

const defaultProps = {
  language: 'javascript',
  code: 'function() {\n  console.log(\'I\\\'m a code snippet! \\\\m/\');\n}',
};

export class CodeBox extends PureComponent {
  constructor(props) {
    super(props);
    this._code = null;
    this._createCodeRef = this._createCodeRef.bind(this);
  }
  
  componentDidMount() {
    this._hightlight();
  }
  
  componentDidUpdate() {
    this._hightlight();
  }
  
  _createCodeRef(ref) {
    this._code = ref;
  }
  
  _hightlight() {
    if (this._code)
      Prism.highlightElement(this._code, false);
  }
  
  render() {
    return (
      <CodeBoxStyled>
        <code
          className={`language-${this.props.language}`}
          ref={this._createCodeRef}
        >
          {this.props.code}
        </code>
      </CodeBoxStyled>
    );
  }
}

CodeBox.propTypes = propTypes;
CodeBox.defaultProps = defaultProps;
CodeBox.displayName = 'CodeBox';
