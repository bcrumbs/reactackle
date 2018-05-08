import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  extractThemeOrDefault,
  getValueString,
} from 'reactackle-core';

const propTypes = {
  expanded: PropTypes.bool,
};

const defaultProps = {
  expanded: false,
};

const expanded = ({ theme: themeFromProvider, expanded }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const styleKey = expanded ? 'expanded' : 'collapsed';

  const {
    fontSize,
    lineHeight,
    fontWeight,
    color,
    textTransform,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
  } = theme.reactackle.components.accordion.item.title[styleKey];

  return css`
    font-size: ${getValueString(fontSize)};
    line-height: ${lineHeight};
    color: ${color};
    font-weight: ${fontWeight};
    text-transform: ${textTransform};
    padding-top: ${getValueString(paddingTop)};
    padding-bottom: ${getValueString(paddingBottom)};
    padding-left: ${getValueString(paddingLeft)};
    padding-right: ${getValueString(paddingRight)};
  `;
};

export const TitleStyled = styled.div`
  flex-grow: 1;
  position: relative;
  z-index: 1;
  user-select: none;
  ${expanded}
`;

TitleStyled.propTypes = propTypes;
TitleStyled.defaultProps = defaultProps;
