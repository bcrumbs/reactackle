import React from 'react';
import { IconArrowChevronRight } from 'reactackle-icons';

import {
  colorWhite,
  colorPaletteGrey50,
  colorPaletteGrey75,
  fontSize,
  baseModule,
  bmodule,
  bodyFontColor,
  fontWeightNormal,
  fontWeightSemibold,
  colorBorder,
} from 'reactackle-core';

const titleFontSize = fontSize[-1];
const titleLineHeight = 1.5;
const titlePadY = baseModule;

export default {
  item: {
    title: {
      align: 'top', // One of: top, center, bottom, stretch
      minHeight: base => titleFontSize * titleLineHeight + titlePadY(base) * 2,

      collapsed: {
        backgroundColor: colorWhite,
        opacity: 0.7,
        fontSize: titleFontSize,
        lineHeight: 1.5,
        fontWeight: fontWeightNormal,
        color: bodyFontColor,
        textTransform: 'uppercase',
        paddingTop: bmodule(1),
        paddingBottom: bmodule(1),
        paddingLeft: bmodule(2),

        hover: {
          backgroundColor: colorPaletteGrey50,
          opacity: 1,
        },

        focus: {
          backgroundColor: colorPaletteGrey75,
          opacity: 1,
        },
      },

      expanded: {
        backgroundColor: colorWhite,
        opacity: 1,
        fontSize: titleFontSize,
        lineHeight: 1.5,
        fontWeight: fontWeightSemibold,
        color: bodyFontColor,
        textTransform: 'uppercase',
        paddingTop: bmodule(1),
        paddingBottom: bmodule(1),
        paddingLeft: bmodule(2),
        paddingRight: bmodule(2),

        hover: {
          backgroundColor: colorPaletteGrey50,
          opacity: 1,
        },

        focus: {
          backgroundColor: colorPaletteGrey75,
          opacity: 1,
        },
      },
    },

    expandIcon: {
      height: 24,
      width: null,
      imgHeight: 20,
      imgWidth: null,

      expanded: {
        opacity: 1,
        rotateDegree: '90deg',
        iconElement: (
          <IconArrowChevronRight size="custom" color="currentColor" />
        ),
      },

      collapsed: {
        opacity: 0.7,
        rotateDegree: 0,
        iconElement: (
          <IconArrowChevronRight size="custom" color="currentColor" />
        ),
      },
    },

    content: {
      paddingY: bmodule(1.5),
      paddingX: bmodule(2),
      animatedOffset: -20,
    },
  },
  separator: {
    style: 'solid',
    color: colorBorder,
    thickness: 1,
  },
};
