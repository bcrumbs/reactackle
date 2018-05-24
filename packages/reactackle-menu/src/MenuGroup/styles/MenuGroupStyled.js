import styled from 'styled-components';

const inline = ({ inline }) => inline && `
  display: flex;
  align-items: stretch;
`;

export const MenuGroupStyled = styled.div`
  display: block;
  ${inline}
`;

MenuGroupStyled.displayName = 'MenuGroupStyled';
