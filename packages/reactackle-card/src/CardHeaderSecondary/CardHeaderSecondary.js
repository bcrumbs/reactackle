'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import withExternalPropsCard from '../withExternalPropsCard';
import { CardHeaderSecondaryStyled } from './styles/CardHeaderSecondaryStyled';

import { CardHeaderSecondaryTextBoxStyled } from './styles/CardHeaderSecondaryTextBoxStyled';

import { CardHeaderSecondaryTextStyled } from './styles/CardHeaderSecondaryTextStyled';

import { CardSubheaderSecondaryStyled } from './styles/CardSubheaderSecondaryStyled';

import { CardHeaderSecondaryImageStyled } from './styles/CardHeaderSecondaryImageStyled';

import { externalPropTypes, externalDefaultProps } from '../externalPropTypes';

const propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  ...externalPropTypes,
};

const defaultProps = {
  image: '',
  title: '',
  subtitle: '',
  ...externalDefaultProps,
};

export const _CardHeaderSecondary = props => {
  const image = props.image
    ? <CardHeaderSecondaryImageStyled
        style={{ backgroundImage: `url('${props.image}')` }}
        size={props.externalProps.size}
      />
    : null;

  const subtitle = props.subtitle
    ? <CardSubheaderSecondaryStyled size={props.externalProps.size}>
        {props.subtitle}
      </CardSubheaderSecondaryStyled>
    : null;

  return (
    <CardHeaderSecondaryStyled size={props.externalProps.size}>
      {image}
      <CardHeaderSecondaryTextBoxStyled>
        <CardHeaderSecondaryTextStyled size={props.externalProps.size}>
          {props.title}
        </CardHeaderSecondaryTextStyled>
        {subtitle}
      </CardHeaderSecondaryTextBoxStyled>
    </CardHeaderSecondaryStyled>
  );
};

_CardHeaderSecondary.displayName = 'CardHeaderSecondary';
export default withExternalPropsCard(_CardHeaderSecondary);

_CardHeaderSecondary.propTypes = propTypes;
_CardHeaderSecondary.defaultProps = defaultProps;
