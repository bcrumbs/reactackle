'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { ColumnStyled } from './styles/ColumnStyled';

const propTypes = {
  /**
   * Shows how much space takes the column on different screen sizes.
   * Total number of columns: 12.
   */
  size: PropTypes.shape({
    xsmall: PropTypes.number,
    small: PropTypes.number,
    medium: PropTypes.number,
    large: PropTypes.number,
    xlarge: PropTypes.number,
  }),
  /** Set content flow direction */
  layoutDirection: PropTypes.oneOf(['horizontal', 'vertical']),
  /**
   * Set content align along main axis
   * Main axis for layoutDirection = horizontal equals x-axis,
   * and for layoutDirection = vertical it equals y-axis
   */
  mainAxisAlign: PropTypes.oneOf([
    'start',
    'end',
    'center',
    'evenSpaceBetween',
    'evenSpaceAround',
  ]),
  /**
   * Set content align along cross axis
   * Cross axis for layoutDirection = horizontal equals y-axis,
   * and for layoutDirection = vertical it equals x-axis
   */
  crossAxisAlign: PropTypes.oneOf([
    'start',
    'end',
    'center',
    'stretch',
    'baseline',
  ]),
  /**
   * Shows on which screens block should be centered.
   * Centering starts from the smallest breakpoint, marked as true, up to
   * the next breakpoint marked as false.
   */
  centered: PropTypes.shape({
    xsmall: PropTypes.bool,
    small: PropTypes.bool,
    medium: PropTypes.bool,
    large: PropTypes.bool,
    xlarge: PropTypes.bool,
  }),
  /** Removes column paddings */
  collapsed: PropTypes.bool,
};

const defaultProps = {
  size: { xsmall: 12 },
  layoutDirection: 'vertical',
  mainAxisAlign: 'start',
  crossAxisAlign: 'start',
  centered: null,
  collapsed: false,
};

export const Column = props =>
  <ColumnStyled
    collapsed={props.collapsed}
    centered={props.centered}
    layoutDirection={props.layoutDirection}
    mainAxisAlign={props.mainAxisAlign}
    crossAxisAlign={props.crossAxisAlign}
    size={props.size}
  >
    {props.children}
  </ColumnStyled>;

Column.propTypes = propTypes;
Column.defaultProps = defaultProps;
Column.displayName = 'Column';
