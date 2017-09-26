import {
  colorSecondary,
  bodyFontColor,
  bodyLineHeight,
  colorTransparent,
  baseModule,
  halfBaseModule,
  oneAndHalfBaseModule,
  doubleBaseModule,
  fourBaseModule,
  fontSizeBody,
  fontSizeSmall,
  fontWeightNormal,
  fontColorMedium,
  colorAlert,
  colorError,
  colorSuccess,
  colorPaletteGrey300,
  colorPaletteGrey400,
  radiusDefault,
  breakpointMedium,
  bodyFontFamily,
} from 'reactackle-core';

import {
  IconEye,
  IconCross,
} from 'reactackle-icon-svg';

const constants = {
  themeColor: colorSecondary,
  fontColor: bodyFontColor,
  backgroundColor: colorTransparent,
  borderStyle: 'solid',

  size: {
    paddingY: baseModule,
    fontSize: fontSizeBody,
    lineHeight: 1.5,
    paddingX: {
      bordered: baseModule,
      underlined: 0,
    },

    dense: {
      paddingY: halfBaseModule,
      fontSize: fontSizeBody,
      lineHeight: 1.5,
      paddingX: {
        bordered: halfBaseModule,
        underlined: 0,
      },
    },

    fullWidth: {
      paddingY: oneAndHalfBaseModule,
      fontSize: fontSizeBody,
      lineHeight: 1.5,
      paddingX: {
        bordered: oneAndHalfBaseModule,
        underlined: oneAndHalfBaseModule,
      },
    },

    denseFullWidth: {
      paddingY: oneAndHalfBaseModule,
      fontSize: fontSizeBody,
      lineHeight: 1.5,
      paddingX: {
        bordered: oneAndHalfBaseModule,
        underlined: oneAndHalfBaseModule,
      },
    },
  },

  underlined: {
    paddingY: baseModule,
  },

  iconOuter: {
    opacity: 0.54,
  },

  iconInner: {
    opacity: 0.54,
  },
};

