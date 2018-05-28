import React from 'react';
import PropTypes from 'prop-types';
import { withTooltip } from 'reactackle-tooltip';
import { noop, registerDefaultComponentTheme } from 'reactackle-core';
import { componentTheme, TextStyled } from './styles';

registerDefaultComponentTheme('text', componentTheme);

/**
 * Combined with tooltip
 */
const propTypes = {
  /**
   * Text of the component
   */
  text: PropTypes.string,
  /**
   * Text display type
   */
  display: PropTypes.oneOf([
    'default',
    'caption',
    'body',
    'bodyStrong',
    'subheading',
    'title',
    'headline',
    'display1',
    'display2',
    'display3',
    'display4',
  ]),
  /**
   * Tooltip text
   */
  tooltipText: PropTypes.string,
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
};

const defaultProps = {
  text: '',
  display: 'default',
  tooltipText: '',
  toggleTooltip: noop,
  showTooltip: noop,
  hideTooltip: noop,
};

const TextComponent = ({
  text,
  display,
  tooltipText,
  children,
  toggleTooltip,
  showTooltip,
  hideTooltip,
  ...props
}) => {
  const tooltipElement = tooltipText && (
    <props.Tooltip>{tooltipText}</props.Tooltip>
  );

  const wrapperProps = {
    onClick: toggleTooltip,
    onFocus: showTooltip,
    onBlur: hideTooltip,
    onMouseEnter: showTooltip,
    onMouseLeave: hideTooltip,
  };

  return (
    <TextStyled {...wrapperProps} display={display}>
      {text || children}
      {tooltipElement}
    </TextStyled>
  );
};

TextComponent.propTypes = propTypes;
TextComponent.defaultProps = defaultProps;
TextComponent.displayName = 'Text';

export default withTooltip(TextComponent, true);
