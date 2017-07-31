'use strict';

import React from 'react';
import {
  RouteInfo,
  RouteProps,
} from '../../components/Route/RouteStructure';
// eslint-disable-next-line
import RadioGroupCode from '!raw-loader!../../../packages/reactackle-radio-group/src/RadioGroup';
// eslint-disable-next-line
import RadioCode from '!raw-loader!../../../packages/reactackle-radio-group/src/Radio/Radio';

const propTypes = RouteInfo.propTypes;
const defaultProps = {
  ...RouteInfo.defaultProps,
  componentTitle: 'Radio',
  routeTitle: 'Radio',
};

export const RadioIndexRoute = props => {
  const groupProps = (
    <RouteProps
      componentCode={RadioGroupCode}
      title="Radio Group Props"
    />
  );
  
  const itemProps = (
    <RouteProps
      componentCode={RadioCode}
      title="Radio Item Props"
    />
  );

  return (
    <div className="route-info">
      <RouteInfo {...props}>
        { groupProps }
        { itemProps }
      </RouteInfo>
    </div>
  );
};

RadioIndexRoute.propTypes = propTypes;
RadioIndexRoute.defaultProps = defaultProps;
RadioIndexRoute.displayName = 'RadioIndexRoute';
