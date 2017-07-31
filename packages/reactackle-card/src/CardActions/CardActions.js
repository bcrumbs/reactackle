'use strict';

import React from 'react';
import withExternalPropsCard from '../withExternalPropsCard';
import { CardActionsStyled } from './styles/CardActionsStyled';

import { externalPropTypes, externalDefaultProps } from '../externalPropTypes';

const propTypes = externalPropTypes;
const defaultProps = externalDefaultProps;

export const _CardActions = ({ children, externalProps }) =>
  <CardActionsStyled size={externalProps.size}>
    {children}
  </CardActionsStyled>;

_CardActions.displayName = 'CardActions';
export default withExternalPropsCard(_CardActions);

_CardActions.propTypes = propTypes;
_CardActions.defaultProps = defaultProps;
