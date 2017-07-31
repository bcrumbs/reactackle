'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import withExternalPropsCard from '../withExternalPropsCard';
import { CardContentStyled } from './styles/CardContentStyled';

import { externalPropTypes, externalDefaultProps } from '../externalPropTypes';

const propTypes = {
  first: PropTypes.bool,
  last: PropTypes.bool,
  ...externalPropTypes,
};

const defaultProps = {
  first: false,
  last: false,
  ...externalDefaultProps,
};

export const _CardContent = ({ last, first, children, externalProps }) =>
  <CardContentStyled last={last} first={first} size={externalProps.size}>
    {children}
  </CardContentStyled>;

_CardContent.displayName = 'CardContent';
export default withExternalPropsCard(_CardContent);

_CardContent.propTypes = propTypes;
_CardContent.defaultProps = defaultProps;
