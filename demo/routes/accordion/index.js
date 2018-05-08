import React from 'react';
import { RouteInfo, RouteProps } from '../../components/Route/RouteStructure';

//eslint-disable-next-line
import AccordionCode from '!raw-loader!../../../packages/reactackle-accordion/src/Accordion';
//eslint-disable-next-line
import AccordionItemCode from '!raw-loader!../../../packages/reactackle-accordion/src/AccordionItem/AccordionItem';

const propTypes = RouteInfo.propTypes;
const defaultProps = {
  ...RouteInfo.defaultProps,
  componentTitle: 'Accordion',
  routeTitle: 'Accordion',
  mobile: true,
  desktop: true,
};

const itemProps = [
  <RouteProps
    key='accordion'
    componentCode={AccordionCode}
  />,
  <RouteProps
    key="accordion-item"
    title='Accordion Item props'
    componentCode={AccordionItemCode}
  />,
];

export const AccordionIndexRoute = props => (
  <div className="route-info">
    <RouteInfo {...props} >
      {itemProps}
    </RouteInfo>
  </div>
);


AccordionIndexRoute.propTypes = propTypes;
AccordionIndexRoute.defaultProps = defaultProps;
AccordionIndexRoute.displayName = 'AccordionIndexRoute';
