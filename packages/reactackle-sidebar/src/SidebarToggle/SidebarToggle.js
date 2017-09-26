import React from 'react';
import PropTypes from 'prop-types';
import { noop } from 'reactackle-core';
import { Icon, iconPropType } from 'reactackle-icon';
import { IconChevronLeft } from 'reactackle-icon-svg';
import { SidebarToggleStyled } from './styles/SidebarToggleStyled';
import { ToggleIconStyled } from './styles/ToggleIconStyled';
import { ToggleTextStyled } from './styles/ToggleTextStyled';
import { ToggleContentStyled } from './styles/ToggleContentStyled';

const propTypes = {
  toggleButtonText: PropTypes.string,
  expanded: PropTypes.bool,
  autoCollapsing: PropTypes.bool,
  icon: iconPropType,
  onClick: PropTypes.func,
};

const defaultProps = {
  toggleButtonText: 'Collapse',
  expanded: false,
  autoCollapsing: false,
  icon: {
    src: IconChevronLeft,
    type: 'svg',
  },
  onClick: noop,
};

export default function SidebarToggle(props) {
  return (
    <SidebarToggleStyled
      expanded={props.expanded}
      autoCollapsing={props.autoCollapsing}
      onClick={props.onClick}
    >
      <ToggleIconStyled
        expanded={props.expanded}
        autoCollapsing={props.autoCollapsing}
        type={props.icon.type}
      >
        <Icon {...props.icon} color="currentColor" size="custom" />
      </ToggleIconStyled>

      <ToggleContentStyled>
        <ToggleTextStyled
          expanded={props.expanded}
          autoCollapsing={props.autoCollapsing}
        >
          {props.toggleButtonText}
        </ToggleTextStyled>
      </ToggleContentStyled>
    </SidebarToggleStyled>
  );
}

SidebarToggle.propTypes = propTypes;
SidebarToggle.defaultProps = defaultProps;
SidebarToggle.displayName = 'SidebarToggle';
