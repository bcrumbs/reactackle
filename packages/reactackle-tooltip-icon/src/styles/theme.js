'use strict';

import {
  doubleBaseModule,
  colorPaletteGrey200,
  colorPaletteGrey400,
  colorPaletteGrey500,
  colorPaletteGrey700,
  colorPaletteGrey900,
  fontSizeXsmall,
} from 'reactackle-core';

export default {
  diameter: doubleBaseModule,
  fontSize: fontSizeXsmall,

  style: {
    fontColor: colorPaletteGrey500,
    backgroundColor: colorPaletteGrey200,

    hover: {
      fontColor: colorPaletteGrey700,
      backgroundColor: colorPaletteGrey400,
    },

    focus: {
      fontColor: colorPaletteGrey500,
      backgroundColor: colorPaletteGrey900,
    },
  },
};
