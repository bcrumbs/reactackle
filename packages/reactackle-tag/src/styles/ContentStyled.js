import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  extractThemeOrDefault,
  getValueString,
} from 'reactackle-core';

const propTypes = {
  hasIcon: PropTypes.bool,
  isBounded: PropTypes.bool,
};

const defaultProps = {
  hasIcon: false,
  isBounded: false,
};

const padding = ({ hasIcon, isRemovable, theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const path = theme.reactackle.components.tag;

  const {
    paddingY,
    paddingX,
    iconTextOffset,
  } = path.content;

  return css`
    padding: ${getValueString(paddingY)} ${getValueString(paddingX)};
    
    ${hasIcon && `padding-left: ${getValueString(iconTextOffset)};`}
    ${isRemovable && `
      padding-right: ${getValueString(path.removeIcon.iconTextSpacing)};
    `}
  `;
};

const isBounded = ({ isBounded }) => isBounded && `
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ContentStyled = styled.span`
  ${padding}
  ${isBounded}
`;

ContentStyled.propTypes = propTypes;
ContentStyled.defaultProps = defaultProps;
