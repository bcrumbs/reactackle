'use strict';

import React from 'react';
import { ArticleLeadStyled } from './styles/ArticleLeadStyled';

const propTypes = {};
const defaultProps = {};

export const ArticleLead = props => (
  <ArticleLeadStyled>
    {props.children}
  </ArticleLeadStyled>
);

ArticleLead.propTypes = propTypes;
ArticleLead.defaultProps = defaultProps;
ArticleLead.displayName = 'ArticleLead';
