import React  from 'react';

import {
  bmodule,
  radiusDefault,
  breakpointMedium,
  colorWhite,
  colorTransparent,
  colorSecondary,
  colorError,
  colorSuccess,
  colorPaletteGrey100,
  colorPaletteGrey300,
  fontSizeSmall,
  fontWeightNormal,
  fontColorMedium,
  fontSizeBody,
  bodyFontColor,
  bodyLineHeight,
} from 'reactackle-core';

import { IconArrowDropDown } from 'reactackle-icons';

const constants = {
  themeColor: colorSecondary,
  fontColor: bodyFontColor,
  backgroundColor: colorTransparent,
  borderStyle: 'solid',

  size: {
    paddingY: bmodule(1),
    paddingX: bmodule(1),
    fontSize: fontSizeBody,
    lineHeight: 1.5, // Only number accepted

    dense: {
      paddingY: bmodule(0.5),
      paddingX: bmodule(0.5),
      fontSize: fontSizeBody,
      lineHeight: 1.5, // Only number accepted
    },

    fullWidth: {
      paddingY: bmodule(1.5),
      paddingX: bmodule(1.5),
      fontSize: fontSizeBody,
      lineHeight: 1.5, // Only number accepted
    },

    denseFullWidth: {
      paddingY: bmodule(1),
      paddingX: bmodule(1),
      fontSize: fontSizeBody,
      lineHeight: 1.5, // Only number accepted
    },
  },

  underlined: {
    paddingY: bmodule(1),
  },

  iconOuter: {
    opacity: 0.54,
  },

  iconInner: {
    opacity: 0.46,
  },
};

