import React from 'react';
//eslint-disable-next-line
import AlertAreaCode from '!raw-loader!../../../packages/reactackle-alert-area/src/AlertArea';
//eslint-disable-next-line
import AlertCode from '!raw-loader!../../../packages/reactackle-alert-area/src/Alert/Alert';
// console.log(AlertCode)
import { RouteInfo, RouteProps } from '../../components/Route/RouteStructure';

const propTypes = RouteInfo.propTypes;
const defaultProps = {
  ...RouteInfo.defaultProps,
  componentTitle: 'AlertArea',
  routeTitle: 'AlertArea',
  routeLead: '',
};

const itemProps = (
  [
    <RouteProps
      key="alert-area"
      componentCode={AlertAreaCode}
    />,
    <RouteProps
      key="alert"
      componentCode={AlertCode}
      title="Alert props"
    />,
  ]
);
  
export const AlertAreaIndexRoute = props => (
  <RouteInfo {...props} >
    {itemProps}
  </RouteInfo>
);

AlertAreaIndexRoute.propTypes = propTypes;
AlertAreaIndexRoute.defaultProps = defaultProps;
AlertAreaIndexRoute.displayName = 'AlertAreaIndexRoute';
