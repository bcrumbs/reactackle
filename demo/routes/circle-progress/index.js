import React from 'react';
import {
  RouteInfo,
  RouteProps,
} from '../../components/Route/RouteStructure';
// eslint-disable-next-line
import ProgressBaseCode from '!raw-loader!../../../packages/reactackle-progress/src/ProgressBase/ProgressBase';
// eslint-disable-next-line
import CircleProgressCode from '!raw-loader!../../../packages/reactackle-progress/src/CircleProgress/CircleProgress';

const propTypes = RouteInfo.propTypes;
const defaultProps = {
  ...RouteInfo.defaultProps,
  componentTitle: 'CircleProgress',
  routeTitle: 'Circle Progress',
};

export const CircleProgressIndexRoute = props => {
  const baseProps = (
    <RouteProps
      title="base props"
      componentCode={ProgressBaseCode}
    />
  );

  const circleProps = (
    <RouteProps
      title="circle props"
      componentCode={CircleProgressCode}
    />
  );

  return (
    <div className="route-info">
      <RouteInfo {...props}>
        { baseProps }
        { circleProps }
      </RouteInfo>
    </div>
  );
};

CircleProgressIndexRoute.propTypes = propTypes;
CircleProgressIndexRoute.defaultProps = defaultProps;
CircleProgressIndexRoute.displayName = 'CircleProgressIndexRoute';
