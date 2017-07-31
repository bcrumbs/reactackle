'use strict';

import React from 'react';
import { CardAreaSideStyled } from './styles/CardAreaSideStyled';

export default function CardAreaSide(props) {
  return (
    <CardAreaSideStyled>
      {props.children}
    </CardAreaSideStyled>
  );
}

CardAreaSide.displayName = 'CardAreaSide';
