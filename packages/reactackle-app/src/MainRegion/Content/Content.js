'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import withExternalPropsApp from '../../withExternalPropsApp';
import { ContentStyled } from './styles/ContentStyled';

const propTypes = {
  externalProps: PropTypes.shape({
    fixed: PropTypes.bool,
  }),
};

const defaultProps = {
  externalProps: {
    fixed: false,
  },
};

const _Content = props =>
  <ContentStyled appFixed={props.externalProps.fixed}>
    {props.children}
  </ContentStyled>;

_Content.displayName = 'Content';
export default withExternalPropsApp(_Content);

_Content.propTypes = propTypes;
_Content.defaultProps = defaultProps;
