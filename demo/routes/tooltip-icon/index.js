'use strict';

import React from 'react';
import { RouteInfo, RouteProps } from '../../components/Route/RouteStructure';
// eslint-disable-next-line
import TooltipIconCode from '!raw-loader!../../../packages/reactackle-tooltip-icon/src/TooltipIcon';

const propTypes = RouteInfo.propTypes;
const defaultProps = {
  ...RouteInfo.defaultProps,
  componentTitle: 'TooltipIcon',
  routeTitle: 'TooltipIcon',
};

export const TooltipIconIndexRoute = props => {
  const itemProps = <RouteProps componentCode={TooltipIconCode} />;

  return (
    <div className="route-info">
      <RouteInfo {...props}>
        {itemProps}
      </RouteInfo>
    </div>
  );
};

TooltipIconIndexRoute.propTypes = propTypes;
TooltipIconIndexRoute.defaultProps = defaultProps;
TooltipIconIndexRoute.displayName = 'TooltipIconIndexRoute';
