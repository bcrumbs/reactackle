import React from 'react';
import {
  RouteInfo,
  RouteProps,
} from '../../components/Route/RouteStructure';

import { ArticleModule, ArticleTextBox } from '../../components/Article';

// eslint-disable-next-line
import SidebarCode from '!raw-loader!../../../packages/reactackle-sidebar/src/Sidebar';

const propTypes = RouteInfo.propTypes;
const defaultProps = {
  ...RouteInfo.defaultProps,
  componentTitle: 'Sidebar',
  routeTitle: 'Sidebar',
};

export const SidebarIndexRoute = props => {
  const itemProps = (
    <RouteProps
      componentCode={SidebarCode}
    />
  );

  return (
    <div className="route-info">
      <RouteInfo {...props}>
        <ArticleModule>
          <ArticleTextBox>
            <p>Sidebar consists of 2 wrappers: Sidebar (the top one) and
              SidebarBox.</p>
            <p>Sidebar-wrapper is positioned relatively to set proper boundaries
              for the SidebarBox to avoid using JS for the most cases. As
              SidebarBox is now positioned fixedly you should make sure that
              Sidebar (top wrapper) height completely fits window height.</p>
            <p>In Reactackle we have an App component with few regions: Top,
              Main and Bottom. Sidebar is designed to be placed in MainRegion -
              this helps to set Sidebar height and to make sure that main
              content of the page (component Content), placed aside Sidebar,
              will change its width whether Sidebar is collapsed or not. To make
              Sidebar fit windows height you should set to set App`s prop.fixed
              to true. It`ll work with following restrictions:</p>
            <ol>
              <li>If you don’t have anything above Sidebar or have anything with
                constant height, Sidebar is going to work on its own.</li>
              <li>If you’re going to temporarily add anything above Sidebar or
                have the component which height varies, you`ll need to
                dynamically change top coordinate of the SidebarBox. Also, as
                SidebarBox is positioned fixedly, you’ll need to set a height
                for SidebarBox, for example, equals to (100vh - topOffset +
                bottomOffset), to make sure Sidebar fits the screen height.</li>
            </ol>
          </ArticleTextBox>
        </ArticleModule>

        { itemProps }
      </RouteInfo>
    </div>
  );
};

SidebarIndexRoute.propTypes = propTypes;
SidebarIndexRoute.defaultProps = defaultProps;
SidebarIndexRoute.displayName = 'SidebarIndexRoute';
