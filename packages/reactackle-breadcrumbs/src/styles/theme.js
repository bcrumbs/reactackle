import React from 'react';
import { IconArrowDropDown, IconArrowChevronRight } from 'reactackle-icons';

import {
  bmodule,
  bodyFontColor,
  bodyFontColorAlt,
  fontSizeSmall,
  fontSizeBody,
  fontWeightNormal,
  fontWeightSemibold,
} from 'reactackle-core';

import { IconHome } from '../BreadcrumbsItem/styles/IconHome';

export default {
  item: {
    maxWidth: null,

    colorScheme: {
      light: {
        default: {
          color: bodyFontColorAlt,
          opacity: 1,

          hover: {
            color: null, // will take defaults if null
            opacity: null, // will take defaults if null
          },

          focus: {
            color: null, // will take hover if null
            opacity: null, // will take hover if null
          },
        },

        active: {
          color: bodyFontColorAlt,
          opacity: 0.7,

          hover: {
            color: null, // will take defaults if null
            opacity: null, // will take defaults if null
          },

          focus: {
            color: null, // will take hover if null
            opacity: null, // will take hover if null
          },
        },
      },

      dark: {
        default: {
          color: bodyFontColor,
          opacity: 1,

          hover: {
            color: null, // will take defaults if null
            opacity: null, // will take defaults if null
          },

          focus: {
            color: null, // will take hover if null
            opacity: null, // will take hover if null
          },
        },

        active: {
          color: bodyFontColor,
          opacity: 0.7,

          hover: {
            color: null, // will take defaults if null
            opacity: null, // will take defaults if null
          },

          focus: {
            color: null, // will take hover if null
            opacity: null, // will take hover if null
          },
        },
      },
    },

    textBox: {
      paddingY: bmodule(1),
      paddingX: 0,
    },

    title: {
      fontSize: fontSizeBody,
      lineHeight: 1.5,
      fontWeight: fontWeightSemibold,
      textTransform: 'none',

      colorScheme: {
        dark: {
          color: 'currentColor',
        },
        light: {
          color: 'currentColor',
        },
      },

      state: {
        default: {
          textDecoration: 'none',

          hover: {
            textDecoration: 'underline', // will take defaults if null
          },

          focus: {
            textDecoration: null, // will take hover if null
          },
        },

        active: {
          textDecoration: 'none',

          hover: {
            textDecoration: null, // will take defaults if null
          },

          focus: {
            textDecoration: null, // will take hover if null
          },
        },
      },
    },

    subtitle: {
      marginTop: 0,
      fontSize: fontSizeSmall,
      lineHeight: 1.5,
      fontWeight: fontWeightNormal,
      textTransform: 'none',

      colorScheme: {
        dark: {
          color: 'currentColor',
        },
        light: {
          color: 'currentColor',
        },
      },
    },

    icon: {
      height: 24,
      width: null, // will take height as a default
      imgHeight: 20, // will take height as a default
      imgWidth: null, // will take width as a default
      opacity: 0.5,
      marginLeft: bmodule(0.5),
      marginY: 0,
      alignSelf: 'center', // One of 'top', 'center', 'bottom'

      colorScheme: {
        dark: {
          color: 'currentColor',
        },
        light: {
          color: 'currentColor',
        },
      },
    },

    separator: {
      marginY: 0,
      marginX: bmodule(1),
      height: 24,
      width: null, // will take height as a default
      imgHeight: 20, // will take height as a default
      imgWidth: null, // will take width as a default
      fontSize: fontSizeBody,
      opacity: 0.5,
      iconSource: <IconArrowChevronRight size="custom" color="currentColor" />,

      colorScheme: {
        dark: {
          color: bodyFontColor,
        },
        light: {
          color: bodyFontColorAlt,
        },
      },
    },

    iconHome: {
      source: <IconHome size="custom" color="currentColor" />,
      marginY: 8,
      marginRight: bmodule(0.5),
      alignSelf: 'top', // One of 'top', 'center', 'bottom'
      height: 16,
      width: null, // will take height as a default
      imgHeight: null, // will take height as a default
      imgWidth: null, // will take width as a default
      opacity: 0.5,

      colorScheme: {
        dark: {
          color: 'currentColor',
        },
        light: {
          color: 'currentColor',
        },
      },
    },

    iconMenuSource: <IconArrowDropDown size="custom" color="currentColor" />,
  },

  navigation: {
    margin: bmodule(1),
  },
};
