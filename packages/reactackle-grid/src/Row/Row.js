'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { RowStyled } from './styles/RowStyled';

const propTypes = {
  /** Set content flow direction */
  layoutDirection: PropTypes.oneOf(['horizontal', 'vertical']),
  /** Fix row width */
  fixedWidth: PropTypes.bool,
  /**
   * If true, Row will have negative margins to compensate Column gutters
   */
  compensateGutter: PropTypes.bool,
  /** If true, content will wrap */
  wrapContent: PropTypes.bool,
  /**
   * Set size ratio for row
   * @example Row with expandRatio={2} will take twice more size than Row
   * with expandRatio={1}
   */
  expandRatio: PropTypes.number,
};
const defaultProps = {
  layoutDirection: 'horizontal',
  compensateGutter: false,
  fixedWidth: false,
  wrapContent: false,
  expandRatio: 0.0,
};

export const Row = props =>
  <RowStyled
    style={{ flexGrow: props.expandRatio }}
    layoutDirection={props.layoutDirection}
    compensateGutter={props.compensateGutter}
    fixedWidth={props.fixedWidth}
    wrapContent={props.wrapContent}
    expandRatio={props.expandRatio}
  >
    {props.children}
  </RowStyled>;

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;
Row.displayName = 'Row';
