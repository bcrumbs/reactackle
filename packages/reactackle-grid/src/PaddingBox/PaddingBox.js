'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { PaddingBoxStyled } from './styles/PaddingBoxStyled';

const propTypes = {
  /** Set padding size*/
  paddingSize: PropTypes.oneOfType([
    PropTypes.oneOf(['small', 'medium', 'large']),
    PropTypes.string,
  ]),
  /**
   * Remove corresponding paddings
   */
  removePadding: PropTypes.oneOf(['none', 'horizontal', 'vertical']),
  /** Container will occupy all available space */
  spread: PropTypes.bool,
};

const defaultProps = {
  paddingSize: 'small',
  removePadding: 'none',
  spread: false,
};

export const PaddingBox = props =>
  <PaddingBoxStyled
    paddingSize={props.paddingSize}
    removePadding={props.removePadding}
    spread={props.spread}
  >
    {props.children}
  </PaddingBoxStyled>;

PaddingBox.propTypes = propTypes;
PaddingBox.defaultProps = defaultProps;
PaddingBox.displayName = 'PaddingBox';
