import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  extractThemeOrDefault,
  getValueString,
  transition,
  iconSizeMixin,
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
    opacity,
    rotateDegree,
  } = theme.reactackle.components.accordion.item.expandIcon[styleKey];

  return css`
    opacity: ${opacity};
    ${rotateDegree !== null && `transform: rotate(${rotateDegree});`}
  `;
};

const size = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    height,
    width,
    imgHeight,
    imgWidth,
  } = theme.reactackle.components.accordion.item.expandIcon;

  return css`
    ${iconSizeMixin(
      getValueString(height),
      getValueString(imgHeight || height),
      getValueString(width || height),
      getValueString(imgWidth || imgHeight || height),
    )}
  `;
};

export const IconWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  ${expanded}
  ${size}
  ${transition('opacity, transform')}
`;

IconWrapperStyled.propTypes = propTypes;
IconWrapperStyled.defaultProps = defaultProps;
