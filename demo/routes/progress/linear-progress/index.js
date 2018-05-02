import React from 'react';
import { RouteInfo } from '../../../components/Route/RouteStructure';

const propTypes = RouteInfo.propTypes;
const defaultProps = {
  ...RouteInfo.defaultProps,
  componentTitle: 'LinearProgress',
  routeTitle: 'Linear Progress',
};

export const LinearProgressIndexRoute = props => {
  const itemProps = null;

  return (
    <div className="route-info">
      <RouteInfo {...props}>
        
      </RouteInfo>
    </div>
  );
};

LinearProgressIndexRoute.propTypes = propTypes;
LinearProgressIndexRoute.defaultProps = defaultProps;
LinearProgressIndexRoute.displayName = 'LinearProgressIndexRoute';
