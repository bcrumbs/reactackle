'use strict';

import {
  bmodule,
  colorSecondary,
  colorPaletteGrey100,
  colorPaletteGrey200,
  colorPaletteGrey300,
  colorPaletteGrey400,
  fontColorMedium,
  bodyFontColor,
  radiusRounded,
  fontSizeBody,
} from 'reactackle-core';
import { toggleBarBackgroundColorChecked } from './constants';

export default {
  toggleBar: {
    width: bmodule(4.5),
    height: bmodule(2),

    state: {
      checked: {
        backgroundColor: toggleBarBackgroundColorChecked,
      },

      unchecked: {
        backgroundColor: colorPaletteGrey300,
      },

      disabled: {
        backgroundColor: colorPaletteGrey200,
      },
    },
  },

  toggleThumb: {
    size: bmodule(2.5),
    borderRadius: radiusRounded,

    state: {
      checked: {
        backgroundColor: colorSecondary,
      },

      unchecked: {
        backgroundColor: colorPaletteGrey100,
      },

      disabled: {
        backgroundColor: colorPaletteGrey400,
      },
    },

    hoverOffset: 3,
  },

  label: {
    toggleLabelSpacing: bmodule(1),
    labelTooltipSpacing: bmodule(1),
    fontSize: fontSizeBody,
    lineHeight: 1.5, // Only number's accepted

    state: {
      fontColor: bodyFontColor,

      checked: {
        fontColor: bodyFontColor,
      },

      unchecked: {
        fontColor: bodyFontColor,
      },

      disabled: {
        fontColor: fontColorMedium,
      },
    },
  },
};
