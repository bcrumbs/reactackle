'use strict';

import React from 'react';
import {
  ArticleModule,
  ArticleHeader,
} from '../../components/Article/Article';
import {
  RouteInfo,
  RouteProps,
} from '../../components/Route/RouteStructure';
import {
  CodeBox,
} from '../../components/CodeBox/CodeBox';
// eslint-disable-next-line
import TabsCode from '!raw-loader!../../../packages/reactackle-tabs/src/Tabs';
// eslint-disable-next-line
import TabCode from '!raw-loader!../../../packages/reactackle-tabs/src/Tab/Tab';
import reactRouterSnippet from './snippets/react-router.snippet';

const propTypes = RouteInfo.propTypes;
const defaultProps = {
  ...RouteInfo.defaultProps,
  componentTitle: 'Tabs',
  routeTitle: 'Tabs',
};

export const TabsIndexRoute = props => {
  const itemProps = (
    <RouteProps
      componentCode={TabsCode}
      title="Tabs Props"
    />
  );

  const tabProps = (
    <RouteProps
      componentCode={TabCode}
      title="Tab Props"
    />
  );

  return (
    <div className="route-info">
      <RouteInfo {...props}>
        <ArticleModule columns="2">
          <ArticleHeader>Notes</ArticleHeader>
          <p>
            By default, Tabs passes `href` prop to the inner
            LinkComponent that you specify. If your LinkComponent
            expect another prop than `href`, use wrapper like this:
          </p>
          <CodeBox code={reactRouterSnippet} />
        </ArticleModule>
        { itemProps }
        { tabProps }
      </RouteInfo>
    </div>
  );
};

TabsIndexRoute.propTypes = propTypes;
TabsIndexRoute.defaultProps = defaultProps;
TabsIndexRoute.displayName = 'TabsIndexRoute';
