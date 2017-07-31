'use strict';

import styled from 'styled-components';

const content = () => `
  & > * {
    &,
    &:hover,
    &:focus {
      color: inherit;
      text-decoration: none;
      cursor: inherit;
    }
  }
`;

export const TabContentWrapperStyled = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  ${content};
`;

TabContentWrapperStyled.displayName = 'TabContentWrapperStyled';
