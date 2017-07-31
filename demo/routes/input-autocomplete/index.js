'use strict';

import React from 'react';

import { RouteInfo, RouteProps } from '../../components/Route/RouteStructure';
// eslint-disable-next-line
import InputAutocompleteCode from '!raw-loader!../../../packages/reactackle-input-autocomplete/src/InputAutocomplete';

const propTypes = RouteInfo.propTypes;
const defaultProps = {
  ...RouteInfo.defaultProps,
  componentTitle: 'InputAutocomplete',
  routeTitle: 'InputAutocomplete',
};

export const InputAutocompleteIndexRoute = props => {
  const itemProps = <RouteProps componentCode={InputAutocompleteCode} />;

  return (
    <div className="route-info">
      <RouteInfo {...props}>
        {itemProps}
      </RouteInfo>
    </div>
  );
};

InputAutocompleteIndexRoute.propTypes = propTypes;
InputAutocompleteIndexRoute.defaultProps = defaultProps;
InputAutocompleteIndexRoute.displayName = 'InputAutocompleteIndexRoute';
