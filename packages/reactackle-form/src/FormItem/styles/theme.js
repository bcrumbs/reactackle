'use strict';

import Color from 'color';
import { baseModule } from 'reactackle-core';
import form from '../../styles/theme';

export default {
  spacing: form.gutter,

  label: {
    fontSize: ({ fontSize }) => fontSize[-2],
    lineHeight: 1,
    textTransform: 'none',
    fontWeight: ({ fontWeight }) => fontWeight.normal,
    marginBottom: baseModule,
    color: ({ color }) => Color(color.black).lighten(0.54),

    focus: {
      color: form.themeColor,
    },

    disabled: {
      color: ({ fontColor }) => fontColor.medium,
    },
  },
};
