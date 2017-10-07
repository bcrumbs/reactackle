import React from 'react';
import { RouteInfo, RouteProps } from '../../components/Route/RouteStructure';
//eslint-disable-next-line
import IconCode from '!raw-loader!../../../packages/reactackle-icons/src/IconSvg/IconSvg';

const propTypes = RouteInfo.propTypes;
const defaultProps = {
  ...RouteInfo.defaultProps,
  componentTitle: 'IconSVG',
  routeTitle: 'Icon SVG',
};

export const IconSvgIndexRoute = props => {
  const itemProps = <RouteProps componentCode={IconCode} />;

  return (
    <div className="route-info">
      <RouteInfo {...props}>
        {itemProps}
      </RouteInfo>
    </div>
  );
};

IconSvgIndexRoute.propTypes = propTypes;
IconSvgIndexRoute.defaultProps = defaultProps;
IconSvgIndexRoute.displayName = 'IconSvgIndexRoute';
