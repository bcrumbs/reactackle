'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { TestBoxStyled } from './styles/TestBoxStyled';
import { TestBoxContentStyled } from './styles/TestBoxContentStyled';
import { TestBoxTitleStyled } from './styles/TestBoxTitleStyled';

const propTypes = {
  spread: PropTypes.bool,
  bgColor: PropTypes.string,
  padding: PropTypes.bool,
  textAlign: PropTypes.string,
  width: PropTypes.string,
  minWidth: PropTypes.string,
  maxWidth: PropTypes.string,
  minHeight: PropTypes.string,
  fontSize: PropTypes.string,
  flex: PropTypes.bool,
  flexDirection: PropTypes.string,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  title: PropTypes.string,
  bordered: PropTypes.bool,
  shrinkForbiden: PropTypes.bool,
  spaced: PropTypes.bool,
  contentSpaced: PropTypes.bool,
};

const defaultProps = {
  spread: false,
  bgColor: '',
  padding: false,
  textAlign: 'left',
  width: 'auto',
  minWidth: '0',
  maxWidth: '100%',
  minHeight: '0',
  fontSize: '',
  flex: false,
  flexDirection: '',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  title: '',
  bordered: false,
  shrinkForbiden: false,
  spaced: false,
  contentSpaced: false,
};

export const TestBox = props => (
  <TestBoxStyled
    spread={props.spread}
    shrinkForbiden={props.shrinkForbiden}
    bordered={props.bordered}
    width={props.width}
    maxWidth={props.maxWidth}
    spaced={props.spaced}
  >
    {
      props.title
        ? (
          <TestBoxTitleStyled>
            <strong>{props.title}</strong>
          </TestBoxTitleStyled>
        )
        : null
    }
    <TestBoxContentStyled
      padding={props.padding}
      textAlign={props.textAlign}
      minWidth={props.minWidth}
      minHeight={props.minHeight}
      fontSize={props.fontSize}
      flex={props.flex}
      flexDirection={props.flexDirection}
      justifyContent={props.justifyContent}
      alignItems={props.alignItems}
      bgColor={props.bgColor}
      contentSpaced={props.contentSpaced}
    >
      {props.children}
    </TestBoxContentStyled>
  </TestBoxStyled>
);

TestBox.propTypes = propTypes;
TestBox.defaultProps = defaultProps;
TestBox.displayName = 'TestBox';
