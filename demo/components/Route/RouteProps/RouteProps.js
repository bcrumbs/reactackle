'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { ArticleModule, ArticleHeader } from '../../Article/Article';
import { PropsTable } from '../../PropsTable/PropsTable';
import generatePropsTables from '../../PropsTable/generatePropsTables';

const propTypes = {
  // eslint-disable-next-line react/require-default-props
  componentCode: PropTypes.string,
  title: PropTypes.string,
};

const defaultProps = {
  title: 'Component Props',
};

export const RouteProps = ({ componentCode, title }) => {
  let propsTablesElements;
  if (componentCode) {
    const propsTables = generatePropsTables(componentCode, title);
    propsTablesElements = Object.entries(propsTables).map(([key, value]) =>
      <div key={key}>
        <ArticleHeader level={2}>
          <a id={key}>
            {key}
          </a>
        </ArticleHeader>
        <PropsTable propsDescription={value} />
      </div>,
    );
  }

  return (
    <ArticleModule>
      {propsTablesElements}
    </ArticleModule>
  );
};

RouteProps.propTypes = propTypes;
RouteProps.defaultProps = defaultProps;
RouteProps.displayName = 'RouteProps';
