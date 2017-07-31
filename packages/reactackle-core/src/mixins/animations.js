import { keyframes } from 'styled-components';

const Spin = keyframes`  
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }  
`;

const Bounce = keyframes`
  from, 20%, 53%, 80%, 100% {
    -timoutg-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    -timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    transform: translate3d(0, -30px, 0);
  }

  70% {
    -timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`;

const Flash = keyframes`
  from, 50%, 100% {
    opacity: 1;
  }

  25%, 75% {
    opacity: 0;
  }
`;

const Pulse = keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  100% {
    transform: scale3d(1, 1, 1);
  }
`;

const RubberBand = keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }
  
  30% {
    transform: scale3d(1.25, 0.75, 1);
  }
  
  40% {
    transform: scale3d(0.75, 1.25, 1);
  }
  
  50% {
    transform: scale3d(1.15, 0.85, 1);
  }
  
  65% {
    transform: scale3d(.95, 1.05, 1);
  }
  
  75% {
    transform: scale3d(1.05, .95, 1);
  }
  
  100% {
    transform: scale3d(1, 1, 1);
  }
`;

const Shake = keyframes`
  from, 100% {
    transform: translate3d(0, 0, 0);
  }

  10%, 30%, 50%, 70%, 90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%, 40%, 60%, 80% {
    transform: translate3d(10px, 0, 0);
  }
`;

const Swing = keyframes`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  100% {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;

const Tada = keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%, 20% {
    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
  }

  30%, 50%, 70%, 90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%, 60%, 80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  100% {
    transform: scale3d(1, 1, 1);
  }
`;

const Wobble = keyframes`
  from {
    transform: none;
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  100% {
    transform: none;
  }
`;

const Jello = keyframes`
  from, 11.1%, 100% {
    transform: none;
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;

const BounceIn = keyframes`
  from, 20%, 40%, 60%, 80%, 100% {
    -timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(.9, .9, .9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(.97, .97, .97);
  }

  100% {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;

const BounceInDown = keyframes`
  from, 60%, 75%, 90%, 100% {
    -timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0);
  }

  75% {
    transform: translate3d(0, -10px, 0);
  }

  90% {
    transform: translate3d(0, 5px, 0);
  }

  100% {
    transform: none;
  }
`;

const BounceInLeft = keyframes`
  from, 60%, 75%, 90%, 100% {
    -timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0);
  }

  75% {
    transform: translate3d(0, -10px, 0);
  }

  90% {
    transform: translate3d(0, 5px, 0);
  }

  100% {
    transform: none;
  }
`;

const BounceInRight = keyframes`
  from, 60%, 75%, 90%, 100% {
    -timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0);
  }

  75% {
    transform: translate3d(10px, 0, 0);
  }

  90% {
    transform: translate3d(-5px, 0, 0);
  }

  100% {
    transform: none;
  }
`;

const BounceInUp = keyframes`
  from, 60%, 75%, 90%, 100% {
    -timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
  }

  75% {
    transform: translate3d(0, 10px, 0);
  }

  90% {
    transform: translate3d(0, -5px, 0);
  }

  100% {
    transform: translate3d(0, 0, 0);
  }
`;

const BounceOut = keyframes`
  20% {
    transform: scale3d(.9, .9, .9);
  }

  50%, 55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  100% {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }
`;

const BounceOutDown = keyframes`
  20% {
    transform: translate3d(0, 10px, 0);
  }

  40%, 45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
  }

  100% {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`;

const BounceOutLeft = keyframes`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0);
  }

  100% {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`;

const BounceOutRight = keyframes`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0);
  }

  100% {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`;

const BounceOutUp = keyframes`
  20% {
    transform: translate3d(0, -10px, 0);
  }

  40%, 45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0);
  }

  100% {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;

const FadeIn = keyframes`
  from {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const FadeInDownSmall = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -20px, 0);
  }

  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const FadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -80px, 0);
  }

  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const FadeInDownBig = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  100% {
    opacity: 1;
    transform: none;
  }
`;

const FadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-10%, 0, 0);
  }

  100% {
    opacity: 1;
    transform: none;
  }
`;

const FadeInLeftBig = keyframes`
  from {
    opacity: 0;
    ransform: translate3d(-2000px, 0, 0);
  }

  100% {
    opacity: 1;
    transform: none;
  }  
`;

const FadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translate3d(20%, 0, 0);
  }

  100% {
    opacity: 1;
    transform: none;
  }
`;

const FadeInRightBig = keyframes`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  100% {
    opacity: 1;
    transform: none;
  }
`;

const FadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  100% {
    opacity: 1;
    transform: none;
  }
`;

const FadeInUpBig = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  100% {
    opacity: 1;
    transform: none;
  }