export default {
  textfield: {
    themeColor: constants.themeColor,
    fontFamily: bodyFontFamily,
    transitionSpeed: 150,

    state: {
      fontColor: constants.fontColor,
      backgroundColor: constants.backgroundColor,
      borderColor: colorPaletteGrey300,
      borderStyle: constants.borderStyle,

      hover: {
        fontColor: constants.fontColor,
        backgroundColor: constants.backgroundColor,
        borderColor: constants.themeColor,
        borderStyle: constants.borderStyle,
      },

      focus: {
        fontColor: constants.fontColor,
        backgroundColor: constants.backgroundColor,
        borderColor: constants.themeColor,
        borderStyle: constants.borderStyle,
      },

      disabled: {
        fontColor: fontColorMedium,
        backgroundColor: colorTransparent,
        borderColor: colorPaletteGrey300,
        borderStyle: 'dotted',
      },

      error: {
        fontColor: colorAlert,
        backgroundColor: constants.backgroundColor,
        borderColor: colorAlert,
        borderStyle: constants.borderStyle,
      },

      success: {
        fontColor: colorSuccess,
        backgroundColor: constants.backgroundColor,
        borderColor: colorSuccess,
        borderStyle: constants.borderStyle,
      },
    },

    size: {
      paddingY: constants.size.paddingY,
      paddingX: constants.size.paddingX,
      lineHeight: constants.size.lineHeight,
      fontSize: constants.size.fontSize,

      dense: {
        paddingY: constants.size.dense.paddingY,
        paddingX: constants.size.dense.paddingX,
        lineHeight: constants.size.lineHeight,
        fontSize: constants.size.dense.fontSize,
      },

      fullWidth: {
        paddingY: constants.size.fullWidth.paddingY,
        paddingX: constants.size.fullWidth.paddingX,
        lineHeight: constants.size.lineHeight,
        fontSize: constants.size.fullWidth.fontSize,
      },

      denseFullWidth: {
        paddingY: constants.size.denseFullWidth.paddingY,
        paddingX: constants.size.denseFullWidth.paddingX,
        lineHeight: constants.size.lineHeight,
        fontSize: constants.size.denseFullWidth.fontSize,
      },
    },

    bordered: {
      borderWidth: 1,
      borderRadius: radiusDefault,
    },

    underlined: {
      borderWidth: 2,
      borderRadius: 0,
    },
  },

  placeholder: {
    fontColor: colorPaletteGrey400,
  },

  label: {
    positionTop: {
      fontSize: fontSizeSmall,
      lineHeight: 1,
      textTransform: 'none',
      fontWeight: fontWeightNormal,

      style: {
        fontColor: fontColorMedium,

        disabled: {
          fontColor: fontColorMedium,
        },

        focus: {
          fontColor: constants.themeColor,
        },

        error: {
          fontColor: colorError,
        },

        success: {
          fontColor: colorSuccess,
        },
      },

      size: {
        bordered: {
          paddingTop: 0,
          labelSpacing: baseModule,

          dense: {
            paddingTop: 0,
            labelSpacing: halfBaseModule,
          },

          fullWidth: {
            paddingTop: halfBaseModule,
            labelSpacing: halfBaseModule,
          },

          denseFullWidth: {
            paddingTop: halfBaseModule,
            labelSpacing: halfBaseModule,
          },
        },

        underlined: {
          paddingTop: 0,
          labelSpacing: 0,

          dense: {
            paddingTop: 0,
            labelSpacing: halfBaseModule,
          },

          fullWidth: {
            paddingTop: halfBaseModule,
            labelSpacing: halfBaseModule,
          },

          denseFullWidth: {
            paddingTop: halfBaseModule,
            labelSpacing: halfBaseModule,
          },
        },
      },
    },

    positionSide: {
      fontSize: fontSizeBody,
      lineHeight: bodyLineHeight,
      textTransform: 'none',
      fontWeight: fontWeightNormal,
      width: '30%',

      style: {
        fontColor: bodyFontColor,

        disabled: {
          fontColor: fontColorMedium,
        },

        focus: {
          fontColor: constants.themeColor,
        },

        error: {
          fontColor: colorError,
        },

        success: {
          fontColor: colorSuccess,
        },
      },

      size: {
        bordered: {
          paddingTop: 0,
          paddingBottom: 0,
          labelSpacing: baseModule,

          dense: {
            paddingTop: 0,
            paddingBottom: 0,
            labelSpacing: baseModule,
          },

          fullWidth: {
            paddingTop: halfBaseModule,
            paddingBottom: halfBaseModule,
            labelSpacing: baseModule,
          },

          denseFullWidth: {
            paddingTop: halfBaseModule,
            paddingBottom: halfBaseModule,
            labelSpacing: baseModule,
          },
        },

        underlined: {
          paddingTop: 0,
          paddingBottom: 0,
          labelSpacing: baseModule,

          dense: {
            paddingTop: 0,
            paddingBottom: 0,
            labelSpacing: baseModule,
          },

          fullWidth: {
            paddingTop: halfBaseModule,
            paddingBottom: halfBaseModule,
            labelSpacing: baseModule,
          },

          denseFullWidth: {
            paddingTop: halfBaseModule,
            paddingBottom: halfBaseModule,
            labelSpacing: baseModule,
          },
        },
      },

      breakpoints: [
        {
          breakpoint: breakpointMedium,
          width: 150,
        },
      ],
    },

    labelTooltipSpacing: baseModule,
  },

  iconOuter: {
    iconSpacing: baseModule,

    state: {
      color: 'inherit',
      opacity: constants.iconOuter.opacity,

      disabled: {
        color: 'inherit',
        opacity: 0.25,
      },

      focus: {
        color: constants.themeColor,
        opacity: constants.iconOuter.opacity,
      },

      error: {
        color: 'inherit',
        opacity: constants.iconOuter.opacity,
      },

      success: {
        color: 'inherit',
        opacity: constants.iconOuter.opacity,
      },
    },

    size: {
      boxSize: base =>
        constants.size.fontSize(base) * constants.size.lineHeight +
        constants.size.paddingY(base) * 2,
      imgSize: null,

      dense: {
        boxSize: base =>
          constants.size.dense.fontSize(base) *
            constants.size.dense.lineHeight +
          constants.size.dense.paddingY(base) * 2,
        imgSize: null,
      },

      fullWidth: {
        boxSize: base =>
          constants.size.fullWidth.fontSize(base) *
            constants.size.fullWidth.lineHeight +
          constants.size.fullWidth.paddingY(base) * 2,
        imgSize: null,
      },

      denseFullWidth: {
        boxSize: base =>
          constants.size.denseFullWidth.fontSize(base) *
            constants.size.denseFullWidth.lineHeight +
          constants.size.denseFullWidth.paddingY(base) * 2,
        imgSize: null,
      },
    },
  },

  iconInner: {
    iconSpacing: halfBaseModule,

    state: {
      color: 'inherit',
      opacity: constants.iconInner.opacity,

      disabled: {
        color: 'inherit',
        opacity: 0.35,
      },

      hover: {
        color: 'inherit',
        opacity: 0.8,
      },

      focus: {
        color: 'inherit',
        opacity: 1,
      },

      error: {
        color: 'inherit',
        opacity: constants.iconInner.opacity,
      },

      success: {
        color: 'inherit',
        opacity: constants.iconInner.opacity,
      },
    },

    size: {
      boxSize: base =>
        constants.size.fontSize(base) * constants.size.lineHeight +
        constants.size.paddingY(base) * 2,
      imgSize: null,

      dense: {
        boxSize: base =>
          constants.size.dense.fontSize(base) *
            constants.size.dense.lineHeight +
          constants.size.dense.paddingY(base) * 2,
        imgSize: null,
      },

      fullWidth: {
        boxSize: base =>
          constants.size.fullWidth.fontSize(base) *
            constants.size.fullWidth.lineHeight +
          constants.size.fullWidth.paddingY(base) * 2,
        imgSize: null,
      },

      denseFullWidth: {
        boxSize: base =>
          constants.size.denseFullWidth.fontSize(base) *
            constants.size.denseFullWidth.lineHeight +
          constants.size.denseFullWidth.paddingY(base) * 2,
        imgSize: null,
      },
    },
  },

  buttonInner: {
    iconSpacing: halfBaseModule,

    state: {
      color: constants.fontColor,
      opacity: constants.iconInner.opacity,

      disabled: {
        color: 'inherit',
        opacity: 0.35,
      },

      hover: {
        color: constants.fontColor,
        opacity: 0.8,
      },

      focus: {
        color: constants.fontColor,
        opacity: 1,
      },

      error: {
        color: constants.fontColor,
        opacity: constants.iconInner.opacity,
      },

      success: {
        color: constants.fontColor,
        opacity: constants.iconInner.opacity,
      },
    },

    size: {
      boxSize: base =>
        constants.size.fontSize(base) * constants.size.lineHeight +
        constants.size.paddingY(base) * 2,
      imgSize: 24,

      dense: {
        boxSize: base =>
          constants.size.dense.fontSize(base) *
            constants.size.dense.lineHeight +
          constants.size.dense.paddingY(base) * 2,
        imgSize: 24,
      },

      fullWidth: {
        boxSize: base =>
          constants.size.fullWidth.fontSize(base) *
            constants.size.fullWidth.lineHeight +
          constants.size.fullWidth.paddingY(base) * 2,
        imgSize: 24,
      },

      denseFullWidth: {
        boxSize: base =>
          constants.size.denseFullWidth.fontSize(base) *
            constants.size.denseFullWidth.lineHeight +
          constants.size.denseFullWidth.paddingY(base) * 2,
        imgSize: 24,
      },
    },
  },

  clearingIcon: {
    src: IconCross,
    type: 'svg',
  },

  passwordIcon: {
    src: IconEye,
    type: 'svg',
  },

  message: {
    messageSpacing: baseModule,
    fontSize: fontSizeSmall,
    lineHeight: 1,

    style: {
      fontColor: fontColorMedium,

      disabled: {
        fontColor: fontColorMedium,
      },

      focus: {
        fontColor: fontColorMedium,
      },

      error: {
        fontColor: colorAlert,
      },

      success: {
        fontColor: colorSuccess,
      },
    },
  },

  symbolCounter: {
    counterSpacing: baseModule,
    counterMessageSpacing: fourBaseModule,
    fontSize: fontSizeSmall,
    lineHeight: 1,

    style: {
      fontColor: fontColorMedium,

      disabled: {
        fontColor: fontColorMedium,
      },

      focus: {
        fontColor: fontColorMedium,
      },

      error: {
        fontColor: colorAlert,
      },
    },
  },

  prefix: {
    lineHeight: 'inherit',

    size: {
      fontSize: 'inherit',
      paddingY: halfBaseModule,
      prefixSpacing: doubleBaseModule,
      prefixEdgeSpacing: {
        bordered: baseModule,
        underlined: 0,
      },

      dense: {
        fontSize: 'inherit',
        paddingY: halfBaseModule,
        prefixSpacing: doubleBaseModule,
        prefixEdgeSpacing: {
          bordered: baseModule,
          underlined: 0,
        },
      },

      fullWidth: {
        fontSize: 'inherit',
        paddingY: halfBaseModule,
        prefixSpacing: doubleBaseModule,
        prefixEdgeSpacing: {
          bordered: baseModule,
          underlined: 0,
        },
      },

      denseFullWidth: {
        fontSize: 'inherit',
        paddingY: halfBaseModule,
        prefixSpacing: doubleBaseModule,
        prefixEdgeSpacing: {
          bordered: baseModule,
          underlined: 0,
        },
      },
    },

    state: {
      bordered: {
        fontColor: fontColorMedium,
        backgroundColor: 'inherit',

        focus: {
          fontColor: constants.fontColor,
          backgroundColor: constants.backgroundColor,
        },

        disabled: {
          fontColor: fontColorMedium,
          backgroundColor: colorTransparent,
        },

        error: {
          fontColor: colorAlert,
          backgroundColor: constants.backgroundColor,
        },

        success: {
          fontColor: colorSuccess,
          backgroundColor: constants.backgroundColor,
        },
      },

      underlined: {
        fontColor: fontColorMedium,
        backgroundColor: 'inherit',

        focus: {
          fontColor: constants.fontColor,
          backgroundColor: constants.backgroundColor,
        },

        disabled: {
          fontColor: fontColorMedium,
          backgroundColor: colorTransparent,
        },

        error: {
          fontColor: colorAlert,
          backgroundColor: constants.backgroundColor,
        },

        success: {
          fontColor: colorSuccess,
          backgroundColor: constants.backgroundColor,
        },
      },
    },
  },

  postfix: {
    lineHeight: 'inherit',

    size: {
      fontSize: 'inherit',
      paddingY: halfBaseModule,
      postfixSpacing: doubleBaseModule,
      postfixEdgeSpacing: {
        bordered: baseModule,
        underlined: 0,
      },

      dense: {
        fontSize: 'inherit',
        paddingY: halfBaseModule,
        postfixSpacing: doubleBaseModule,
        postfixEdgeSpacing: {
          bordered: baseModule,
          underlined: 0,
        },
      },

      fullWidth: {
        fontSize: 'inherit',
        paddingY: halfBaseModule,
        postfixSpacing: doubleBaseModule,
        postfixEdgeSpacing: {
          bordered: baseModule,
          underlined: 0,
        },
      },

      denseFullWidth: {
        fontSize: 'inherit',
        paddingY: halfBaseModule,
        postfixSpacing: doubleBaseModule,
        postfixEdgeSpacing: {
          bordered: baseModule,
          underlined: 0,
        },
      },
    },

    state: {
      bordered: {
        fontColor: fontColorMedium,
        backgroundColor: 'inherit',

        focus: {
          fontColor: constants.fontColor,
          backgroundColor: constants.backgroundColor,
        },

        disabled: {
          fontColor: fontColorMedium,
          backgroundColor: colorTransparent,
        },

        error: {
          fontColor: colorAlert,
          backgroundColor: constants.backgroundColor,
        },

        success: {
          fontColor: colorSuccess,
          backgroundColor: constants.backgroundColor,
        },
      },

      underlined: {
        fontColor: fontColorMedium,
        backgroundColor: 'inherit',

        focus: {
          fontColor: constants.fontColor,
          backgroundColor: constants.backgroundColor,
        },

        disabled: {
          fontColor: fontColorMedium,
          backgroundColor: colorTransparent,
        },

        error: {
          fontColor: colorAlert,
          backgroundColor: constants.backgroundColor,
        },

        success: {
          fontColor: colorSuccess,
          backgroundColor: constants.backgroundColor,
        },
      },
    },
  },
};
