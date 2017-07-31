'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import withExternalPropsApp from '../withExternalPropsApp';
import { MainRegionStyled } from './styles/MainRegionStyled';

const propTypes = {
  externalProps: PropTypes.shape({
    fixed: PropTypes.bool,
  }),
};

const defaultProps = {
  externalProps: {
    fixed: false,
  },
};

export const _MainRegion = props =>
  <MainRegionStyled appFixed={props.externalProps.fixed}>
    {props.children}
  </MainRegionStyled>;

_MainRegion.displayName = 'MainRegion';
export default withExternalPropsApp(_MainRegion);

_MainRegion.propTypes = propTypes;
_MainRegion.defaultProps = defaultProps;
