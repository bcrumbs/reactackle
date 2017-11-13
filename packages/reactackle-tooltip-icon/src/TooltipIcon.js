'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { withTooltip } from 'reactackle-tooltip';
import { noop, registerDefaultComponentTheme } from 'reactackle-core';
import { TooltipIconStyled } from './styles/TooltipIconStyled';
import componentTheme from './styles/theme';

registerDefaultComponentTheme('tooltipIcon', componentTheme);

/**
 * Combined with tooltip
 */
const propTypes = {
  /**
   * Text of the Tooltip
   */
  text: PropTypes.string.isRequired,
  /**
   * @ignore
   */
  toggleTooltip: PropTypes.func,
  /**
   * @ignore
   */
  showTooltip: PropTypes.func,
  /**
   * @ignore
   */
  hideTooltip: PropTypes.func,
  /**
   * @ignore
   */
  Tooltip: PropTypes.func,
};

const defaultProps = {
  toggleTooltip: noop,
  showTooltip: noop,
  hideTooltip: noop,
  Tooltip: noop,
};

export const TooltipIconComponent = props => {
  const { Tooltip } = props;
  const wrapperProps = {
    onClick: props.toggleTooltip,
    onFocus: props.showTooltip,
    onBlur: props.hideTooltip,
    onMouseEnter: props.showTooltip,
    onMouseLeave: props.hideTooltip,
    tabIndex: 0,
  };
  return (
    <TooltipIconStyled {...wrapperProps}>
      <span>?</span>
      <Tooltip text={props.text} />
    </TooltipIconStyled>
  );
};

TooltipIconComponent.propTypes = propTypes;
TooltipIconComponent.defaultProps = defaultProps;
TooltipIconComponent.displayName = 'TooltipIcon';

export default withTooltip(TooltipIconComponent, true);
