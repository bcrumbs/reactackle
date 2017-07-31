'use strict';

import {
  baseModule,
  quarterBaseModule,
  halfBaseModule,
  oneAndHalfBaseModule,
  doubleBaseModule,
  twoAndHalfBaseModule,
  tripleBaseModule,
  fiveBaseModule,
  fourAndHalfBaseModule,
  fiveAndHalfBaseModule,
  sixBaseModule,
  sevenAndHalfBaseModule,
  tenBaseModule,
  colorWhite,
  radiusDefault,
  fontWeightNormal,
  fontWeightSemibold,
  fontSizeBody,
  fontSizeBody2,
  fontSizeHeadline,
  fontColorLight,
  fontColorMedium,
  bodyFontColor,
  bodyFontColorAlt,
} from 'reactackle-core';

export const sizeConstants = {
  paddingX: twoAndHalfBaseModule,
  paddingYLarge: twoAndHalfBaseModule,
  paddingY: oneAndHalfBaseModule,

  medium: {
    paddingX: fiveBaseModule,
    paddingY: tripleBaseModule,
    paddingYLarge: fiveBaseModule,
  },

  large: {
    paddingX: sevenAndHalfBaseModule,
    paddingY: fourAndHalfBaseModule,
    paddingYLarge: sevenAndHalfBaseModule,
  },

  xlarge: {
    paddingX: tenBaseModule,
    paddingY: sixBaseModule,
    paddingYLarge: tenBaseModule,
  },
};

