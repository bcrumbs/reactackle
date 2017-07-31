'use strict';

import React from 'react';

import {
  ArticleModuleStyled,
 } from '../ArticleModule/styles/ArticleModuleStyled';

const propTypes = {};
const defaultProps = {};

export const ArticleModule = props => (
  <ArticleModuleStyled>
    {props.children}
  </ArticleModuleStyled>
);

ArticleModule.propTypes = propTypes;
ArticleModule.defaultProps = defaultProps;
ArticleModule.displayName = 'ArticleModule';
