'use strict';

import React from 'react';
import { CardAreaMainStyled } from './styles/CardAreaMainStyled';

export default function CardAreaMain(props) {
  return (
    <CardAreaMainStyled>
      {props.children}
    </CardAreaMainStyled>
  );
}

CardAreaMain.displayName = 'CardAreaMain';
