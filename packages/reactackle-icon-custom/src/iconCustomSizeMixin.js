import { css } from 'styled-components';

export const iconCustomSizeMixin = (
  height,
  imgSize = height,
  width = height,
) => css`
  width: ${width};
  height: ${height};
  line-height: ${height} !important;
  background-size: ${imgSize};
`;
