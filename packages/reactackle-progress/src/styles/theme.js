'use strict';

import Color from 'color';

import {
  baseModule,
  fontSizeSmall,
  fontSizeBody,
  fontWeightNormal,
  fontWeightSemibold,
  colorPaletteGrey200,
  colorMain,
} from 'reactackle-core';

const preloaderBackgroundColor = base =>
  Color(base.colorPaletteGrey[100]).fade(0.4).string();

export default {
  circle: {
    strokeSize: 10,
    circleSize: 100,
    labelCenteredPadding: baseModule,

    labelSpacing: {
      top: baseModule,
      bottom: baseModule,
    },

    valueLabel: {
      fontSize: fontSizeBody,
      fontWeight: fontWeightSemibold,
      lineHeight: 1.5,
    },

    supplementText: {
      fontSize: fontSizeSmall,
      fontWeight: fontWeightNormal,
      lineHeight: 1.25,
    },

    bgLine: {
      colourDefault: colorPaletteGrey200,
    },

    mainLine: {
      color: colorMain,
      startColor: { h: 45, s: 94, v: 100 },
      endColor: { h: 121, s: 56, v: 69 },
    },

    secondaryLine: {
      color: null,
      opacity: 0.15,
    },

    animation: {
      svg: {
        transitionDuration: 1000,
      },
      circle: {
        transitionDuration: 2000,
      },
    },
  },

  linear: {
    thickness: 4,
    
    labelSpacing: {
      top: baseModule,
      bottom: baseModule,
    },

    valueLabel: {
      fontSize: fontSizeBody,
      fontWeight: fontWeightSemibold,
      lineHeight: 1.5,
    },

    supplementText: {
      fontSize: fontSizeSmall,
      fontWeight: fontWeightNormal,
      lineHeight: 1.25,
    },

    background: {
      colourDefault: colorPaletteGrey200,
    },

    mainLine: {
      color: colorMain,
      startColor: { h: 45, s: 94, v: 100 },
      endColor: { h: 121, s: 56, v: 69 },
    },

    secondaryLine: {
      color: null,
      opacity: 0.15,
    },
  },

  preloader: {
    backgroundColor: preloaderBackgroundColor,
    loaderMaxWidth: 300,
    width: '100%',
    height: 100,
  },
};
