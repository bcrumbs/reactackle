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
    },
    small: {
      width: 24,
      height: 24,
    },
    normal: {
      width: 36,
      height: 36,
    },
    large: {
      width: 48,
      height: 48,
    },
  },
};