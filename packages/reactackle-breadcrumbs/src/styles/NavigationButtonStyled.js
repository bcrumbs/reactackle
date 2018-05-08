import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { getValueString, extractThemeOrDefault } from 'reactackle-core';

const propTypes = {
  left: PropTypes.bool,
  right: PropTypes.bool,
};

const defaultProps = {
  left: false,
  right: false,
};

const margin = ({ left, right, theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const path = theme.reactackle.components.breadcrumbs.navigation;

  return css`
    ${left && `margin-right: ${getValueString(path.margin)}`}
    ${right && `margin-left: ${getValueString(path.margin)}`}
  `;
};

export const NavigationButtonStyled = styled.div`
  display: flex;
  align-items: center;
  ${margin}
`;

NavigationButtonStyled.propTypes = propTypes;
NavigationButtonStyled.defaultProps = defaultProps;
