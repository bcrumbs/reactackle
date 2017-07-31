'use strict';

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import {
  baseModule,
  colorMain,
  fontSizeTitle,
  fontSizeDisplay2,
  fontWeightNormal,
  fontWeightSemibold,
  bodyFontColor,
} from '../../../../theme/styleHelpers';

const propTypes = {
  level: PropTypes.oneOf([1, 2]),
};

const defaultProps = {
  level: 2,
};

const level1 = () => css`    
  font-size: ${fontSizeDisplay2}px;
  font-weight: ${fontWeightNormal};
  color: ${colorMain};
`;

const level2 = () => css`    
  font-size: ${fontSizeTitle}px;
  font-weight: ${fontWeightSemibold};
  color: ${bodyFontColor};
  margin-bottom: ${baseModule(2)}px;
`;

const style = ({ level }) => level === 2 ? level2 : level1;

/** STYLES */
export const ArticleHeaderStyled = styled.div`
  margin: 0;
  padding: 0;
  margin-top: ${baseModule(4)}px;
  ${style}
  
  &:first-child {
    margin-top: 0;
  }
`;

ArticleHeaderStyled.propTypes = propTypes;
ArticleHeaderStyled.defaultProps = defaultProps;
ArticleHeaderStyled.displayName = 'ArticleHeaderStyled';
