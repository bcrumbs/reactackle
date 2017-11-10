import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, noop } from 'reactackle-core';
import { SidebarToggleStyled } from './styles/SidebarToggleStyled';
import { ToggleIconStyled } from './styles/ToggleIconStyled';
import { ToggleTextStyled } from './styles/ToggleTextStyled';
import { ToggleContentStyled } from './styles/ToggleContentStyled';

const propTypes = {
  toggleButtonText: PropTypes.string,
  expanded: PropTypes.bool,
  autoCollapsing: PropTypes.bool,
  onClick: PropTypes.func,
  // eslint-disable-next-line react/require-default-props
  theme: PropTypes.object,
};

const defaultProps = {
  toggleButtonText: 'Collapse',
  expanded: false,
  autoCollapsing: false,
  onClick: noop,
};

function _SidebarToggle(props) {

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
        {props.theme.reactackle.components.sidebar.toggleButton.iconElement}
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

_SidebarToggle.propTypes = propTypes;
_SidebarToggle.defaultProps = defaultProps;
_SidebarToggle.displayName = 'SidebarToggle';

export default withTheme(_SidebarToggle);
