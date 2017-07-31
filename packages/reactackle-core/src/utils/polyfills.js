// touchevents
let isTouchDeviceCachedValue = null;
export const isTouch = function() {
  if (isTouchDeviceCachedValue !== null) return isTouchDeviceCachedValue;

  isTouchDeviceCachedValue =
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0 ||
    typeof document.body.ongesturestart === 'function';

  return isTouchDeviceCachedValue;
};
