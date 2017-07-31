'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { FlexRegionStyled } from './styles/FlexRegionStyled';

const propTypes = {
  /** Container will occupy all available space */
  spread: PropTypes.bool,
  /** Set content flow direction */
  layoutDirection: PropTypes.oneOf(['horizontal', 'vertical']),
};

const defaultProps = {
  spread: false,
  layoutDirection: 'vertical',
};

export const FlexRegion = props =>
  <FlexRegionStyled
    spread={props.spread}
    layoutDirection={props.layoutDirection}
  >
    {props.children}
  </FlexRegionStyled>;

FlexRegion.propTypes = propTypes;
FlexRegion.defaultProps = defaultProps;
FlexRegion.displayName = 'FlexRegion';
