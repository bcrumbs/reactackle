import React from 'react';
import { RouteInfo, RouteProps } from '../../../components/Route/RouteStructure';

// eslint-disable-next-line
import { CircleProgress as CircleProgressCode } from '!raw-loader!../../../../packages/reactackle-progress/src/';

const propTypes = RouteInfo.propTypes;

const defaultProps = {
  ...RouteInfo.defaultProps,
  componentTitle: 'CircleProgress',
  routeTitle: 'Circle Progress',
};

export const CircleProgressIndexRoute = props => {
  const itemProps = (
    <RouteProps
      componentCode={CircleProgressCode}
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

CircleProgressIndexRoute.propTypes = propTypes;
CircleProgressIndexRoute.defaultProps = defaultProps;
CircleProgressIndexRoute.displayName = 'CircleProgressIndexRoute';
