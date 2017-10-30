import React  from 'react';

import {
  bmodule,
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

import { IconCross } from 'reactackle-icons';

export const dialogConstants = {
  paddingX: bmodule(2),
  paddingY: bmodule(2),
  paddingYSmall: bmodule(1.5),
};

export default {
  window: {
    minWidth: 280,
    maxWidth: 640,
    backgroundColor: colorWhite,
    borderRadius: radiusDefault,
    zIndex: zIndexModal,
    margin: bmodule(1),
  },

  sideRegion: {
    backgroundColor: colorPaletteGrey200,
    maxWidth: 320,
  },

  closeButton: {
    width: 40,
    height: null,
    imgSize: 24,
    // eslint-disable-next-line react/display-name
    iconSrc: () => <IconCross size="custom" color="inherit" />,

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
    subtitleTitleSpacing: bmodule(1),
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
    similarTextBlockSpacing: bmodule(1),

    borderWidth: 1,
    borderColor: colorBorder,
  },

  actions: {
    paddingX: dialogConstants.paddingX,
    paddingY: dialogConstants.paddingY,
  },

  actionItem: {
    marginX: '0.5em',
    marginY: bmodule(0.5),
  },

  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    zIndex: 1,
  },
};
