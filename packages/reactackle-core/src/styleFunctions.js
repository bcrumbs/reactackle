import { grid } from './constants/constants';

export const stripUnit = value => {
  if (!value) throw new TypeError('Value is not defined');

  if (typeof value === 'string' && value !== 'inherit')
    return value.match(/^\d+/)[0];
  else if (isFinite(value) || value === 'inherit') return value;

  throw new TypeError('Wrong value type');
};

export const getValueUnit = value => {
  if (!value) throw new TypeError('Value is not defined');

  if (typeof value === 'string') return value.match(/\D+/);
  else if (typeof value === 'number') return '';

  throw new TypeError('Wrong value type');
};

export const oppositeDirection = direction => {
  const directionMap = {
    top: 'bottom',
    right: 'left',
    bottom: 'top',
    left: 'right',
    center: 'center',
    ltr: 'rtl',
    rtl: 'ltr',
  };

  return directionMap[direction];
};

export const legacyDirection = direction => {
  const directionMap = {
    'to top': 'bottom',
    'to top right': 'bottom left',
    'to right top': 'left bottom',
    'to right': 'left',
    'to bottom right': 'top left',
    'to right bottom': 'left top',
    'to bottom': 'top',
    'to bottom left': 'top right',
    'to left bottom': 'right top',
    'to left': 'right',
    'to left top': 'right bottom',
    'to top left': 'bottom right',
  };

  if (!directionMap[direction.toLowerCase()])
    throw new TypeError(`Wrong direction value: '${direction}'`);

  return directionMap[direction.toLowerCase()];
};

/**
 * Generate columns
 */
export const column = (amount, totalColumns = grid.totalColumns) => {
  if (!isFinite(amount) || !isFinite(totalColumns))
    throw new TypeError('Wrong value type. Number expected.');

  const result = amount * 100 / totalColumns;

  return result ? `${result}%` : result;
};

export const getValueString = value =>
  typeof value === 'number' ? `${value}px` : value;
