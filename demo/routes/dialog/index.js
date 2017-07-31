'use strict';

import React from 'react';
import {
  RouteInfo,
  RouteProps,
} from '../../components/Route/RouteStructure';
// eslint-disable-next-line
import DialogCode from '!raw-loader!../../../packages/reactackle-dialog/src/Dialog';

const propTypes = RouteInfo.propTypes;
const defaultProps = {
  ...RouteInfo.defaultProps,
  routeTitle: 'Dialog',
  routeLead: 'Full-screen dialogs group a series of tasks (such as creating'
    + ' a calendar entry) before they may be committed or discarded. No'
    + ' selections are saved until “Save” is touched. Touching the “X”'
    + ' discards all changes and exits the dialog.',
};

export const DialogIndexRoute = props => {
  const itemProps = (
    <RouteProps
      componentCode={DialogCode}
    />
  );
  
  return (
    <div className="route-info">
      <RouteInfo {...props}>
        { itemProps }
      </RouteInfo>
    </div>
  );
};

DialogIndexRoute.propTypes = propTypes;
DialogIndexRoute.defaultProps = defaultProps;
DialogIndexRoute.displayName = 'DialogIndexRoute';
