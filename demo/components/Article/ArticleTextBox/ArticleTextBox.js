import React from 'react';

import {
  ArticleTextBoxStyled,
 } from './styles/ArticleTextBoxStyled';

export const ArticleTextBox = props => (
  <ArticleTextBoxStyled>
    {props.children}
  </ArticleTextBoxStyled>
);

ArticleTextBox.displayName = 'ArticleTextBox';
