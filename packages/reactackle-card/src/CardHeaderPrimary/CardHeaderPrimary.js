'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import withExternalPropsCard from '../withExternalPropsCard';
import { CardHeaderPrimaryStyled } from './styles/CardHeaderPrimaryStyled';
import { CardHeaderBoxStyled } from './styles/CardHeaderBoxStyled';
import { CardHeaderTextStyled } from './styles/CardHeaderTextStyled';
import { CardSubheaderStyled } from './styles/CardSubheaderStyled';
import { CardHeaderMediaStyled } from './styles/CardHeaderMediaStyled';

import { externalPropTypes, externalDefaultProps } from '../externalPropTypes';

const propTypes = {
  first: PropTypes.bool,
  last: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  ...externalPropTypes,
};

const defaultProps = {
  first: false,
  last: false,
  title: '',
  subtitle: '',
  ...externalDefaultProps,
};

export const _CardHeaderPrimary = props => {
  const subtitle = props.subtitle
    ? <CardSubheaderStyled size={props.externalProps.size}>
        {props.subtitle}
      </CardSubheaderStyled>
    : null;

  const titleMedia = props.children
    ? <CardHeaderMediaStyled size={props.externalProps.size}>
        {props.children}
      </CardHeaderMediaStyled>
    : null;

  return (
    <CardHeaderPrimaryStyled
      size={props.externalProps.size}
      last={props.last}
      first={props.first}
    >
      <CardHeaderBoxStyled>
        <CardHeaderTextStyled size={props.externalProps.size}>
          {props.title}
        </CardHeaderTextStyled>
        {subtitle}
      </CardHeaderBoxStyled>
      {titleMedia}
    </CardHeaderPrimaryStyled>
  );
};

_CardHeaderPrimary.displayName = 'CardHeaderPrimary';
export default withExternalPropsCard(_CardHeaderPrimary);

_CardHeaderPrimary.propTypes = propTypes;
_CardHeaderPrimary.defaultProps = defaultProps;
