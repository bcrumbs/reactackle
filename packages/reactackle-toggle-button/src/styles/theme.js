'use strict';

import {
  baseModule,
  doubleBaseModule,
  twoAndHalfBaseModule,
  fourAndHalfBaseModule,
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
    width: fourAndHalfBaseModule,
    height: doubleBaseModule,

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
    size: twoAndHalfBaseModule,
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
    toggleLabelSpacing: baseModule,
    labelTooltipSpacing: baseModule,
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
