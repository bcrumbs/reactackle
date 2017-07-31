import Color from 'color';
import { colorSecondary } from 'reactackle-core';

const toggleConstants = {
  toggleThumb: {
    backgroundColorChecked: colorSecondary,
  },
};

export const toggleBarBackgroundColorChecked = base =>
  Color(toggleConstants.toggleThumb.backgroundColorChecked(base)).lighten(0.54);
