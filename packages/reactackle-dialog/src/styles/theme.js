import {
  oneAndHalfBaseModule,
  doubleBaseModule,
  baseModule,
  halfBaseModule,
  radiusDefault,
  colorWhite,
  colorPaletteGrey200,
  colorBorder,
  fontWeightNormal,
  fontWeightSemibold,
  fontSizeTitle,
  zIndexModal,
  fontSizeBody,
  bodyFontColor,
  fontColorMedium,
} from 'reactackle-core';

import { IconCross } from 'reactackle-icon-svg';

export const dialogConstants = {
  paddingX: doubleBaseModule,
  paddingY: doubleBaseModule,
  paddingYSmall: oneAndHalfBaseModule,
};

export default {
  window: {
    minWidth: 280,
    maxWidth: 640,
    backgroundColor: colorWhite,
    borderRadius: radiusDefault,
    zIndex: zIndexModal,
    margin: baseModule,
  },

  sideRegion: {
    backgroundColor: colorPaletteGrey200,
    maxWidth: 320,
  },

  closeButton: {
    width: 40,
    height: null,
    imgSize: 24,

    source: {
      src: IconCross,
      type: 'svg',
    },

    style: {
      color: bodyFontColor,
      opacity: 0.46,

      hover: {
        color: bodyFontColor,
        opacity: 1,
      },

      focus: {
        color: bodyFontColor,
        opacity: 0.7,
      },

      modalWithTransparentBg: {
        color: colorWhite,
        opacity: 0.46,

        hover: {
          color: colorWhite,
          opacity: 1,
        },

        focus: {
          color: colorWhite,
          opacity: 0.7,
        },
      },
    },
  },

  title: {
    paddingX: dialogConstants.paddingX,
    paddingY: dialogConstants.paddingY,
    fontSize: fontSizeTitle,
    lineHeight: 1.3,
    color: bodyFontColor,
    fontWeight: fontWeightSemibold,
  },

  subtitle: {
    subtitleTitleSpacing: baseModule,
    fontSize: fontSizeBody,
    lineHeight: 1.3,
    color: fontColorMedium,
    fontWeight: fontWeightNormal,
  },

  content: {
    paddingX: dialogConstants.paddingX,
    paddingY: dialogConstants.paddingY,
    fontSize: fontSizeBody,
    lineHeight: 1.5,
    color: bodyFontColor,
    fontWeight: fontWeightNormal,
    similarTextBlockSpacing: baseModule,

    borderWidth: 1,
    borderColor: colorBorder,
  },

  icon: {
    close: {
      source: {
        name: 'times',
        src: '',
        type: 'font-awesome',
      },
    },
  },

  actions: {
    paddingX: dialogConstants.paddingX,
    paddingY: dialogConstants.paddingY,
  },

  actionItem: {
    marginX: '0.5em',
    marginY: halfBaseModule,
  },

  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    zIndex: 1,
  },
};
