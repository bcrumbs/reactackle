'use strict';

import React from 'react';
import { DialogActionsStyled } from './styles/DialogActionsStyled';

export default function DialogActions(props) {
  return (
    <DialogActionsStyled>
      {props.children}
    </DialogActionsStyled>
  );
}

DialogActions.displayName = 'DialogActions';