`;

const FadeOut = keyframes`
  from {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

const FadeOutDown = keyframes`
  from {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`;

const FadeOutDownBig = keyframes`
  from {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`;

const FadeOutLeft = keyframes`
  from {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`;

const FadeOutLeftBig = keyframes`
  from {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`;

const FadeOutRight = keyframes`
  from {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`;

const FadeOutRightBig = keyframes`
  from {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`;

const FadeOutUp = keyframes`
  from {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translate3d(0, -80px, 0);
  }
`;

const FadeOutUpBig = keyframes`
  from {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;

const Flip = keyframes`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
    -timing-function: ease-out;
  }

  40% {
    transform:
      perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
    -timing-function: ease-out;
  }

  50% {
    transform:
      perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
    -timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(.95, .95, .95);
    -timing-function: ease-in;
  }

  100% {
    transform: perspective(400px);
    -timing-function: ease-in;
  }
`;

const FlipInX = keyframes`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    -timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    -timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  100% {
    transform: perspective(400px);
  }
`;

const FlipInY = keyframes`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    -timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    -timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  100% {
    transform: perspective(400px);
  }
`;

const FlipOutX = keyframes`
  from {
    transform: perspective(400px);
  }

  30% {
  transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  100% {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;

const FlipOutY = keyframes`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  100% {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;

const LightSpeedIn = keyframes`
  from {
    transform: translate3d(100%, 0, 0) skewX(-30deg);
    opacity: 0;
  }

  60% {
    transform: skewX(20deg);
    opacity: 1;
  }

  80% {
    transform: skewX(-5deg);
    opacity: 1;
  }

  100% {
    transform: none;
    opacity: 1;
  }
`;

const LightSpeedOut = keyframes`
  from {
    opacity: 1;
  }

  100% {
    transform: translate3d(100%, 0, 0) skewX(30deg);
    opacity: 0;
  }
`;

const RotateIn = keyframes`
  from {
    transform-origin: center;
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  100% {
    transform-origin: center;
    transform: none;
    opacity: 1;
  }
`;

const RotateInDownLeft = keyframes`
  from {
    transform-origin: left bottom;
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  100% {
    transform-origin: left bottom;
    transform: none;
    opacity: 1;
  }
`;

const RotateInDownRight = keyframes`
  from {
    transform-origin: right bottom;
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  100% {
    transform-origin: right bottom;
    transform: none;
    opacity: 1;
  }
`;

const RotateInUpLeft = keyframes`
  from {
    transform-origin: left bottom;
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  100% {
    transform-origin: left bottom;
    transform: none;
    opacity: 1;
  }
`;

const RotateInUpRight = keyframes`
  from {
    transform-origin: right bottom;
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  100% {
    transform-origin: right bottom;
    transform: none;
    opacity: 1;
  }
`;

const RotateOut = keyframes`
  from {
    transform-origin: center;
    opacity: 1;
  }

  100% {
    transform-origin: center;
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;

const RotateOutDownLeft = keyframes`
  from {
    transform-origin: left bottom;
    opacity: 1;
  }

  100% {
    transform-origin: left bottom;
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;

const RotateOutDownRight = keyframes`
  from {
    transform-origin: right bottom;
    opacity: 1;
  }

  100% {
    transform-origin: right bottom;
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;

const RotateOutUpLeft = keyframes`
  from {
    transform-origin: left bottom;
    opacity: 1;
  }

  100% {
    transform-origin: left bottom;
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;

const RotateOutUpRight = keyframes`
  from {
    transform-origin: right bottom;
    opacity: 1;
  }

  100% {
    transform-origin: right bottom;
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;

const Hinge = keyframes`
  0% {
    transform-origin: top left;
    -timing-function: ease-in-out;
  }

  20%, 60% {
    transform: rotate3d(0, 0, 1, 80deg);
    transform-origin: top left;
    -timing-function: ease-in-out;
  }

  40%, 80% {
    transform: rotate3d(0, 0, 1, 60deg);
    transform-origin: top left;
    -timing-function: ease-in-out;
    opacity: 1;
  }

  100% {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;

const RollIn = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  100% {
    opacity: 1;
    transform: none;
  }
`;

const RollOut = keyframes`
  from {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;

const ZoomIn = keyframes`
  from {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }

  50% {
    opacity: 1;
  }
`;

const ZoomInDown = keyframes`
  from {
    opacity: 0;
    transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
    -timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  60% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    -timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
`;

const ZoomInLeft = keyframes`
  from {
    opacity: 0;
    transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);
    -timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  60% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);
    -timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
`;

const ZoomInRight = keyframes`
  from {
    opacity: 0;
    transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
    -timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  60% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
    -timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
`;

const ZoomInUp = keyframes`
  from {
    opacity: 0;
    transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);
    -timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  60% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
    -timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
`;

const ZoomOut = keyframes`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }
`;

const ZoomOutDown = keyframes`
  40% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
    -timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  100% {
    opacity: 0;
    transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);
    transform-origin: center bottom;
    -timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
`;

const ZoomOutLeft = keyframes`
  40% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);
  }

  100% {
    opacity: 0;
    transform: scale(.1) translate3d(-2000px, 0, 0);
    transform-origin: left center;
  }
`;

const ZoomOutRight = keyframes`
  40% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);
  }

  100% {
    opacity: 0;
    transform: scale(.1) translate3d(2000px, 0, 0);
    transform-origin: right center;
  }
`;

const ZoomOutUp = keyframes`
  40% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    -timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  100% {
    opacity: 0;
    transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);
    transform-origin: center bottom;
    -timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
`;

const SlideInDown = keyframes`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  100% {
    transform: translate3d(0, 0, 0);
  }
`;

const SlideInLeft = keyframes`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  100% {
    transform: translate3d(0, 0, 0);
  }
`;

const SlideInRight = keyframes`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  100% {
    transform: translate3d(0, 0, 0);
  }
`;

const SlideInUp = keyframes`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  100% {
    transform: translate3d(0, 0, 0);
  }
`;

const SlideOutDown = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }

  90% {
    opacity: 1;
  }

  100% {
    visibility: hidden;
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`;

const SlideOutLeft = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }

  100% {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;

const SlideOutRight = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }

  100% {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;

const SlideOutUp = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }

  100% {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;

const Hide = keyframes`
  from {
    opacity: 1;
  }

  80% {
    opacity: 0;
  }

  100% {
    display: none;
  }
`;

export const animations = {
  bounce: Bounce,
  bounceIn: BounceIn,
  bounceInDown: BounceInDown,
  bounceInLeft: BounceInLeft,
  bounceInRight: BounceInRight,
  bounceInUp: BounceInUp,
  bounceOut: BounceOut,
  bounceOutDown: BounceOutDown,
  bounceOutLeft: BounceOutLeft,
  bounceOutRight: BounceOutRight,
  bounceOutUp: BounceOutUp,
  fadeIn: FadeIn,
  fadeInDown: FadeInDown,
  fadeInDownSmall: FadeInDownSmall,
  fadeInDownBig: FadeInDownBig,
  fadeInLeft: FadeInLeft,
  fadeInLeftBig: FadeInLeftBig,
  fadeInRight: FadeInRight,
  fadeInRightBig: FadeInRightBig,
  fadeInUp: FadeInUp,
  fadeInUpBig: FadeInUpBig,
  fadeOut: FadeOut,
  fadeOutDown: FadeOutDown,
  fadeOutDownBig: FadeOutDownBig,
  fadeOutLeft: FadeOutLeft,
  fadeOutLeftBig: FadeOutLeftBig,
  fadeOutRight: FadeOutRight,
  fadeOutRightBig: FadeOutRightBig,
  fadeOutUp: FadeOutUp,
  fadeOutUpBig: FadeOutUpBig,
  flash: Flash,
  flip: Flip,
  flipInX: FlipInX,
  flipInY: FlipInY,
  flipOutX: FlipOutX,
  flipOutY: FlipOutY,
  hide: Hide,
  hinge: Hinge,
  jello: Jello,
  lightSpeedIn: LightSpeedIn,
  lightSpeedOut: LightSpeedOut,
  pulse: Pulse,
  rotateIn: RotateIn,
  rotateInDownLeft: RotateInDownLeft,
  rotateInDownRight: RotateInDownRight,
  rotateInUpLeft: RotateInUpLeft,
  rotateInUpRight: RotateInUpRight,
  rotateOut: RotateOut,
  rotateOutDownLeft: RotateOutDownLeft,
  rotateOutDownRight: RotateOutDownRight,
  rotateOutUpLeft: RotateOutUpLeft,
  rotateOutUpRight: RotateOutUpRight,
  rollIn: RollIn,
  rollOut: RollOut,
  rubberBand: RubberBand,
  shake: Shake,
  slideInDown: SlideInDown,
  slideInLeft: SlideInLeft,
  slideInRight: SlideInRight,
  slideInUp: SlideInUp,
  slideOutDown: SlideOutDown,
  slideOutLeft: SlideOutLeft,
  slideOutRight: SlideOutRight,
  slideOutUp: SlideOutUp,
  spin: Spin,
  swing: Swing,
  tada: Tada,
  wobble: Wobble,
  zoomIn: ZoomIn,
  zoomInDown: ZoomInDown,
  zoomInLeft: ZoomInLeft,
  zoomInRight: ZoomInRight,
  zoomInUp: ZoomInUp,
  zoomOut: ZoomOut,
  zoomOutDown: ZoomOutDown,
  zoomOutLeft: ZoomOutLeft,
  zoomOutRight: ZoomOutRight,
  zoomOutUp: ZoomOutUp,
};
