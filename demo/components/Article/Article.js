import React from 'react';
import { ArticleStyled } from './styles/ArticleStyled';

const propTypes = {};
const defaultProps = {};

export const Article = props => (
  <ArticleStyled>
    {props.children}
  </ArticleStyled>
);

Article.propTypes = propTypes;
Article.defaultProps = defaultProps;
Article.displayName = 'Article';
