import React from 'react';

// eslint-disable-next-line
import ProgressBaseCode from '!raw-loader!../../../../packages/reactackle-progress/src/ProgressBase/ProgressBase';

import { RouteInfo, RouteProps } from '../../../components/Route/RouteStructure';

const propTypes = RouteInfo.propTypes;
const defaultProps = {
  ...RouteInfo.defaultProps,
  componentTitle: 'LinearProgress',
  routeTitle: 'Linear Progress',
};

export const LinearProgressIndexRoute = props => {
  const itemProps = (
    <RouteProps
      componentCode={ProgressBaseCode}
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

LinearProgressIndexRoute.propTypes = propTypes;
LinearProgressIndexRoute.defaultProps = defaultProps;
LinearProgressIndexRoute.displayName = 'LinearProgressIndexRoute';
