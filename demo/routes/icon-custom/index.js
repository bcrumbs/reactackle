import React from 'react';
import { RouteInfo, RouteProps } from '../../components/Route/RouteStructure';
//eslint-disable-next-line
import IconCode from '!raw-loader!../../../packages/reactackle-icons/src/IconCustom/IconCustom';

const propTypes = RouteInfo.propTypes;
const defaultProps = {
  ...RouteInfo.defaultProps,
  componentTitle: 'IconCustom',
  routeTitle: 'Icon Custom',
};

export const IconCustomIndexRoute = props => {
  const itemProps = <RouteProps componentCode={IconCode} />;

  return (
    <div className="route-info">
      <RouteInfo {...props}>
        {itemProps}
      </RouteInfo>
    </div>
  );
};

IconCustomIndexRoute.propTypes = propTypes;
IconCustomIndexRoute.defaultProps = defaultProps;
IconCustomIndexRoute.displayName = 'IconCustomIndexRoute';
