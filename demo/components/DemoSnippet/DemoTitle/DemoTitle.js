'use strict';

import React from 'react';
import { SnippetTitleStyled } from './styles/SnippetTitleStyled';

export const DemoTitle = props => (
  <SnippetTitleStyled>
    {props.children}
  </SnippetTitleStyled>
);

DemoTitle.displayName = 'DemoTitle';
