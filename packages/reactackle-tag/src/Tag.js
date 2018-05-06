import React from 'react';
import PropTypes from 'prop-types';
import { IconCross } from 'reactackle-icons';
import { withTooltip } from 'reactackle-tooltip';
import { noop, registerDefaultComponentTheme } from 'reactackle-core';

import {
  componentTheme,
  TagStyled,
  IconStyled,
  ContentStyled,
  TextStyled,
  RemoveIconStyled,
} from './styles';

registerDefaultComponentTheme('tag', componentTheme);

/*
 * Combined with tooltip
 */

const propTypes = {
  /*
   * Bounded tag has max width, long text may be cut
   */
  bounded: PropTypes.bool,
  /*
   * Define icon component
   */
  icon: PropTypes.element,
  /*
   * Tag text
   */
  text: PropTypes.string,
  /*
   * Tooltip text
   */
  tooltipText: PropTypes.string,
  /*
   * Redefines background color
   */
  bgColor: PropTypes.string,
  /*
   * Redefines text color
   */
  textColor: PropTypes.string,
  /*
   * Redefines icon color
   */
  iconColor: PropTypes.string,
  /*
   * Adds remove button
   */
  removable: PropTypes.bool,
  /*
   * Remove Icon
   */
  iconRemove: PropTypes.element,
  /*
   * Function to be called in remove button click
   */
  onRemove: PropTypes.func,
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
  bounded: false,
  icon: null,
  text: '',
  tooltipText: '',
  bgColor: '',
  textColor: '',
  iconColor: '',
  removable: false,
  iconRemove: <IconCross size="custom" color="currentColor" />,
  onRemove: noop,
  toggleTooltip: noop,
  showTooltip: noop,
  hideTooltip: noop,
};

const TagComponent = ({
  bounded,
  removable,
  icon,
  iconRemove,
  text,
  tooltipText,
  bgColor,
  textColor,
  iconColor,
  children,
  ...props
}) => {
  const tooltip = tooltipText && <props.Tooltip text={tooltipText} />;
  
  const textElement = text && (
    <TextStyled isBounded={bounded} title={text}>
      {text}
    </TextStyled>
  );

  const removeButton = removable && (
    <RemoveIconStyled onClick={props.onRemove}>
      {iconRemove}
    </RemoveIconStyled>
  );

  const iconElement = icon && (
    <IconStyled iconColor={iconColor}>
      {icon}
    </IconStyled>
  );
  
  const wrapperProps = {
    onClick: props.toggleTooltip,
    onFocus: props.showTooltip,
    onBlur: props.hideTooltip,
    onMouseEnter: props.showTooltip,
    onMouseLeave: props.hideTooltip,
  };
  
  return (
    <TagStyled
      {...wrapperProps}
      bgColorCustom={bgColor}
      textColorCustom={textColor}
    >
      {iconElement}
      <ContentStyled
        hasIcon={!!icon}
        isBounded={bounded}
        isRemovable={removable}
      >
        {textElement}
        {children}
      </ContentStyled>
      {removeButton}
      {tooltip}
    </TagStyled>
  );
};

TagComponent.propTypes = propTypes;
TagComponent.defaultProps = defaultProps;
TagComponent.displayName = 'Tag';

export default withTooltip(TagComponent, true);
