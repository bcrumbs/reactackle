'use strict';

import React from 'react';
import { DialogContentTextStyled } from './styles/DialogContentTextStyled';

export default function DialogContentText(props) {
  return (
    <DialogContentTextStyled>
      {props.children}
    </DialogContentTextStyled>
  );
}

DialogContentText.displayName = 'DialogContentText';
