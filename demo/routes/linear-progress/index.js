import React from 'react';
import {
  RouteInfo,
  RouteProps,
} from '../../components/Route/RouteStructure';
// eslint-disable-next-line
import ProgressBaseCode from '!raw-loader!../../../packages/reactackle-progress/src/ProgressBase/ProgressBase';
// eslint-disable-next-line
import LinearProgressCode from '!raw-loader!../../../packages/reactackle-progress/src/LinearProgress/LinearProgress';

const propTypes = RouteInfo.propTypes;
const defaultProps = {
  ...RouteInfo.defaultProps,
  componentTitle: 'LinearProgress',
  routeTitle: 'Linear Progress',
};

export const LinearProgressIndexRoute = props => {
  const baseProps = (
    <RouteProps
      title="base props"
      componentCode={ProgressBaseCode}
    />
  );

  const linearProps = (
    <RouteProps
      title="linear props"
      componentCode={LinearProgressCode}
    />
  );

  return (
    <div className="route-info">
      <RouteInfo {...props}>
        { baseProps }
        { linearProps }
      </RouteInfo>
    </div>
  );
};

LinearProgressIndexRoute.propTypes = propTypes;
LinearProgressIndexRoute.defaultProps = defaultProps;
LinearProgressIndexRoute.displayName = 'LinearProgressIndexRoute';
