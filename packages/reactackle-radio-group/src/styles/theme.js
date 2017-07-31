'use strict';

import {
  baseModule,
  twoAndQuarterBaseModule,
  colorTransparent,
  colorSecondary,
  bodyFontColor,
  radiusRounded,
  colorWhite,
  colorPaletteGrey100,
  colorPaletteGrey200,
  colorPaletteGrey300,
  colorPaletteGrey400,
  colorPaletteGrey500,
  colorPaletteGrey600,
} from 'reactackle-core';

const radioConstants = {
  backgroundColorDefault: colorTransparent,
  backgroundColorChecked: colorSecondary,
  labelColorDefault: bodyFontColor,
  labelColorDisabled: colorPaletteGrey500,
};

export default {
  input: {
    similarItemsSpacing: baseModule,
    size: twoAndQuarterBaseModule,
    borderWidth: 1,
    borderRadius: radiusRounded,
    backgroundColor: radioConstants.backgroundColorDefault,
    borderColor: colorPaletteGrey400,

    hover: {
      backgroundColor: radioConstants.backgroundColorDefault,
      borderColor: colorPaletteGrey600,
    },

    focus: {
      backgroundColor: radioConstants.backgroundColorDefault,
      borderColor: colorSecondary,
    },

    disabled: {
      backgroundColor: colorPaletteGrey100,
      borderColor: colorPaletteGrey300,
    },

    checked: {
      backgroundColor: radioConstants.backgroundColorChecked,
      borderColor: colorSecondary,
      knobOffsetSize: 3,
      knobOffsetColor: colorWhite,

      hover: {
        backgroundColor: radioConstants.backgroundColorChecked,
        borderColor: colorPaletteGrey500,
        knobOffsetSize: 3,
        knobOffsetColor: colorWhite,
      },

      focus: {
        backgroundColor: radioConstants.backgroundColorChecked,
        borderColor: colorSecondary,
        knobOffsetSize: 3,
        knobOffsetColor: colorWhite,
      },

      disabled: {
        backgroundColor: colorPaletteGrey200,
        borderColor: colorPaletteGrey300,
        knobOffsetSize: 3,
        knobOffsetColor: colorWhite,
      },
    },
  },

  label: {
    inputLabelSpacing: baseModule,
    fontSize: ({ fontSize }) => fontSize[0],
    lineHeight: 1.5,
    fontColor: radioConstants.labelColorDefault,

    hover: {
      fontColor: radioConstants.labelColorDefault,
    },

    focus: {
      fontColor: radioConstants.labelColorDefault,
    },

    disabled: {
      fontColor: radioConstants.labelColorDisabled,
    },

    checked: {
      fontColor: radioConstants.labelColorDefault,

      hover: {
        fontColor: radioConstants.labelColorDefault,
      },

      focus: {
        fontColor: radioConstants.labelColorDefault,
      },

      disabled: {
        fontColor: radioConstants.labelColorDisabled,
      },
    },
  },
};
