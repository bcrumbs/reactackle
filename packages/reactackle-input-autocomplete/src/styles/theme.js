'use strict';

import {
  halfBaseModule,
  oneAndHalfBaseModule,
  radiusDefault,
  colorWhite,
  colorTransparent,
  fontSizeBody,
  fontWeightNormal,
  bodyFontColor,
} from 'reactackle-core';

export default {
  optionsList: {
    backgroundColor: colorWhite,
    paddingY: halfBaseModule,
    paddingX: 0,
    borderRadius: radiusDefault,
    minWidth: 140,
    maxWidth: '100vw',
  },

  option: {
    fontSize: fontSizeBody,
    textTransform: 'none',
    lineHeight: 1.5, // Only number accepted
    paddingY: halfBaseModule,
    paddingX: oneAndHalfBaseModule,
    borderRadius: 0,

    style: {
      fontColor: bodyFontColor,
      backgroundColor: colorTransparent,
      fontWeight: fontWeightNormal,

      hover: {
        fontColor: bodyFontColor,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        fontWeight: fontWeightNormal,
      },

      focus: {
        fontColor: bodyFontColor,
        backgroundColor: 'rgba(0, 0, 0, 0.15)',
        fontWeight: fontWeightNormal,
      },
    },
  },
};
