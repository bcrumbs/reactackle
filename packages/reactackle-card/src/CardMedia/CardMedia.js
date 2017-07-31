'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { CardMediaStyled } from './styles/CardMediaStyled';
import { CardMediaContentStyled } from './styles/CardMediaContentStyled';

const propTypes = {
  mediaElement: PropTypes.element,
};

const defaultProps = {
  mediaElement: null,
};

export default function CardMedia(props) {
  return (
    <CardMediaStyled>
      {props.mediaElement}

      {props.children
        ? <CardMediaContentStyled>
            {props.children}
          </CardMediaContentStyled>
        : null}
    </CardMediaStyled>
  );
}

CardMedia.propTypes = propTypes;
CardMedia.defaultProps = defaultProps;
CardMedia.displayName = 'CardMedia';
