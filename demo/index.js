'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { HashRouter, Route } from 'react-router-dom';
import sortBy from 'lodash.sortby';
import kebabCase from 'lodash.kebabcase';
import {
  App,
  MainRegion,
  Sidebar,
  SidebarRegion,
  injectGlobalStyle,
  injectResetStyle,
  Theme,
} from 'reactackle';

import {
  Menu,
  MenuGroup,
  MenuGroupItem,
} from './components/Menu/Menu';

import demoTheme from './theme/theme';
import demoReactackleMixin from './theme/reactackleThemeMixin';

import * as ComponentRoutes from './export';
import { UsageRoute } from './routes/usage/usage';
import { CustomizingRoute } from './routes/customizing/customizing';

/* eslint-disable no-param-reassign */
const componentByName = Object.entries(ComponentRoutes).reduce(
  (acc, [key, component]) => {
    const name = key.replace(/(Demo|Index)?Route$/, '');
    const objectKey = kebabCase(name);

    let type = 'main';
    if (key.endsWith('DemoRoute')) type = 'demo';
    else if (key.endsWith('IndexRoute')) type = 'index';

    if (!acc[objectKey]) acc[objectKey] = { name };
    acc[objectKey][type] = component;

    return acc;
  },
  {},
);
/* eslint-enable no-param-reassign */

const StyledRoute = styled.div`
  height: 100vh;
  width: 100%;
  min-width: 0;
`;

const ComponentDemoPage = ({ match }) => {
  if (
    !match.params.componentName
    || !componentByName[match.params.componentName]
  ) return null;

  const { main, index, demo } = componentByName[match.params.componentName];

  return (
    <StyledRoute>
      <Route path={match.url} component={main} />
      <Route exact path={match.url} component={index} />
      <Route path={`${match.url}/demo`} component={demo} />
    </StyledRoute>
  );
};

ComponentDemoPage.propTypes = {
  match: PropTypes.object.isRequired,
};

injectGlobalStyle();
injectResetStyle();

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <HashRouter>
      <Theme mixin={demoReactackleMixin}>
        <ThemeProvider theme={demoTheme}>
          <App>
            <MainRegion>
              <Sidebar>
                <SidebarRegion spread scrollable>
                  <Menu>
                    <MenuGroup title="General">
                      <MenuGroupItem
                        linkHref="/"
                        text="Getting started"
                      />
                      <MenuGroupItem
                        linkHref="/customizing"
                        text="Customizing"
                      />
                    </MenuGroup>
                    <MenuGroup title="Components">
                      {
                        sortBy(
                          Object.entries(componentByName),
                          ([, { name }]) => name,
                        ).map(
                          ([key, { name }]) => (
                            <MenuGroupItem
                              linkHref={`/${key}`}
                              text={name}
                              key={key}
                            />
                        ))
                      }
                    </MenuGroup>
                  </Menu>
                </SidebarRegion>
              </Sidebar>
              <Route path="/:componentName" component={ComponentDemoPage} />
              <Route path="/" exact component={UsageRoute} />
              <Route path="/customizing" component={CustomizingRoute} />
            </MainRegion>
          </App>

        </ThemeProvider>
      </Theme>
    </HashRouter>,

    document.getElementById('container'),
  );
});
