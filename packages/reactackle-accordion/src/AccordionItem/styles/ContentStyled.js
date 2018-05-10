import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  extractThemeOrDefault,
  getValueString,
  transition,
} from 'reactackle-core';

const propTypes = {
  contentBlank: PropTypes.bool,
  expanded: PropTypes.bool,
};

const defaultProps = {
  expanded: false,
  contentBlank: false,
};

const size = ({ theme: themeFromProvider, contentBlank }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    paddingY,
    paddingX,
  } = theme.reactackle.components.accordion.item.content;

  return !contentBlank && css`
    padding: ${getValueString(paddingY)} ${getValueString(paddingX)};
  `;
};

const expanded = ({ theme: themeFromProvider, expanded }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  return expanded
    ? `
      pointer-events: auto;
      opacity: 1;
      position: relative;
      z-index: 1;
      transform: translateY(0);
    `
    : css`
      transform: translateY(${getValueString(
        theme.reactackle.components.accordion.item.content.animatedOffset,
      )});
      pointer-events: none;
      opacity: 0;
      position: fixed;
      z-index: -1;
    `;
};

export const ContentStyled = styled.dd`
  margin: 0;
  ${size}
  ${expanded}
  ${transition('transform')}
`;

ContentStyled.propTypes = propTypes;
ContentStyled.defaultProps = defaultProps;
