'use strict';

import {
  baseModule,
  doubleBaseModule,
  tripleBaseModule,
  halfBaseModule,
  twoAndHalfBaseModule,
  fourBaseModule,
} from 'reactackle-core';

export default {
  row: {
    maxWidth: ({ contentWidth }) => contentWidth,
  },

  paddingBox: {
    small: {
      paddingY: halfBaseModule,
      paddingX: halfBaseModule,

      breakpoints: [
        {
          breakpoint: ({ breakpoints }) => breakpoints.medium,
          paddingY: baseModule,
          paddingX: baseModule,
        },
      ],
    },

    medium: {
      paddingY: baseModule,
      paddingX: baseModule,

      breakpoints: [
        {
          breakpoint: ({ breakpoints }) => breakpoints.medium,
          paddingY: doubleBaseModule,
          paddingX: doubleBaseModule,
        },
      ],
    },

    large: {
      paddingY: twoAndHalfBaseModule,
      paddingX: twoAndHalfBaseModule,

      breakpoints: [
        {
          breakpoint: ({ breakpoints }) => breakpoints.medium,
          paddingY: fourBaseModule,
          paddingX: fourBaseModule,
        },
      ],
    },
  },

  container: {
    paddingY: baseModule,
    paddingX: baseModule,

    breakpoints: [
      {
        breakpoint: ({ breakpoints }) => breakpoints.medium,
        paddingY: doubleBaseModule,
        paddingX: doubleBaseModule,
      },
      {
        breakpoint: ({ breakpoints }) => breakpoints.large,
        paddingY: tripleBaseModule,
        paddingX: tripleBaseModule,
      },
    ],
  },

  column: {
    gutterHorizontal: baseModule,
    gutterVertical: baseModule,

    breakpoints: [
      {
        breakpoint: ({ breakpoints }) => breakpoints.medium,
        gutterHorizontal: doubleBaseModule,
        gutterVertical: doubleBaseModule,
      },
      {
        breakpoint: ({ breakpoints }) => breakpoints.large,
        gutterHorizontal: tripleBaseModule,
        gutterVertical: tripleBaseModule,
      },
    ],
  },
};
