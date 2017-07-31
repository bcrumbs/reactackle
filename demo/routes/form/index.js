'use strict';

import React from 'react';
import {
  RouteInfo,
  RouteProps,
} from '../../components/Route/RouteStructure';
//eslint-disable-next-line
import FormCode from '!raw-loader!../../../packages/reactackle-form/src/Form';

const propTypes = RouteInfo.propTypes;
const defaultProps = {
  ...RouteInfo.defaultProps,
  routeTitle: 'Form',
};

export const FormIndexRoute = props => {
  const itemProps = (
    <RouteProps
      componentCode={FormCode}
    />
  );
  
  return (
    <div className="route-info">
      <RouteInfo {...props}>
        {itemProps}
      </RouteInfo>
    </div>
  );
};

FormIndexRoute.propTypes = propTypes;
FormIndexRoute.defaultProps = defaultProps;
FormIndexRoute.displayName = 'FormIndexRoute';
