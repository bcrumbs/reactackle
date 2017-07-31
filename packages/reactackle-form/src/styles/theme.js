'use strict';

import {
  tripleBaseModule,
  colorTransparent,
  colorSecondary,
} from 'reactackle-core';

export default {
  themeColor: colorSecondary,
  gutter: tripleBaseModule,

  message: {
    fontSize: ({ fontSize }) => fontSize[-1],
    lineHeight: 1.5,
    marginBottom: ({ baseModule }) => baseModule * 4.5,
    color: ({ fontColor }) => fontColor.medium,
    backgroundColor: colorTransparent,
    paddingY: 0,
    paddingX: 0,

    error: {
      color: ({ color }) => color.alert,
      backgroundColor: colorTransparent,
      paddingY: 0,
      paddingX: 0,
    },
  },
};
