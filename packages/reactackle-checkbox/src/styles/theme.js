'use strict';

import {
  baseModule,
  halfBaseModule,
  colorTransparent,
  colorWhite,
  colorError,
  colorSecondary,
  oneAndHalfBaseModule,
  twoAndQuarterBaseModule,
  colorPaletteGrey100,
  colorPaletteGrey200,
  colorPaletteGrey300,
  colorPaletteGrey500,
  colorPaletteGrey900,
  radiusDefault,
  fontSizeBody,
  fontSizeSmall,
} from 'reactackle-core';

export default {
  checkboxesSpacing: baseModule,

  input: {
    size: twoAndQuarterBaseModule,
    cursor: 'pointer',
    borderWidth: 1, // Only number's accepted
    borderRadius: radiusDefault,
    backgroundColor: colorTransparent,
    borderColor: colorPaletteGrey300,

    hover: {
      backgroundColor: colorTransparent,
      borderColor: colorPaletteGrey500,
    },

    focus: {
      backgroundColor: colorTransparent,
      borderColor: colorSecondary,
    },

    disabled: {
      backgroundColor: colorPaletteGrey100,
      borderColor: colorPaletteGrey300,
    },

    checked: {
      backgroundColor: colorSecondary,
      borderColor: colorSecondary,

      hover: {
        backgroundColor: colorSecondary,
        borderColor: colorSecondary,
      },

      focus: {
        backgroundColor: colorSecondary,
        borderColor: colorSecondary,
      },

      disabled: {
        backgroundColor: colorPaletteGrey200,
        borderColor: colorPaletteGrey300,
      },
    },
  },

  icon: {
    size: oneAndHalfBaseModule,

    source: {
      name: 'check',
      src: '',
      type: 'font-awesome',
    },

    style: {
      color: colorTransparent,
      opacity: 1,

      hover: {
        color: colorWhite,
        opacity: 0.3,
      },

      focus: {
        color: colorWhite,
        opacity: 0.5,
      },

      disabled: {
        color: colorTransparent,
        opacity: 1,
      },

      checked: {
        color: colorWhite,
        opacity: 1,

        hover: {
          color: colorWhite,
          opacity: 0.6,
        },

        focus: {
          color: colorWhite,
          opacity: 0.6,
        },

        disabled: {
          color: colorWhite,
          opacity: 0.5,
        },
      },
    },
  },

  label: {
    checkboxTextSpacing: baseModule,
    labelTooltipSpacing: baseModule,
    fontSize: fontSizeBody,
    fontColor: colorPaletteGrey900,
    lineHeight: 1.5,

    disabled: {
      color: colorPaletteGrey500,
    },
  },

  errorMessage: {
    messageCheckboxSpacing: halfBaseModule,
    fontSize: fontSizeSmall,
    fontColor: colorError,
    lineHeight: 1.25,
  },
};
