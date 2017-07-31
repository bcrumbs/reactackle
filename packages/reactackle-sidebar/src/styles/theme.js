'use strict';

import Color from 'color';
import {
  baseModule,
  oneAndHalfBaseModule,
  breakpointLarge,
  colorPaletteGrey700,
  colorPaletteGrey800,
  colorPaletteGrey900,
  fontSizeBody,
  fontWeightNormal,
  zIndexNav,
  bodyFontColorAlt,
} from 'reactackle-core';

/** '+1' is needed to be sure that sidebar is placed over header */
const sidebarZIndex = base => zIndexNav(base) + 1,
  sidebarMinHeight = 40,
  sidebarMinWidth = 50,
  toggleHoverColor = base => Color(colorPaletteGrey900(base)).darken(0.15);

export default {
  sidebar: {
    minHeight: sidebarMinHeight,
    backgroundColor: colorPaletteGrey800,
    fontColor: bodyFontColorAlt,
    fontSize: fontSizeBody,
    lineHeight: 1.5,
    zIndex: sidebarZIndex,
    widthChangingBreakpoint: breakpointLarge,

    state: {
      collapsed: {
        width: sidebarMinWidth,
      },

      expanded: {
        width: 250,
      },
    },
  },

  region: {
    scrollableMinHeight: 200,

    border: {
      thickness: 1,
      color: colorPaletteGrey700,
    },
  },

  toggleButton: {
    height: sidebarMinHeight,
    fontSize: fontSizeBody,
    fontWeight: fontWeightNormal,
    lineHeight: 1.5,
    textTransform: 'none',
    zIndex: sidebarZIndex,
    paddingRight: 0,

    style: {
      collapsed: {
        backgroundColor: colorPaletteGrey900,
        fontColor: bodyFontColorAlt,

        hover: {
          backgroundColor: toggleHoverColor,
          fontColor: bodyFontColorAlt,
        },

        focus: {
          backgroundColor: toggleHoverColor,
          fontColor: bodyFontColorAlt,
        },
      },

      expanded: {
        backgroundColor: colorPaletteGrey900,
        fontColor: bodyFontColorAlt,

        hover: {
          backgroundColor: toggleHoverColor,
          fontColor: bodyFontColorAlt,
        },

        focus: {
          backgroundColor: toggleHoverColor,
          fontColor: bodyFontColorAlt,
        },
      },
    },

    icon: {
      height: 40,
      imgSize: 24,

      style: {
        collapsed: {
          width: sidebarMinWidth,
          marginLeft: 0,
          color: 'inherit',
          opacity: 0.9,

          hover: {
            color: 'inherit',
            opacity: 1,
          },

          focus: {
            color: 'inherit',
            opacity: 1,
          },
        },

        expanded: {
          width: 40,
          marginLeft: oneAndHalfBaseModule,
          color: 'inherit',
          opacity: 0.9,

          hover: {
            color: 'inherit',
            opacity: 1,
          },

          focus: {
            color: 'inherit',
            opacity: 1,
          },
        },
      },
    },

    content: {
      paddingY: baseModule,
      paddingX: oneAndHalfBaseModule,
    },
  },
};
