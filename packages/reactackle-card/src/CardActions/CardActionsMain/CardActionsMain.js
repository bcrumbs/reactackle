'use strict';

import React from 'react';
import withExternalPropsCard from '../../withExternalPropsCard';
import { CardActionsMainStyled } from './styles/CardActionsMainStyled';

import {
  externalPropTypes,
  externalDefaultProps,
} from '../../externalPropTypes';

const propTypes = externalPropTypes;
const defaultProps = externalDefaultProps;

export const _CardActionsMain = props =>
  <CardActionsMainStyled size={props.externalProps.size}>
    {props.children}
  </CardActionsMainStyled>;

_CardActionsMain.displayName = 'CardActionsMain';
export default withExternalPropsCard(_CardActionsMain);

_CardActionsMain.propTypes = propTypes;
_CardActionsMain.defaultProps = defaultProps;
