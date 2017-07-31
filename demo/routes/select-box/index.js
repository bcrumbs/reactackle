'use strict';

import React from 'react';
import { RouteInfo, RouteProps } from '../../components/Route/RouteStructure';
// eslint-disable-next-line
import SelectBoxCode from '!raw-loader!../../../packages/reactackle-selectbox/src/SelectBox';
// eslint-disable-next-line
import SelectBoxNativeCode from '!raw-loader!../../../packages/reactackle-selectbox/src/SelectBoxNative/SelectBoxNative';
// eslint-disable-next-line
import SelectBoxCustomCode from '!raw-loader!../../../packages/reactackle-selectbox/src/SelectBoxCustom/SelectBoxCustom';

const propTypes = RouteInfo.propTypes;
const defaultProps = {
  ...RouteInfo.defaultProps,
  componentTitle: 'SelectBox',
  routeTitle: 'SelectBox',
};

export const SelectBoxIndexRoute = props => {
  const itemProps = <RouteProps componentCode={SelectBoxCode} />;
  const itemNativeProps =
    <RouteProps title="Native" componentCode={SelectBoxNativeCode} />;
  const itemCustomProps =
    <RouteProps title="Custom" componentCode={SelectBoxCustomCode} />;

  return (
    <div className="route-info">
      <RouteInfo {...props}>
        {itemProps}
        {itemNativeProps}
        {itemCustomProps}
      </RouteInfo>
    </div>
  );
};

SelectBoxIndexRoute.propTypes = propTypes;
SelectBoxIndexRoute.defaultProps = defaultProps;
SelectBoxIndexRoute.displayName = 'SelectBoxIndexRoute';
