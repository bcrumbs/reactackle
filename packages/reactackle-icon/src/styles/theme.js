import { radiusDefault } from 'reactackle-core';

export default {
  borderWidth: 1,
  borderRadius: radiusDefault,
  borderRadiusUnit: 'px',

  color: {
    light: 'rgba(255, 255, 255, 0.54)',
    dark: 'rgba(0, 0, 0, 0.54)',
  },

  size: {
    inherit: {
      width: 'inherit',
      height: 'inherit',
      imgSize: 'inherit',
    },
    small: {
      width: 28,
      height: 28,
      imgSize: 14,
    },
    normal: {
      width: 32,
      height: 32,
      imgSize: 18,
    },
    large: {
      width: 40,
      height: 40,
      imgSize: 24,
    },
  },
};
