import React from 'react';
import PropTypes from 'prop-types';
import { noop } from 'reactackle-core';
import { IconArrowChevronLeft } from 'reactackle-icons';
import { SidebarToggleStyled } from './styles/SidebarToggleStyled';
import { ToggleIconStyled } from './styles/ToggleIconStyled';
import { ToggleTextStyled } from './styles/ToggleTextStyled';
import { ToggleContentStyled } from './styles/ToggleContentStyled';

const propTypes = {
  toggleButtonText: PropTypes.string,
  expanded: PropTypes.bool,
  autoCollapsing: PropTypes.bool,
  icon: PropTypes.element,
  onClick: PropTypes.func,
};

const defaultProps = {
  toggleButtonText: 'Collapse',
  expanded: false,
  autoCollapsing: false,
  icon: <IconArrowChevronLeft size="custom" color="inherit" />,
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
      >
        {props.icon}
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
