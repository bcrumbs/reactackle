'use strict';

import {
  Content,
} from 'reactackle';
import PropTypes from 'prop-types';
import React from 'react';
import { RouteHeading } from './RouteHeading/RouteHeading';
import { RouteStyled } from './styles/RouteStyled';

const propTypes = {
  componentTitle: PropTypes.string,
  section: PropTypes.string,
  tabs: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    href: PropTypes.string,
  })),
};
const defaultProps = {
  componentTitle: '',
  section: '',
  tabs: [],
};

export const RouteStructure = props => (
  <Content>
    <RouteStyled>
      {props.componentTitle && (
        <RouteHeading
          componentTitle={props.componentTitle}
          section={props.section}
          tabs={props.tabs}
        />
        )
      }
      {props.children}
    </RouteStyled>
  </Content>
);

RouteStructure.propTypes = propTypes;
RouteStructure.defaultProps = defaultProps;
RouteStructure.displayName = 'RouteStructure';

export * from './RouteDemo/RouteDemo';
export * from './RouteInfo/RouteInfo';
export * from './RouteHeading/RouteHeading';
export * from './RouteProps/RouteProps';
export * from './RouteMemo/RouteMemo';
