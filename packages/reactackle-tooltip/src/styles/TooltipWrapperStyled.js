'use strict';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { extractThemeOrDefault } from 'reactackle-core';

const propTypes = {
  theme: PropTypes.object,
};

const baseProps = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const { zIndex } = theme.reactackle.components.tooltip;

  return `
    z-index: ${zIndex};
  `;
};

export const TooltipWrapperStyled = styled.div`
  position: fixed;
  ${baseProps};
`;

TooltipWrapperStyled.propTypes = propTypes;
TooltipWrapperStyled.displayName = 'TooltipWrapperStyled';
