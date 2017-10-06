import {
  bmodule,
  colorTransparent,
  colorWhite,
  colorError,
  colorSecondary,
  colorPaletteGrey100,
  colorPaletteGrey200,
  colorPaletteGrey300,
  colorPaletteGrey500,
  colorPaletteGrey900,
  radiusDefault,
  fontSizeBody,
  fontSizeSmall,
} from 'reactackle-core';

import { IconCheck } from 'reactackle-icons';

export default {
  checkboxesSpacing: bmodule(1),

  input: {
    size: bmodule(2.25),
    cursor: 'pointer',
    borderWidth: 1, // Only numbers accepted
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
    size: bmodule(2),
    imgSize: null,

    source: {
      src: IconCheck,
      type: 'svg',
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
          opacity: 0.75,
        },
      },
    },
  },

  label: {
    checkboxTextSpacing: bmodule(1),
    labelTooltipSpacing: bmodule(1),
    fontSize: fontSizeBody,
    fontColor: colorPaletteGrey900,
    lineHeight: 1.5,

    disabled: {
      color: colorPaletteGrey500,
    },
  },

  errorMessage: {
    messageCheckboxSpacing: bmodule(0.5),
    fontSize: fontSizeSmall,
    fontColor: colorError,
    lineHeight: 1.25,
  },
};
