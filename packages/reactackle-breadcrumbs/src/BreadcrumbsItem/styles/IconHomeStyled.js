import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import {
  extractThemeOrDefault,
  getValueString,
  iconSizeMixin,
} from 'reactackle-core';

const propTypes = {
  colorScheme: PropTypes.oneOf(['light', 'dark']),
};

const defaultProps = {
  colorScheme: 'dark',
};

const ALIGN_MAP = {
  top: 'flex-start',
  center: 'center',
  bottom: 'flex-end',
};

const align = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const { alignSelf } = theme.reactackle.components.breadcrumbs.item.iconHome;

  return `align-self: ${ALIGN_MAP[alignSelf]};`;
};

const size = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    height,
    width,
    imgHeight,
    imgWidth,
  } = theme.reactackle.components.breadcrumbs.item.iconHome;

  return css`    
    ${iconSizeMixin(
      getValueString(height),
      getValueString(imgHeight || height),
      getValueString(width || height),
      getValueString(imgWidth || imgHeight || height),
    )}
  `;
};

const spacing = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    marginY,
    marginRight,
  } = theme.reactackle.components.breadcrumbs.item.iconHome;

  return css`    
    margin-right: ${getValueString(marginRight)};
    margin-top: ${getValueString(marginY)};
    margin-bottom: ${getValueString(marginY)};
  `;
};

const colorScheme = ({ colorScheme, theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const path = theme.reactackle.components.breadcrumbs.item.icon;

  return `
    color: ${path.colorScheme[colorScheme].color};
    opacity: ${path.opacity};
  `;
};

export const IconHomeStyled = styled.div`
  display: flex;
  align-items: center;
  ${spacing}
  ${size}
  ${align}
  ${colorScheme}
`;

IconHomeStyled.propTypes = propTypes;
IconHomeStyled.defaultProps = defaultProps;
