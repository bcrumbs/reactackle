'use strict';

import {
  baseModule,
  halfBaseModule,
  oneAndHalfBaseModule,
  doubleBaseModule,
  fiveBaseModule,
  eightBaseModule,
  colorMain,
  fontWeightSemibold,
  fontSizeBody,
  fontSizeTitle,
  zIndexNav,
  bodyFontColor,
  bodyFontColorAlt,
} from 'reactackle-core';

export default {
  header: {
    backgroundColor: colorMain,
    zIndex: zIndexNav,

    fontColor: {
      dark: bodyFontColor,
      light: bodyFontColorAlt,
    },

    size: {
      paddingY: 0,
      paddingX: doubleBaseModule,
      regionsSpacing: doubleBaseModule,
      fontSize: fontSizeBody,
      minHeight: eightBaseModule,

      blank: {
        paddingY: 0,
        paddingX: doubleBaseModule,
        regionsSpacing: doubleBaseModule,
        fontSize: fontSizeBody,
        minHeight: 0,
      },

      dense: {
        paddingY: 0,
        paddingX: doubleBaseModule,
        regionsSpacing: doubleBaseModule,
        fontSize: fontSizeBody,
        minHeight: fiveBaseModule,
      },
    },
  },

  region: {
    size: {
      paddingY: oneAndHalfBaseModule,
      paddingX: 0,

      blank: {
        paddingY: 0,
        paddingX: 0,
      },

      dense: {
        paddingY: halfBaseModule,
        paddingX: 0,
      },
    },
  },

  item: {
    size: {
      paddingY: 0,
      paddingX: baseModule,

      blank: {
        paddingY: 0,
        paddingX: baseModule,
      },

      dense: {
        paddingY: 0,
        paddingX: baseModule,
      },
    },
  },

  title: {
    fontColor: {
      dark: bodyFontColor,
      light: bodyFontColorAlt,
    },

    size: {
      fontSize: fontSizeTitle,
      fontWeight: fontWeightSemibold,
      lineHeight: 1.3,
      paddingY: 0,
      paddingX: baseModule,

      blank: {
        fontSize: fontSizeTitle,
        fontWeight: fontWeightSemibold,
        lineHeight: 1.3,
        paddingY: 0,
        paddingX: baseModule,
      },

      dense: {
        fontSize: fontSizeTitle,
        fontWeight: fontWeightSemibold,
        lineHeight: 1.3,
        paddingY: 0,
        paddingX: baseModule,
      },
    },
  },
};
