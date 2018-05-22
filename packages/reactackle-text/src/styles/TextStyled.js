import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const propTypes = {
  display: PropTypes.oneOf([
    'default',
    'caption',
    'body',
    'bodyStrong',
    'subheading',
    'title',
    'headline',
    'display1',
    'display2',
    'display3',
    'display4',
  ]),
};

const defaultProps = {
  display: 'default',
};

const display = ({ display, theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    fontSize,
    lineHeight,
    color,
    textTransform,
    fontWeight,
    letterSpacing,
    fontFamily,
    marginTop,
    marginBottom,
    similarItemsSpacing,
  } = theme.reactackle.components.text[display];

  return css`
    font-size: ${getValueString(fontSize)};
    line-height: ${lineHeight};
    color: ${color};
    text-transform: ${textTransform};
    font-weight: ${fontWeight};
    letter-spacing: ${getValueString(letterSpacing)};
    font-family: ${fontFamily};
    margin-top: ${getValueString(marginTop)};
    margin-bottom: ${getValueString(marginBottom)};
    
    & + & {    
      margin-top: ${getValueString(similarItemsSpacing)};
    }
  `;
};

export const TextStyled = styled.span`
  display: inline-block;
  ${display}
`;

TextStyled.propTypes = propTypes;
TextStyled.defaultProps = defaultProps;
