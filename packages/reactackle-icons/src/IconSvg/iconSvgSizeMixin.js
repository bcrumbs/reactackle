import { css } from 'styled-components';

export const iconSvgSizeMixin = (
  height,
  imgHeight = height,
  width = height,
  imgWidth = imgHeight,
) => css`
  width: ${width};
  height: ${height};
  
  ${imgHeight && `
    svg {
      width: ${imgWidth};
      height: ${imgHeight};
    }
  `}
`;
