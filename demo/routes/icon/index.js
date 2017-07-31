'use strict';

import React from 'react';
import { RouteInfo, RouteProps } from '../../components/Route/RouteStructure';
//eslint-disable-next-line
import IconCode from '!raw-loader!../../../packages/reactackle-icon/src/Icon';
//eslint-disable-next-line
import IconFontAwesomeCode from '!raw-loader!../../../packages/reactackle-icon/src/IconFontAwesome/IconFontAwesome';
//eslint-disable-next-line
import IconLibraryCode from '!raw-loader!../../../packages/reactackle-icon/src/IconLibrary/IconLibrary';

const propTypes = RouteInfo.propTypes;
const defaultProps = {
  ...RouteInfo.defaultProps,
  componentTitle: 'Icon',
  routeTitle: 'Icon',
};

export const IconIndexRoute = props => {
  const itemProps = <RouteProps componentCode={IconCode} />;

  const itemFAProps = (
    <RouteProps componentCode={IconFontAwesomeCode} title="FontAwesome" />
  );

  const itemLibProps = (
    <RouteProps
      componentCode={IconLibraryCode}
      title="Library (custom) icons"
    />
  );

  return (
    <div className="route-info">
      <RouteInfo {...props}>
        {itemProps}
        {itemFAProps}
        {itemLibProps}
      </RouteInfo>
    </div>
  );
};

IconIndexRoute.propTypes = propTypes;
IconIndexRoute.defaultProps = defaultProps;
IconIndexRoute.displayName = 'IconIndexRoute';
