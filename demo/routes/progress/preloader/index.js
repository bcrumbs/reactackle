import React from 'react';

// eslint-disable-next-line
import PreloaderCode from '!raw-loader!../../../../packages/reactackle-progress/src/Preloader/Preloader';

// eslint-disable-next-line
import ProgressBaseCode from '!raw-loader!../../../../packages/reactackle-progress/src/ProgressBase/ProgressBase';

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
  const itemProps = (
    [
      <RouteProps
        key='progress-base'
        componentCode={ProgressBaseCode}
      />,
      <RouteProps
        key='preloader'
        componentCode={PreloaderCode}
      />,
    ]
  );

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
