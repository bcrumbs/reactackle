'use strict';

import React from 'react';
import { Container } from 'reactackle';
import { DemoPreviewStyled } from './styles/DemoPreviewStyled';

export const DemoPreview = props => (
  <Container boxed>
    <DemoPreviewStyled>
      {props.children}
    </DemoPreviewStyled>
  </Container>
);

DemoPreview.displayName = 'DemoPreview';
