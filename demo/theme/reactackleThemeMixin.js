'use strict';

import {
  basicColors,
  themeColors,
  paletteBlueGrey,
} from './constants';

import { baseModule } from './styleHelpers';

const sidebarConstants = {
  toggleBgColor: 'rgba(0, 0, 0, 0.1)',
  toggleHoverBgColor: 'rgba(0, 0, 0, 0.15)',
};

export default {
  contentWidth: 960,
  colorBorder: paletteBlueGrey[100],
  
  color: {
    main: themeColors.main,
    mainFgTextColor: basicColors.white,
    secondary: themeColors.secondary,
    secondaryFgTextColor: basicColors.white,
  },
  
  fontColor: {
    light: paletteBlueGrey[300],
    medium: paletteBlueGrey[500],
  },
  
  components: {
    sidebar: {
      sidebar: {
        backgroundColor: themeColors.secondary,
      },
      toggleButton: {
        style: {
          collapsed: {
            backgroundColor: sidebarConstants.toggleBgColor,
    
            hover: {
              backgroundColor: sidebarConstants.toggleHoverBgColor,
            },
    
            focus: {
              backgroundColor: sidebarConstants.toggleHoverBgColor,
            },
          },
  
          expanded: {
            backgroundColor: sidebarConstants.toggleBgColor,
    
            hover: {
              backgroundColor: sidebarConstants.toggleHoverBgColor,
            },
    
            focus: {
              backgroundColor: sidebarConstants.toggleHoverBgColor,
            },
          },
        },
      },
    },
    header: {
      region: {
        size: {
          paddingX: baseModule(1),
  
          blank: {
            paddingX: baseModule(1),
          },
        },
      },
    },
    container: {
      paddingX: baseModule(3),

      breakpoints: [
        {
          breakpoint: ({ breakpoints }) => breakpoints.medium,
          paddingY: baseModule(3),
          paddingX: baseModule(3),
        },
        {
          breakpoint: ({ breakpoints }) => breakpoints.large,
          paddingY: baseModule(3),
          paddingX: baseModule(3),
        },
      ],
    },
  },
};