export default {
  selectBox: {
    themeColor: constants.themeColor,
    placeholderFontColor: fontColorMedium,
    minWidth: 120,

    style: {
      fontColor: constants.fontColor,
      backgroundColor: constants.backgroundColor,
      borderColor: colorPaletteGrey300,
      borderStyle: constants.borderStyle,

      hover: {
        fontColor: constants.fontColor,
        backgroundColor: 'rgba(0,0,0,0.03)',
        borderColor: constants.themeColor,
        borderStyle: constants.borderStyle,
      },

      focus: {
        fontColor: constants.fontColor,
        backgroundColor: colorWhite,
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
        fontColor: colorError,
        backgroundColor: constants.backgroundColor,
        borderColor: colorError,
        borderStyle: constants.borderStyle,

        hover: {
          fontColor: colorError,
          backgroundColor: 'rgba(0,0,0,0.03)',
          borderColor: colorError,
          borderStyle: constants.borderStyle,
        },

        focus: {
          fontColor: colorError,
          backgroundColor: 'rgba(0,0,0,0.03)',
          borderColor: colorError,
          borderStyle: constants.borderStyle,
        },
      },

      success: {
        fontColor: constants.fontColor,
        backgroundColor: constants.backgroundColor,
        borderColor: colorSuccess,
        borderStyle: constants.borderStyle,

        hover: {
          fontColor: constants.fontColor,
          backgroundColor: 'rgba(0,0,0,0.03)',
          borderColor: colorSuccess,
          borderStyle: constants.borderStyle,
        },

        focus: {
          fontColor: constants.fontColor,
          backgroundColor: 'rgba(0,0,0,0.03)',
          borderColor: colorSuccess,
          borderStyle: constants.borderStyle,
        },
      },
    },

    bordered: {
      borderWidth: 1,
      borderRadius: radiusDefault,

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
    },

    underlined: {
      borderWidth: 2,
      borderRadius: 0,

      size: {
        paddingY: constants.size.paddingY,
        paddingX: 0,
        lineHeight: constants.size.lineHeight,
        fontSize: constants.size.fontSize,

        dense: {
          paddingY: constants.size.dense.paddingY,
          paddingX: 0,
          lineHeight: constants.size.lineHeight,
          fontSize: constants.size.dense.fontSize,
        },

        fullWidth: {
          paddingY: constants.size.fullWidth.paddingY,
          paddingX: 0,
          lineHeight: constants.size.lineHeight,
          fontSize: constants.size.fullWidth.fontSize,
        },

        denseFullWidth: {
          paddingY: constants.size.denseFullWidth.paddingY,
          paddingX: 0,
          lineHeight: constants.size.lineHeight,
          fontSize: constants.size.denseFullWidth.fontSize,
        },
      },
    },
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
          labelSelectSpacing: bmodule(1),

          dense: {
            labelSelectSpacing: bmodule(0.5),
          },

          fullWidth: {
            labelSelectSpacing: bmodule(0.5),
          },

          denseFullWidth: {
            labelSelectSpacing: bmodule(0.5),
          },
        },

        underlined: {
          labelSelectSpacing: bmodule(0.5),

          dense: {
            labelSelectSpacing: bmodule(0.5),
          },

          fullWidth: {
            labelSelectSpacing: bmodule(0.5),
          },

          denseFullWidth: {
            labelSelectSpacing: bmodule(0.5),
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
          labelSelectSpacing: bmodule(1),

          dense: {
            labelSelectSpacing: bmodule(1),
          },

          fullWidth: {
            labelSelectSpacing: bmodule(1),
          },

          denseFullWidth: {
            labelSelectSpacing: bmodule(1),
          },
        },
        underlined: {
          labelSelectSpacing: bmodule(1),

          dense: {
            labelSelectSpacing: bmodule(1),
          },

          fullWidth: {
            labelSelectSpacing: bmodule(1),
          },

          denseFullWidth: {
            labelSelectSpacing: bmodule(1),
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

    labelTooltipSpacing: bmodule(1),
  },

  icon: {
    iconTextSpacing: bmodule(0.5),
    // eslint-disable-next-line react/display-name
    src: () => <IconArrowDropDown size="custom" color="inherit" />,

    state: {
      color: 'inherit',
      opacity: constants.iconInner.opacity,

      disabled: {
        color: 'inherit',
        opacity: 0.35,
      },

      focus: {
        color: 'inherit',
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
      imgSize: 30,

      dense: {
        boxSize: base =>
          constants.size.dense.fontSize(base) *
            constants.size.dense.lineHeight +
          constants.size.dense.paddingY(base) * 2,
        imgSize: 26,
      },

      fullWidth: {
        boxSize: base =>
          constants.size.fullWidth.fontSize(base) *
            constants.size.fullWidth.lineHeight +
          constants.size.fullWidth.paddingY(base) * 2,
        imgSize: 30,
      },

      denseFullWidth: {
        boxSize: base =>
          constants.size.denseFullWidth.fontSize(base) *
            constants.size.denseFullWidth.lineHeight +
          constants.size.denseFullWidth.paddingY(base) * 2,
        imgSize: 30,
      },
    },
  },

  message: {
    messageSelectSpacing: bmodule(1),
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
        fontColor: colorError,
      },

      success: {
        fontColor: colorSuccess,
      },
    },
  },

  optionsList: {
    borderRadius: radiusDefault,
    backgroundColor: colorWhite,
    minWidth: '5em',
    maxWidth: '14em',

    size: {
      paddingY: bmodule(1),
      paddingX: 0,

      dense: {
        paddingY: bmodule(1),
        paddingX: 0,
      },

      fullWidth: {
        paddingY: bmodule(1),
        paddingX: 0,
      },

      denseFullWidth: {
        paddingY: bmodule(1),
        paddingX: 0,
      },
    },
  },

  option: {
    size: {
      paddingY: bmodule(1),
      paddingX: bmodule(2),
      lineHeight: constants.size.lineHeight,
      fontSize: constants.size.fontSize,

      dense: {
        paddingY: bmodule(1),
        paddingX: bmodule(2),
        lineHeight: constants.size.lineHeight,
        fontSize: constants.size.dense.fontSize,
      },

      fullWidth: {
        paddingY: bmodule(1),
        paddingX: bmodule(2),
        lineHeight: constants.size.lineHeight,
        fontSize: constants.size.fullWidth.fontSize,
      },

      denseFullWidth: {
        paddingY: bmodule(1),
        paddingX: bmodule(2),
        lineHeight: constants.size.lineHeight,
        fontSize: constants.size.denseFullWidth.fontSize,
      },
    },

    style: {
      fontColor: constants.fontColor,
      backgroundColor: colorTransparent,

      hover: {
        fontColor: constants.fontColor,
        backgroundColor: colorPaletteGrey100,
      },

      focus: {
        fontColor: constants.fontColor,
        backgroundColor: colorPaletteGrey100,
      },

      disabled: {
        fontColor: fontColorMedium,
        backgroundColor: colorTransparent,
      },

      selected: {
        fontColor: constants.themeColor,
        backgroundColor: colorTransparent,
      },
    },
  },
};
