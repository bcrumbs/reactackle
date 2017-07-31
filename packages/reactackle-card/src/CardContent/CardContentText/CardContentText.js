'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import withExternalPropsCard from '../../withExternalPropsCard';
import { CardContentTextStyled } from './styles/CardContentTextStyled';

const propTypes = {
  externalProps: PropTypes.shape({
    size: PropTypes.oneOf(['default', 'medium', 'large', 'xlarge']),
  }),
};

const defaultProps = {
  externalProps: {
    size: 'default',
  },
};

export const _CardContentText = props =>
  <CardContentTextStyled size={props.externalProps.size}>
    {props.children}
  </CardContentTextStyled>;

_CardContentText.displayName = 'CardContentText';
export default withExternalPropsCard(_CardContentText);

_CardContentText.propTypes = propTypes;
_CardContentText.defaultProps = defaultProps;
