'use strict';

import React from 'react';
import {
  RouteInfo,
} from '../../components/Route/RouteStructure';

import {
  ArticleModule,
  ArticleHeader,
} from '../../components/Article/Article';

import { CodeBox } from '../../components/CodeBox/CodeBox';
import ThemeStructure from './snippets/theme-structure.snippet';
import MixinExample from './snippets/mixin-example.snippet';
import ThemeUse from './snippets/theme-use.snippet';
import ThemeProviderExample from './snippets/theme-provider.snippet';

const propTypes = RouteInfo.propTypes;
const defaultProps = {
  ...RouteInfo.defaultProps,
  componentTitle: 'Theme',
  routeTitle: 'Theme',
};

export const ThemeIndexRoute = props => (
  <div className="route-info">
    <RouteInfo {...props}>
      <ArticleModule>
        <ArticleHeader>Use</ArticleHeader>
        <p>&lt;Theme /&gt; provides a theme to all React components underneath
          itself.</p>
        <CodeBox code={ThemeUse} />
        
        <ArticleHeader>Theme structure</ArticleHeader>
        <p>Theme consists of two parts:</p>
        <ul>
          <li>base — collection of global constants used throughout all
            components to keep consistency and styling flexibility;</li>
          <li>components — collection of constants grouped by components.</li>
        </ul>
        <CodeBox code={ThemeStructure} />
        
        <ArticleHeader>Customizing</ArticleHeader>
        <p>You can customise the whole app or just some of its section. Just
          wrap the necessary part with &lt;Theme mixin=&#123;reactackleMixin
          &#125; /&gt;, where reactackleMixin is a collection of customised
          variables.</p>
        <p>You should place in mixin only that part of the theme which is to be
          customised.</p>
        <CodeBox code={MixinExample} />
        <p>A full list of constants supported by the component may be found in
          the component directory (ex. Button/styles/theme.js)</p>
        
        <ArticleHeader>Custom constants</ArticleHeader>
        <p>Please note, that &lt;Theme /&gt; supports only constants supplied by
          reactackle. All other constants will be ignored.</p>
        <p>To add custom constants to theme prop, you should add an additional
          wrapper around necessary project section:</p>
        <CodeBox code={ThemeProviderExample} />
      </ArticleModule>
    </RouteInfo>
  </div>
);

ThemeIndexRoute.propTypes = propTypes;
ThemeIndexRoute.defaultProps = defaultProps;
ThemeIndexRoute.displayName = 'ThemeIndexRoute';
