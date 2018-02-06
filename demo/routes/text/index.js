import React from 'react';
import { RouteInfo, RouteProps } from '../../components/Route/RouteStructure';
// eslint-disable-next-line
import ComponentCode from '!raw-loader!../../../packages/reactackle-text/src/Text';

const propTypes = RouteInfo.propTypes;
const defaultProps = {
  ...RouteInfo.defaultProps,
  componentTitle: 'Text',
  routeTitle: 'Text',
};

export const TooltipIndexRoute = props => {
  const itemProps = <RouteProps componentCode={ComponentCode} />;

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
