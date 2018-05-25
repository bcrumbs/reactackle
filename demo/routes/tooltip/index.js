import React from 'react';
import {
  RouteInfo,
  RouteProps,
  RouteMemo,
  MemoItem,
} from '../../components/Route/RouteStructure';

// eslint-disable-next-line
import DynamicTooltipSlotCode from '!raw-loader!../../../packages/reactackle-tooltip/src/DynamicTooltipSlot';

// eslint-disable-next-line
import StaticTooltipSlotCode from '!raw-loader!../../../packages/reactackle-tooltip/src/StaticTooltipSlot';

const propTypes = RouteInfo.propTypes;
const defaultProps = {
  ...RouteInfo.defaultProps,
  componentTitle: 'Tooltip',
  routeTitle: 'Tooltip',
};

export const TooltipIndexRoute = props => {
  const itemProps = [
    <RouteProps
      componentCode={DynamicTooltipSlotCode}
      key="dynamic-tooltip"
      title="Dynamic tooltip slot"
    />,
    <RouteProps
      componentCode={StaticTooltipSlotCode}
      key="static-tooltip"
      title="Static tooltip slot"
    />,
  ];

  return (
    <div className="route-info">
      <RouteInfo {...props}>
        {itemProps}

        <RouteMemo>
          <MemoItem>
            See AutoPosition props for precise Tooltip's position definition.
          </MemoItem>
        </RouteMemo>
      </RouteInfo>
    </div>
  );
};

TooltipIndexRoute.propTypes = propTypes;
TooltipIndexRoute.defaultProps = defaultProps;
TooltipIndexRoute.displayName = 'TooltipIndexRoute';
