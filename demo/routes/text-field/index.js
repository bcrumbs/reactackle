'use strict';

import React from 'react';
import {
  TextField,
} from 'reactackle';
import {
  RouteInfo,
  RouteProps,
} from '../../components/Route/RouteStructure';

// eslint-disable-next-line
import TextFieldCode from '!raw-loader!../../../packages/reactackle-text-field/src/TextField';

const propTypes = RouteInfo.propTypes;
const defaultProps = {
  ...RouteInfo.defaultProps,
  componentTitle: 'TextField',
  routeTitle: 'TextField',
};

export const TextFieldIndexRoute = props => {
  const itemProps = (
    <RouteProps
      componentCode={TextFieldCode}
      component={TextField}
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

TextFieldIndexRoute.propTypes = propTypes;
TextFieldIndexRoute.defaultProps = defaultProps;
TextFieldIndexRoute.displayName = 'TextFieldIndexRoute';
