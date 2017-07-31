'use strict';

import React from 'react';
import { Container } from 'reactackle';
import { DemoAlertStyled } from './styles/DemoAlertStyled';
import { DemoAlertItemStyled } from './styles/DemoAlertItemStyled';

export const DemoAlert = props => (
  <Container boxed>
    <DemoAlertStyled>
      {props.children}
    </DemoAlertStyled>
  </Container>
);

DemoAlert.displayName = 'DemoAlert';

export const DemoAlertItem = props => (
  <DemoAlertItemStyled>
    {props.children}
  </DemoAlertItemStyled>
);

DemoAlertItem.displayName = 'DemoAlertItem';
