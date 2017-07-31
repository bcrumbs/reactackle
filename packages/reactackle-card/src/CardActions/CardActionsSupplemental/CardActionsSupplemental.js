'use strict';

import React from 'react';
import withExternalPropsCard from '../../withExternalPropsCard';

import { CardActionsSupplementalStyled } from './styles/CardActionsSupplementalStyled';

import {
  externalPropTypes,
  externalDefaultProps,
} from '../../externalPropTypes';

const propTypes = externalPropTypes;
const defaultProps = externalDefaultProps;

export const _CardActionsSupplemental = props =>
  <CardActionsSupplementalStyled size={props.externalProps.size}>
    {props.children}
  </CardActionsSupplementalStyled>;

_CardActionsSupplemental.displayName = 'CardActionsSupplemental';
export default withExternalPropsCard(_CardActionsSupplemental);

_CardActionsSupplemental.propTypes = propTypes;
_CardActionsSupplemental.defaultProps = defaultProps;
