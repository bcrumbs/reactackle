import React from 'react';
import {
  RouteInfo,
  RouteProps,
} from '../../components/Route/RouteStructure';
// eslint-disable-next-line
import ProgressBaseCode from '!raw-loader!../../../packages/reactackle-progress/src/ProgressBase/ProgressBase';
// eslint-disable-next-line
import PreloaderProgressCode from '!raw-loader!../../../packages/reactackle-progress/src/Preloader/Preloader';


const propTypes = RouteInfo.propTypes;
const defaultProps = {
  ...RouteInfo.defaultProps,
  componentTitle: 'Preloader',
  routeTitle: 'Preloader',
};

export const PreloaderIndexRoute = props => {
  const baseProps = (
    <RouteProps
      title="base props"
      componentCode={ProgressBaseCode}
    />
  );

  const preloaderProps = (
    <RouteProps
      title="preloader props"
      componentCode={PreloaderProgressCode}
    />
  );

  return (
    <div className="route-info">
      <RouteInfo {...props}>
        { baseProps }
        { preloaderProps }
      </RouteInfo>
    </div>
  );
};

PreloaderIndexRoute.propTypes = propTypes;
PreloaderIndexRoute.defaultProps = defaultProps;
PreloaderIndexRoute.displayName = 'PreloaderIndexRoute';
