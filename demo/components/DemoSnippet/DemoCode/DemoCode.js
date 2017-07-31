'use strict';

/* eslint-disable import/no-extraneous-dependencies */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import { Container } from 'reactackle';
import { DemoCodeStyled } from './styles/DemoCodeStyled';

const propTypes = {
  code: PropTypes.string,
};
const defaultProps = {
  code: 'function() {\n  console.log(\'I\\\'m a code snippet! \\\\m/\');\n}',
};

export class DemoCode extends PureComponent {
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
      <DemoCodeStyled>
        <Container boxed>
          <code className="language-javascript" ref={this._createCodeRef}>
            {this.props.code}
          </code>
        </Container>
      </DemoCodeStyled>
    );
  }
}

DemoCode.propTypes = propTypes;
DemoCode.defaultProps = defaultProps;
DemoCode.displayName = 'DemoCode';
