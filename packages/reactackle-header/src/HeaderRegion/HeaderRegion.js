'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { HeaderRegionStyled } from './styles/HeaderRegionStyled';

const propTypes = {
  spread: PropTypes.bool,
  horizontalAlign: PropTypes.oneOf([
    'start',
    'end',
    'center',
    'space-between',
    'space-around',
  ]),
  /** Set content align along vertical axis */
  verticalAlign: PropTypes.oneOf([
    'stretch',
    'center',
    'start',
    'end',
    'baseline',
  ]),
  size: PropTypes.oneOf(['blank', 'dense', 'default']),
};

const defaultProps = {
  spread: false,
  horizontalAlign: 'start',
  verticalAlign: 'stretch',
  size: 'default',
};

export default function HeaderRegion(props) {
  return (
    <HeaderRegionStyled
      spread={props.spread}
      horizontalAlign={props.horizontalAlign}
      verticalAlign={props.verticalAlign}
      size={props.size}
    >
      {props.children}
    </HeaderRegionStyled>
  );
}

HeaderRegion.propTypes = propTypes;
HeaderRegion.defaultProps = defaultProps;
HeaderRegion.displayName = 'HeaderRegion';
