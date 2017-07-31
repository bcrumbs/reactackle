'use strict';

import React from 'react';
import { registerDefaultComponentTheme } from 'reactackle-core';
import { FormItemStyled } from './styles/FormItemStyled';
import componentTheme from './styles/theme';

registerDefaultComponentTheme('formItem', componentTheme);

export default function FormItem(props) {
  return (
    <FormItemStyled>
      {props.children}
    </FormItemStyled>
  );
}
FormItem.displayName = 'FormItem';
