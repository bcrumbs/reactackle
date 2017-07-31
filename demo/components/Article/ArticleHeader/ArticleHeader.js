'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { ArticleHeaderStyled } from './styles/ArticleHeaderStyled';

const propTypes = {
  level: PropTypes.oneOf([1, 2]),
};

const defaultProps = {
  level: 2,
};

export const ArticleHeader = props => (
  <ArticleHeaderStyled level={props.level}>
    {props.children}
  </ArticleHeaderStyled>
);

ArticleHeader.propTypes = propTypes;
ArticleHeader.defaultProps = defaultProps;
ArticleHeader.displayName = 'ArticleHeader';
