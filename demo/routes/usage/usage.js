'use strict';

import React from 'react';

import {
  RouteStructure,
  RouteInfo,
} from '../../components/Route/RouteStructure';

import {
  ArticleModule,
  ArticleHeader,
} from '../../components/Article/Article';

import { CodeBox } from '../../components/CodeBox/CodeBox';

import InstallNPM from './snippets/install-npm.snippet';
import InstallYarn from './snippets/install-yarn.snippet';
import Import from './snippets/import.snippet';
import ImportGlobal from './snippets/import-global.snippet';
import BasicApp from './snippets/basic-app.snippet';
import IndependentInstallApp from './snippets/independent-install.snippet';

const propTypes = RouteInfo.propTypes;
const defaultProps = {
  ...RouteInfo.defaultProps,
};

export const UsageRoute = () => (
  <RouteStructure>
    <RouteInfo
      routeTitle="Getting Started"
    >
      <ArticleModule>
        <ArticleHeader>Using npm or yarn</ArticleHeader>
        <CodeBox language="bash" code={InstallNPM} />
        <CodeBox language="bash" code={InstallYarn} />
        <p>Also you can install each component independently</p>
        <CodeBox language="bash" code={IndependentInstallApp} />
        <ArticleHeader>Usage</ArticleHeader>
        <p>Import component from Reactackle:</p>
        <CodeBox code={Import} />
        <p>Import global styles manually in the index file (these styles are
          optional, you can replace it with your own global style sheet).</p>
        <CodeBox code={ImportGlobal} />
        <ArticleHeader>Basic app structure</ArticleHeader>
        <CodeBox code={BasicApp} />
      </ArticleModule>
    </RouteInfo>
  </RouteStructure>
);

UsageRoute.propTypes = propTypes;
UsageRoute.defaultProps = defaultProps;
UsageRoute.displayName = 'UsageRoute';
