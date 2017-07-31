'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {
  Article,
  ArticleLead,
  ArticleHeader,
  ArticleModule,
} from '../../Article/Article';

const propTypes = {
  routeTitle: PropTypes.string,
  routeLead: PropTypes.string,
};
const defaultProps = {
  routeTitle: '',
  routeLead: '',
};

export const RouteInfo = props => (
  <Article>
    <ArticleModule>
      <ArticleHeader level={1}>{props.routeTitle}</ArticleHeader>

      { props.routeLead
        ? <ArticleLead>{props.routeLead}</ArticleLead>
        : null
      }
      
    </ArticleModule>
    
    {props.children}
    
  </Article>
);

RouteInfo.propTypes = propTypes;
RouteInfo.defaultProps = defaultProps;
RouteInfo.displayName = 'RouteInfo';
