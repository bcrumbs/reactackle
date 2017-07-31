'use strict';

import {
  baseModule,
  halfBaseModule,
  radiusDefault,
  fontSizeXsmall,
  colorWhite,
  zIndexTooltip,
} from 'reactackle-core';

export default {
  backgroundColor: 'rgba(0,0,0,0.9)',
  borderRadius: radiusDefault,
  paddingY: halfBaseModule,
  paddingX: baseModule,
  minWidth: 120,
  maxWidth: '100vw',
  fontSize: fontSizeXsmall,
  lineHeight: 1.3,
  fontColor: colorWhite,
  zIndex: zIndexTooltip,
  tooltipRefererSpacing: baseModule,
};
