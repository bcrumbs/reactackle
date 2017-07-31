'use strict';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const propTypes = {
  spread: PropTypes.bool,
  horizontalAlign: PropTypes.oneOf([
    'start',
    'end',
    'center',
    'space-between',
    'space-around',
  ]),
  verticalAlign: PropTypes.oneOf([
    'stretch',
    'center',
    'start',
    'end',
    'baseline',
  ]),
  size: PropTypes.oneOf(['blank', 'dense', 'default']),
  theme: PropTypes.object,
};

const defaultProps = {
  spread: false,
  horizontalAlign: 'start',
  verticalAlign: 'stretch',
  size: 'default',
};

/** PROP RECEIVERS */
const sizeProps = ({ size, theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const source =
    size === 'default'
      ? theme.reactackle.components.header.region.size
      : theme.reactackle.components.header.region.size[size];

  const { paddingY, paddingX } = source;

  return `
    padding: ${getValueString(paddingY)} ${getValueString(paddingX)};

    &:first-child { padding-left: 0 }
    &:last-child { padding-right: 0 }
  `;
};

const mapMain = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  evenSpaceBetween: 'space-between',
  evenSpaceAround: 'space-around',
};

const mapCross = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  stretch: 'stretch',
  baseline: 'baseline',
};

const alignProps = ({ horizontalAlign, verticalAlign }) => `
  justify-content: ${mapMain[horizontalAlign]};
  align-items: ${mapCross[verticalAlign]};
`;

const spread = ({ spread }) => (spread ? 'flex-grow: 1;' : '');

/** STYLES */
export const HeaderRegionStyled = styled.div`
  flex-shrink: 0;
  display: flex;
  ${sizeProps} ${alignProps} ${spread};
`;

HeaderRegionStyled.propTypes = propTypes;
HeaderRegionStyled.defaultProps = defaultProps;
HeaderRegionStyled.displayName = 'HeaderRegionStyled';
