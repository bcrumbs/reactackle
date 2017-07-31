import React from 'react';
import {
  RouteInfo,
  RouteProps,
} from '../../components/Route/RouteStructure';

//eslint-disable-next-line
import AppCode from '!raw-loader!../../../packages/reactackle-app/src/App';
//eslint-disable-next-line
import TopRegionCode from '!raw-loader!../../../packages/reactackle-app/src/TopRegion/TopRegion';
//eslint-disable-next-line
import MainRegionCode from '!raw-loader!../../../packages/reactackle-app/src/MainRegion/MainRegion';
//eslint-disable-next-line
import BottomRegionCode from '!raw-loader!../../../packages/reactackle-app/src/BottomRegion/BottomRegion';
//eslint-disable-next-line
import ContentCode from '!raw-loader!../../../packages/reactackle-app/src/MainRegion/Content/Content';

const propTypes = RouteInfo.propTypes;
const defaultProps = {
  ...RouteInfo.defaultProps,
  componentTitle: 'App',
  routeTitle: 'App',
};

export const AppIndexRoute = props => {
  const itemProps = (
    <RouteProps
      componentCode={AppCode}
    />
  );
  
  return (
    <div className="route-info">
      <RouteInfo {...props}>
        {itemProps}
      </RouteInfo>
    </div>
  );
};

AppIndexRoute.propTypes = propTypes;
AppIndexRoute.defaultProps = defaultProps;
AppIndexRoute.displayName = 'AppIndexRoute';
