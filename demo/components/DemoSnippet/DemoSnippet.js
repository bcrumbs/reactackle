'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactackle';
import { DemoTitle } from './DemoTitle/DemoTitle';
import { DemoSnippetStyled } from './styles/DemoSnippetStyled';
import { SnippetWrapperStyled } from './styles/SnippetWrapperStyled';

export const DemoSnippet = props => {
  let title = null;
  if (props.title) {
    title = (
      <Container boxed>
        <DemoTitle>{props.title}</DemoTitle>
      </Container>
    );
  }
  
  return (
    <DemoSnippetStyled>
      {title}
      
      <SnippetWrapperStyled>
        {props.children}
      </SnippetWrapperStyled>
    </DemoSnippetStyled>
  );
};

DemoSnippet.propTypes = {
  title: PropTypes.string,
};

DemoSnippet.defaultProps = {
  title: '',
};

DemoSnippet.displayName = 'DemoSnippet';

export * from './TestBox/TestBox';
export * from './DemoPreview/DemoPreview';
export * from './DemoCode/DemoCode';
export * from './DemoTitle/DemoTitle';
export * from './DemoAlert/DemoAlert';
