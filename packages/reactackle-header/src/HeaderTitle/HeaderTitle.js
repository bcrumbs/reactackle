'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { HeaderTitleStyled } from './styles/HeaderTitleStyled';

const propTypes = {
  colorScheme: PropTypes.oneOf(['light', 'dark']),
  size: PropTypes.oneOf(['default', 'blank', 'dense']),
};

const defaultProps = {
  colorScheme: 'light',
  size: 'default',
};

export default function HeaderTitle(props) {
  return (
    <HeaderTitleStyled colorScheme={props.colorScheme} size={props.size}>
      {props.children}
    </HeaderTitleStyled>
  );
}

HeaderTitle.propTypes = propTypes;
HeaderTitle.defaultProps = defaultProps;
