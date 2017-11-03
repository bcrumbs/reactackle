'use strict';

import { isValidElement } from 'react';
import mapValues from 'lodash.mapvalues';
import pick from 'lodash.pick';
import merge from 'lodash.merge';
import { isUndef, isFunction, isObject } from './utils/misc';
import defaultBase from './base';
import { createBroadcast } from './utils/create-broadcast';

const baseKeys = Object.keys(defaultBase);

const buildByBlueprint = (blueprint, base, mixin = {}) =>
  mapValues(blueprint, (value, key) => {
    if (isValidElement(value)) return value;

    if (isObject(value)) return buildByBlueprint(value, base, mixin[key]);

    const current = isUndef(mixin[key]) ? value : mixin[key];

    if (isFunction(current)) return current(base);

    if (Array.isArray(current))
      return current.map(item => buildByBlueprint(item, base));

    return current;
  });

const defaultThemeBlueprint = {
  ...defaultBase,
  components: {},
};

export const defaultTheme = {
  reactackle: {
    ...defaultBase,
    components: {},
  },
};

export const composeReactackleTheme = (mixin = null) => {
  if (!mixin) return defaultTheme;

  const newBase = merge({}, defaultBase, pick(mixin, baseKeys));
  const components = isObject(mixin.components)
    ? mapValues(
        defaultThemeBlueprint.components,
        (defaultComponentThemeBlueprint, key) =>
          buildByBlueprint(
            defaultComponentThemeBlueprint,
            newBase,
            mixin.components[key] || {},
          ),
      )
    : defaultTheme.reactackle.components;

  return {
    reactackle: { ...newBase, components },
  };
};

export const extractThemeOrDefault = theme => {
  if (!theme) return defaultTheme;
  if (!theme.reactackle) return { ...theme, ...defaultTheme };
  return theme;
};

export const defaultThemeBlueprintBroadcast = createBroadcast(
  defaultThemeBlueprint,
);

export const registerDefaultComponentTheme = (
  key,
  defaultComponentThemeBlueprint,
) => {
  if (!defaultTheme.reactackle.components[key]) {
    defaultThemeBlueprint.components[key] = defaultComponentThemeBlueprint;

    defaultTheme.reactackle.components[key] = buildByBlueprint(
      defaultComponentThemeBlueprint,
      defaultBase,
    );

    defaultThemeBlueprintBroadcast.publish(defaultThemeBlueprint);
  }
};
