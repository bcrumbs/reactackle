import {
  bmodule,
  fontSizeBody,
  radiusDefault,
  colorPaletteGrey300,
  bodyFontColor,
} from 'reactackle-core';

export default {
  fontSize: fontSizeBody,
  lineHeight: 1.2,
  borderRadius: radiusDefault,
  backgroundColor: colorPaletteGrey300,
  textColor: bodyFontColor,

  content: {
    paddingX: bmodule(1),
    paddingY: bmodule(0.5),
    iconTextOffset: bmodule(1),
    alignY: 'top', // one of ['top', 'center', 'bottom']
  },

  icon: {
    height: 24,
    width: null,
    imgHeight: 20,
    imgWidth: null,
    color: 'currentColor',
    opacity: 1,
  },

  removeIcon: {
    iconTextSpacing: bmodule(0.5),
    height: 24,
    width: null,
    imgHeight: 20,
    imgWidth: null,

    state: {
      color: bodyFontColor,
      backgroundColor: 'transparent',

      hover: {
        color: null, // will take 'default' if null
        backgroundColor: 'rgba(0,0,0,0.2)', // will take 'default' if null
      },

      focus: {
        color: null, // will take 'hover' if null
        backgroundColor: null, // will take 'hover' if null
      },
    },
  },
};