export default {
  card: {
    borderRadius: radiusDefault,
    backgroundColor: colorWhite,
  },

  headerPrimary: {
    size: {
      default: {
        fontColor: bodyFontColor,
        fontColorInMedia: bodyFontColorAlt,
        fontSize: fontSizeHeadline,
        fontWeight: fontWeightNormal,
        lineHeight: 1.3,
        paddingX: sizeConstants.paddingX,
        paddingY: sizeConstants.paddingY,
        paddingYLarge: sizeConstants.paddingYLarge,
        similarElementsSpacing: baseModule,
      },

      medium: {
        fontColor: bodyFontColor,
        fontColorInMedia: bodyFontColorAlt,
        fontSize: fontSizeHeadline,
        fontWeight: fontWeightNormal,
        lineHeight: 1.3,
        paddingX: sizeConstants.medium.paddingX,
        paddingY: sizeConstants.medium.paddingY,
        paddingYLarge: sizeConstants.medium.paddingYLarge,
        similarElementsSpacing: baseModule,
      },

      large: {
        fontColor: bodyFontColor,
        fontColorInMedia: bodyFontColorAlt,
        fontSize: fontSizeHeadline,
        fontWeight: fontWeightNormal,
        lineHeight: 1.3,
        paddingX: sizeConstants.large.paddingX,
        paddingY: sizeConstants.large.paddingY,
        paddingYLarge: sizeConstants.large.paddingYLarge,
        similarElementsSpacing: baseModule,
      },

      xlarge: {
        fontColor: bodyFontColor,
        fontColorInMedia: bodyFontColorAlt,
        fontSize: fontSizeHeadline,
        fontWeight: fontWeightNormal,
        lineHeight: 1.3,
        paddingX: sizeConstants.xlarge.paddingX,
        paddingY: sizeConstants.xlarge.paddingY,
        paddingYLarge: sizeConstants.xlarge.paddingYLarge,
        similarElementsSpacing: baseModule,
      },
    },
  },

  subheaderPrimary: {
    size: {
      default: {
        fontColor: fontColorMedium,
        fontColorInMedia: fontColorLight,
        fontSize: fontSizeBody,
        fontWeight: fontWeightNormal,
        lineHeight: 1.3,
        subtitleTitleSpacing: halfBaseModule,
      },

      medium: {
        fontColor: fontColorMedium,
        fontColorInMedia: fontColorLight,
        fontSize: fontSizeBody,
        fontWeight: fontWeightNormal,
        lineHeight: 1.3,
        subtitleTitleSpacing: halfBaseModule,
      },

      large: {
        fontColor: fontColorMedium,
        fontColorInMedia: fontColorLight,
        fontSize: fontSizeBody,
        fontWeight: fontWeightNormal,
        lineHeight: 1.3,
        subtitleTitleSpacing: halfBaseModule,
      },

      xlarge: {
        fontColor: fontColorMedium,
        fontColorInMedia: fontColorLight,
        fontSize: fontSizeBody,
        fontWeight: fontWeightNormal,
        lineHeight: 1.3,
        subtitleTitleSpacing: halfBaseModule,
      },
    },
  },

  headerMedia: {
    size: {
      default: {
        width: tenBaseModule,
        height: tenBaseModule,
        marginX: sizeConstants.paddingX,
        marginY: sizeConstants.paddingY,
        titleMediaSpacing: doubleBaseModule,
      },

      medium: {
        width: tenBaseModule,
        height: tenBaseModule,
        marginX: sizeConstants.medium.paddingX,
        marginY: sizeConstants.medium.paddingY,
        titleMediaSpacing: doubleBaseModule,
      },

      large: {
        width: tenBaseModule,
        height: tenBaseModule,
        marginX: sizeConstants.large.paddingX,
        marginY: sizeConstants.large.paddingY,
        titleMediaSpacing: doubleBaseModule,
      },

      xlarge: {
        width: tenBaseModule,
        height: tenBaseModule,
        marginX: sizeConstants.xlarge.paddingX,
        marginY: sizeConstants.xlarge.paddingY,
        titleMediaSpacing: doubleBaseModule,
      },
    },
  },

  headerSecondary: {
    size: {
      default: {
        fontColor: bodyFontColor,
        fontColorInMedia: bodyFontColorAlt,
        fontSize: fontSizeBody2,
        fontWeight: fontWeightSemibold,
        lineHeight: 1.3,
        paddingX: sizeConstants.paddingX,
        paddingY: sizeConstants.paddingY,
      },

      medium: {
        fontColor: bodyFontColor,
        fontColorInMedia: bodyFontColorAlt,
        fontSize: fontSizeBody2,
        fontWeight: fontWeightSemibold,
        lineHeight: 1.3,
        paddingX: sizeConstants.medium.paddingX,
        paddingY: sizeConstants.medium.paddingY,
      },

      large: {
        fontColor: bodyFontColor,
        fontColorInMedia: bodyFontColorAlt,
        fontSize: fontSizeBody2,
        fontWeight: fontWeightSemibold,
        lineHeight: 1.3,
        paddingX: sizeConstants.large.paddingX,
        paddingY: sizeConstants.large.paddingY,
      },

      xlarge: {
        fontColor: bodyFontColor,
        fontSize: fontSizeBody2,
        fontWeight: fontWeightSemibold,
        lineHeight: 1.3,
        paddingX: sizeConstants.xlarge.paddingX,
        paddingY: sizeConstants.xlarge.paddingY,
      },
    },
  },

  subheaderSecondary: {
    size: {
      default: {
        fontColor: fontColorMedium,
        fontSize: fontSizeBody,
        fontWeight: fontWeightNormal,
        lineHeight: 1.3,
        subtitleTitleSpacing: halfBaseModule,
      },

      medium: {
        fontColor: fontColorMedium,
        fontSize: fontSizeBody,
        fontWeight: fontWeightNormal,
        lineHeight: 1.3,
        subtitleTitleSpacing: halfBaseModule,
      },

      large: {
        fontColor: fontColorMedium,
        fontSize: fontSizeBody,
        fontWeight: fontWeightNormal,
        lineHeight: 1.3,
        subtitleTitleSpacing: halfBaseModule,
      },

      xlarge: {
        fontColor: fontColorMedium,
        fontSize: fontSizeBody,
        fontWeight: fontWeightNormal,
        lineHeight: 1.3,
        subtitleTitleSpacing: halfBaseModule,
      },
    },
  },

  headerSecondaryImage: {
    size: {
      default: {
        width: fiveAndHalfBaseModule,
        height: fiveAndHalfBaseModule,
        imageTextSpacing: baseModule,
      },

      medium: {
        width: fiveAndHalfBaseModule,
        height: fiveAndHalfBaseModule,
        imageTextSpacing: baseModule,
      },

      large: {
        width: fiveAndHalfBaseModule,
        height: fiveAndHalfBaseModule,
        imageTextSpacing: baseModule,
      },

      xlarge: {
        width: fiveAndHalfBaseModule,
        height: fiveAndHalfBaseModule,
        imageTextSpacing: baseModule,
      },
    },
  },

  media: {
    overlayBackgroundColor: 'rgba(0, 0, 0, 0.25)',
  },

  content: {
    size: {
      default: {
        paddingX: sizeConstants.paddingX,
        paddingY: sizeConstants.paddingY,
        paddingYLarge: sizeConstants.paddingYLarge,
        similarElementsSpacing: baseModule,
      },

      medium: {
        paddingX: sizeConstants.medium.paddingX,
        paddingY: sizeConstants.medium.paddingY,
        paddingYLarge: sizeConstants.medium.paddingYLarge,
        similarElementsSpacing: baseModule,
      },

      large: {
        paddingX: sizeConstants.large.paddingX,
        paddingY: sizeConstants.large.paddingY,
        paddingYLarge: sizeConstants.large.paddingYLarge,
        similarElementsSpacing: baseModule,
      },

      xlarge: {
        paddingX: sizeConstants.xlarge.paddingX,
        paddingY: sizeConstants.xlarge.paddingY,
        paddingYLarge: sizeConstants.xlarge.paddingYLarge,
        similarElementsSpacing: baseModule,
      },
    },
  },

  contentText: {
    size: {
      default: {
        fontSize: fontSizeBody,
        lineHeight: 1.6,
        fontColor: bodyFontColor,
        fontWeight: fontWeightNormal,
        similarElementsSpacing: baseModule,
        fontColorInMedia: bodyFontColorAlt,
      },

      medium: {
        fontSize: fontSizeBody,
        lineHeight: 1.6,
        fontColor: bodyFontColor,
        fontWeight: fontWeightNormal,
        similarElementsSpacing: baseModule,
        fontColorInMedia: bodyFontColorAlt,
      },

      large: {
        fontSize: fontSizeBody,
        lineHeight: 1.6,
        fontColor: bodyFontColor,
        fontWeight: fontWeightNormal,
        similarElementsSpacing: baseModule,
        fontColorInMedia: bodyFontColorAlt,
      },

      xlarge: {
        fontSize: fontSizeBody,
        lineHeight: 1.6,
        fontColor: bodyFontColor,
        fontWeight: fontWeightNormal,
        similarElementsSpacing: baseModule,
        fontColorInMedia: bodyFontColorAlt,
      },
    },
  },

  actions: {
    size: {
      default: {
        itemsSpacingHorizontal: halfBaseModule,
        itemsSpacingVertical: quarterBaseModule,

        mainRegion: {
          paddingY: sizeConstants.paddingY,
          paddingX: sizeConstants.paddingX,
        },

        sideRegion: {
          paddingY: sizeConstants.paddingY,
          paddingX: sizeConstants.paddingX,
        },
      },

      medium: {
        itemsSpacingHorizontal: halfBaseModule,
        itemsSpacingVertical: quarterBaseModule,

        mainRegion: {
          paddingY: sizeConstants.paddingY,
          paddingX: sizeConstants.paddingX,
        },

        sideRegion: {
          paddingY: sizeConstants.paddingY,
          paddingX: sizeConstants.paddingX,
        },
      },

      large: {
        itemsSpacingHorizontal: halfBaseModule,
        itemsSpacingVertical: quarterBaseModule,

        mainRegion: {
          paddingY: sizeConstants.paddingY,
          paddingX: sizeConstants.paddingX,
        },

        sideRegion: {
          paddingY: sizeConstants.paddingY,
          paddingX: sizeConstants.paddingX,
        },
      },

      xlarge: {
        itemsSpacingHorizontal: halfBaseModule,
        itemsSpacingVertical: quarterBaseModule,

        mainRegion: {
          paddingY: sizeConstants.paddingY,
          paddingX: sizeConstants.paddingX,
        },

        sideRegion: {
          paddingY: sizeConstants.paddingY,
          paddingX: sizeConstants.paddingX,
        },
      },
    },
  },
};
