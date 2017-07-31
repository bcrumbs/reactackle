import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  extractThemeOrDefault,
  getValueString,
  transition,
} from 'reactackle-core';

const propTypes = {
  /** Set icon's source */
  src: PropTypes.string,
  /** Set icon size */
  size: PropTypes.oneOf(['inherit', 'small', 'normal', 'large']),
  /** Scale icon */
  sizeMultiplier: PropTypes.number,
  /**
   * Define component theme config
   * See https://github.com/styled-components/styled-components/blob/master/docs/theming.md
   * for more information
   */
  theme: PropTypes.object,
};

const defaultProps = {
  src: '',

  border: false,
  rounded: false,
  size: 'normal',
  sizeMultiplier: 1,
  colorScheme: 'dark',
  color: '',
  backgroundColor: '',

  flip: 'none',
  rotate: 0,
  spin: false,
  pulse: false,
};

// PROP RECEIVERS
const IconImgSize = ({
  sizeMultiplier,
  theme: themeFromProvider,
  sizeKey,
  src,
}) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const imgSize = getValueString(
    theme.reactackle.components.icon.size[sizeKey].imgSize,
  );

  const innerSize =
    imgSize !== 'inherit' ? `calc(${imgSize} * ${sizeMultiplier})` : imgSize;

  return css`
    background-size: ${innerSize};      
    background-image: url('${src}');
  `;
};

// STYLES
export const IconHolderStyled = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-position: center;
  background-repeat: no-repeat;
  color: inherit;
  ${transition('color, opacity')};
  ${IconImgSize};
`;

IconHolderStyled.propTypes = propTypes;
IconHolderStyled.defaultProps = defaultProps;
IconHolderStyled.displayName = 'IconHolderStyled';
