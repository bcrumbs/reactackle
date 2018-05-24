import React from 'react';
import { RouteInfo, RouteProps } from '../../components/Route/RouteStructure';
// eslint-disable-next-line
import TooltipCode from '!raw-loader!../../../packages/reactackle-tooltip/src/Tooltip';

const propTypes = RouteInfo.propTypes;
const defaultProps = {
  ...RouteInfo.defaultProps,
  componentTitle: 'Tooltip',
  routeTitle: 'Tooltip',
};

export const TooltipIndexRoute = props => {
  const itemProps = [
    <RouteProps componentCode={TooltipCode} key='tooltip' />,
  ];

  return (
    <div className="route-info">
      <RouteInfo {...props}>
        {itemProps}
      </RouteInfo>
    </div>
  );
};

TooltipIndexRoute.propTypes = propTypes;
TooltipIndexRoute.defaultProps = defaultProps;
TooltipIndexRoute.displayName = 'TooltipIndexRoute';
