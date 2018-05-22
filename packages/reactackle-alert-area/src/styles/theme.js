import {
  bmodule,
  zIndexOverlay,
  fontSizeBody,
  bodyFontColorAlt,
  radiusDefault,
  fadeInDown,
  fadeOutRight,
  colorWarning,
  colorWarningForeground,
  colorError,
  colorErrorForeground,
  colorSuccess,
  colorSuccessForeground,
  colorInfo,
  colorInfoForeground,
} from 'reactackle-core';

export default {
  wrapper: {
    marginX: bmodule(1),
    marginY: bmodule(1),
    zIndex: zIndexOverlay,
    itemsSpacing: 2,
  },

  item: {
    borderRadius: radiusDefault,
    minWidth: '20em',
    maxWidth: '35em',
    fontSize: fontSizeBody,
    lineHeight: 1.5,
    paddingY: bmodule(2),
    paddingX: bmodule(3),

    actions: {
      paddingY: bmodule(2),
      paddingX: bmodule(3),
      itemSpacingX: 2,
      itemSpacingY: 2,
    },

    colorScheme: {
      default: {
        textColor: bodyFontColorAlt,
        backgroundColor: 'rgba(0,0,0,0.8)',
      },
      warning: {
        textColor: colorWarningForeground,
        backgroundColor: colorWarning,
      },
      error: {
        textColor: colorErrorForeground,
        backgroundColor: colorError,
      },
      success: {
        textColor: colorSuccessForeground,
        backgroundColor: colorSuccess,
      },
      info: {
        textColor: colorInfoForeground,
        backgroundColor: colorInfo,
      },
    },

    animation: {
      in: {
        name: fadeInDown,
        speed: '300ms',
        timingFunction: 'ease-in',
      },

      out: {
        name: fadeOutRight,
        speed: '150ms',
        timingFunction: 'ease-in',
      },
    },
  },
};
