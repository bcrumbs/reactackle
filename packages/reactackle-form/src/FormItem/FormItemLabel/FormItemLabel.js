'use strict';

import React from 'react';
import { FormItemLabelStyled } from './styles/FormItemLabelStyled';

export default function FormItemLabel(props) {
  return (
    <FormItemLabelStyled>
      {props.children}
    </FormItemLabelStyled>
  );
}

FormItemLabel.displayName = 'FormItemLabel';
