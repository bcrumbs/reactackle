'use strict';

import React from 'react';
import { Link } from 'react-router-dom';

import {
  RouteStructure,
  RouteInfo,
} from '../../components/Route/RouteStructure';

import {
  ArticleModule,
  ArticleHeader,
} from '../../components/Article/Article';

import { CodeBox } from '../../components/CodeBox/CodeBox';
import Theming from './snippets/theming.snippet';

const propTypes = RouteInfo.propTypes;
const defaultProps = {
  ...RouteInfo.defaultProps,
};

export const CustomizingRoute = () => (
  <RouteStructure>
    <RouteInfo
      routeTitle="Customizing"
    >
      <ArticleModule>
        <p>Reactackle allows customising all basic design aspects in order to
          meet UI diversity.</p>
        <p>To get availability to style your project, you may use two
          wrappers:</p>
        <ul>
          <li>
            <Link to="/theme">Theme</Link> from reactackle — user it to
            customise components.</li>
          <li><a href="https://www.styled-components.com/docs/advanced#theming">
              ThemeProvider
            </a> from <a href="https://www.styled-components.com/docs">
            styled-components</a> — use it when you need to add your own
            constants to the theme.
          </li>
        </ul>
        <CodeBox code={Theming} />
        <ArticleHeader>Related Articles</ArticleHeader>
        <p><Link to="/theme">&lt;Theme /&gt; component</Link></p>
      </ArticleModule>
      
    </RouteInfo>
  </RouteStructure>
);

CustomizingRoute.propTypes = propTypes;
CustomizingRoute.defaultProps = defaultProps;
CustomizingRoute.displayName = 'CustomizingRoute';
