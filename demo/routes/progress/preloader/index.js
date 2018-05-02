import React from 'react';
import { Preloader } from 'reactackle';

import {
  RouteInfo,
  RouteProps,
} from '../../../components/Route/RouteStructure';

const propTypes = RouteInfo.propTypes;
const defaultProps = {
  ...RouteInfo.defaultProps,
  componentTitle: 'Preloader',
  routeTitle: 'Preloader',
};

export const PreloaderIndexRoute = props => {
  const itemProps = null;


  return (
    <div className="route-info">
      <RouteInfo {...props}>
        { itemProps }
      </RouteInfo>
    </div>
  );
};

PreloaderIndexRoute.propTypes = propTypes;
PreloaderIndexRoute.defaultProps = defaultProps;
PreloaderIndexRoute.displayName = 'PreloaderIndexRoute';
