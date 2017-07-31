/**
 * @author Dmitriy Bizyaev
 */

'use strict';

export const noop = () => {};

export const returnNull = () => null;

export const returnTrue = () => true;

export const getKey = (item, index) =>
  item && typeof item.id !== 'undefined' ? item.id : index;

export const isUndef = value => typeof value === 'undefined';

export const isFunction = value => typeof value === 'function';

export const isObject = value =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

export const isValidPositiveNumberOrZero = num =>
  Number.isFinite(num) && num >= 0;
