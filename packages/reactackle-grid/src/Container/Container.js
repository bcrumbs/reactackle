'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { ContainerStyled } from './styles/ContainerStyled';

const propTypes = {
  /** Container will have maximum width and will be centered on screen */
  boxed: PropTypes.bool,
  /** Container will occupy all available space */
  spread: PropTypes.bool,
};

const defaultProps = {
  boxed: false,
  spread: false,
};

export const Container = props =>
  <ContainerStyled boxed={props.boxed} spread={props.spread}>
    {props.children}
  </ContainerStyled>;

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;
Container.displayName = 'Container';
