import {
  halfBaseModule,
  baseModule,
  oneAndHalfBaseModule,
  doubleBaseModule,
  colorBorder,
  fontSizeSmall,
  fontSizeBody,
  fontWeightSemibold,
  colorPaletteGrey500,
  bodyFontColor,
  bodyFontColorAlt,
} from 'reactackle-core';

export default {
  list: {
    paddingY: baseModule,
    paddingX: 0,
  },

  listTitle: {
    paddingTop: baseModule,
    paddingBottom: null, // will take paddingTop if null
    paddingX: null, // will take item's paddingX if null
    fontSize: fontSizeSmall,
    fontWeight: fontWeightSemibold,
    fontColor: colorPaletteGrey500,
    lineHeight: 1.3,
    textTransform: 'uppercase',
  },

  item: {
    paddingY: baseModule,
    paddingX: doubleBaseModule,
    levelOffset: oneAndHalfBaseModule,
    minHeight: 0,
    fontSize: fontSizeBody,
    lineHeight: 1.25,

    colorScheme: {
      dark: {
        backgroundColor: 'transparent',
        backgroundColorHover: 'rgba(0,0,0,0.07)', // If null will take 'backgroundColor' as a default
        backgroundColorFocus: 'rgba(0,0,0,0.1)', // If null will take 'backgroundColor' as a default
        backgroundColorActive: 'rgba(0,0,0,0.1)', // If null will take 'backgroundColor' as a default

        color: bodyFontColor,
        colorHover: null, // If null will take 'color' as a default
        colorFocus: null, // If null will take 'color' as a default
        colorActive: null, // If null will take 'color' as a default
      },

      light: {
        backgroundColor: 'transparent',
        backgroundColorHover: 'rgba(255,255,255,0.07)', // If null will take 'backgroundColor' as a default
        backgroundColorFocus: 'rgba(255,255,255,0.1)', // If null will take 'backgroundColor' as a default
        backgroundColorActive: 'rgba(255,255,255,0.1)', // If null will take 'backgroundColor' as a default

        color: bodyFontColorAlt,
        colorHover: null, // If null will take 'color' as a default
        colorFocus: null, // If null will take 'color' as a default
        colorActive: null, // If null will take 'color' as a default
      },
    },

    textSecondary: {
      fontSize: fontSizeSmall,
      lineHeight: 1.25,
      spacingTop: halfBaseModule,

      colorScheme: {
        dark: {
          default: {
            color: colorPaletteGrey500,
            opacity: 1,
          },

          active: {
            color: null, // If null will take 'color' as a default
            opacity: null, // If null will take 'opacity' as a default
          },
        },

        light: {
          default: {
            color: colorPaletteGrey500,
            opacity: 1,
          },

          active: {
            color: null, // If null will take 'color' as a default
            opacity: null, // If null will take 'opacity' as a default
          },
        },
      },
    },

    iconLeft: {
      height: 24,
      width: null,  // If null will take 'height' as a default
      imgHeight: 20,  // If null will take 'height' as a default
      imgWidth: null,  // If null will take 'imgHeight' as a default
      marginLeft: doubleBaseModule,
      marginRight: 0,

      colorScheme: {
        dark: {
          default: {
            color: colorPaletteGrey500,
            opacity: 1,
          },

          active: {
            color: null, // If null will take default 'color' as a default
            opacity: null, // If null will take default 'opacity' as a default
          },
        },

        light: {
          default: {
            color: colorPaletteGrey500,
            opacity: 1,
          },

          active: {
            color: null, // If null will take default 'color' as a default
            opacity: null, // If null will take default 'opacity' as a default
          },
        },
      },
    },

    iconRight: {
      height: 24,
      width: null,  // If null will take 'height' as a default
      imgHeight: 20,  // If null will take 'height' as a default
      imgWidth: null,  // If null will take 'imgHeight' as a default
      marginLeft: baseModule,
      marginRight: doubleBaseModule,

      colorScheme: {
        dark: {
          default: {
            color: colorPaletteGrey500,
            opacity: 1,
          },

          active: {
            color: null, // If null will take default 'color' as a default
            opacity: null, // If null will take default 'opacity' as a default
          },
        },

        light: {
          default: {
            color: colorPaletteGrey500,
            opacity: 1,
          },

          active: {
            color: null, // If null will take default 'color' as a default
            opacity: null, // If null will take default 'opacity' as a default
          },
        },
      },
    },

    image: {
      width: 40,
      height: null,  // If null will take 'width' as a default
      marginLeft: baseModule,
      marginRight: doubleBaseModule,
      borderRadius: '50%',
    },

    expandButton: {
      marginLeft: 0,
      marginRight: 0,
      borderRadius: '50%',

      icon: {
        height: 24,
        width: null,  // If null will take 'height' as a default
        imgHeight: 20,  // If null will take 'height' as a default
        imgWidth: null,  // If null will take 'imgHeight' as a default
      },

      colorScheme: {
        dark: {
          default: {
            backgroundColor: 'transparent',
            color: colorPaletteGrey500,
            opacity: 1,

            hover: {
              backgroundColor: 'rgba(0,0,0,0.07)', // If null will take
              // 'backgroundColor' as a default
              color: null, // If null will take 'color' as a default
              opacity: null, // If null will take 'opacity' as a default
            },

            focus: {
              backgroundColor: 'rgba(0,0,0,0.1)', // If null will take 'backgroundColor' as a default
              color: null, // If null will take 'color' as a default
              opacity: null, // If null will take 'opacity' as a default
            },
          },

          active: {
            backgroundColor: null, // If null will take 'backgroundColor' as a default
            color: null, // If null will take 'color' as a default
            opacity: null, // If null will take 'opacity' as a default

            hover: {
              backgroundColor: null, // If null will take 'backgroundColor' as a default
              color: null, // If null will take 'color' as a default
              opacity: null, // If null will take 'opacity' as a default
            },

            focus: {
              backgroundColor: null, // If null will take 'backgroundColor' as a default
              color: null, // If null will take 'color' as a default
              opacity: null, // If null will take 'opacity' as a default
            },
          },
        },

        light: {
          default: {
            backgroundColor: 'transparent', // If null will take
            // 'backgroundColor' as a default
            color: colorPaletteGrey500,
            opacity: 1,

            hover: {
              backgroundColor: 'rgba(255,255,255,0.07)', // If null will take
              // 'backgroundColor' as a default
              color: null, // If null will take 'color' as a default
              opacity: null, // If null will take 'opacity' as a default
            },

            focus: {
              backgroundColor: 'rgba(255,255,255,0.1)', // If null will take 'backgroundColor' as a default
              color: null, // If null will take 'color' as a default
              opacity: null, // If null will take 'opacity' as a default
            },
          },

          active: {
            backgroundColor: null, // If null will take 'backgroundColor' as a default
            color: null, // If null will take 'color' as a default
            opacity: null, // If null will take 'opacity' as a default

            hover: {
              backgroundColor: null, // If null will take 'backgroundColor' as a default
              color: null, // If null will take 'color' as a default
              opacity: null, // If null will take 'opacity' as a default
            },

            focus: {
              backgroundColor: null, // If null will take 'backgroundColor' as a default
              color: null, // If null will take 'color' as a default
              opacity: null, // If null will take 'opacity' as a default
            },
          },
        },
      },
    },

    addonRight: {
      marginLeft: baseModule,
      marginRight: doubleBaseModule,
    },

    textRight: {
      marginLeft: baseModule,
      marginRight: doubleBaseModule,
      fontSize: fontSizeSmall,
      lineHeight: 1.2,

      colorScheme: {
        dark: {
          default: {
            color: colorPaletteGrey500,
            opacity: 1,
          },

          active: {
            color: null, // If null will take 'color' as a default
            opacity: null, // If null will take 'opacity' as a default
          },
        },

        light: {
          default: {
            color: colorPaletteGrey500,
            opacity: 1,
          },

          active: {
            color: null, // If null will take 'color' as a default
            opacity: null, // If null will take 'opacity' as a default
          },
        },
      },
    },
  },

  separator: {
    thickness: 1,
    color: colorBorder,
    style: 'solid',
  },
};
