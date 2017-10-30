'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { noop, isUndef, registerDefaultComponentTheme } from 'reactackle-core';
import { SidebarToggle } from './SidebarToggle';
import { SidebarStyled } from './styles/SidebarStyled';
import { SidebarBoxStyled } from './styles/SidebarBoxStyled';
import componentTheme from './styles/theme';

registerDefaultComponentTheme('sidebar', componentTheme);

const propTypes = {
  /**
   * Determines whether sidebar have toggle button
   */
  haveToggleButton: PropTypes.bool,
  /**
   * Determines text of toggle button
   */
  toggleButtonText: PropTypes.string,
  /**
   * Determines icon of toggle button
   */
  toggleButtonIcon: PropTypes.node,
  /**
   * Determines whether sidebar is expanded
   */
  expanded: PropTypes.bool,
  /**
   * Determines whether to render Sidebar on the right side
   */
  attachToRight: PropTypes.bool,
  /**
   * Allow to Sidebar to collapse on narrow screens
   * requires haveToggleButton prop set to true
   */
  autoCollapsing: PropTypes.bool,
  /**
   * Specify function to call on ToggleButton click
   */
  onToggle: PropTypes.func,
};

const defaultProps = {
  haveToggleButton: false,
  toggleButtonText: 'Collapse',
  toggleButtonIcon: null,
  expanded: void 0,
  attachToRight: false,
  autoCollapsing: false,
  onToggle: noop,
};

export default class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: isUndef(props.expanded) ? true : props.expanded,
    };

    this._handleToggle = this._handleToggle.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.expanded !== this.props.expanded &&
      isUndef(nextProps.expanded)
    ) {
      this.setState({
        expanded: this.props.expanded,
      });
    }
  }

  _getCurrentExpanded() {
    return isUndef(this.props.expanded)
      ? this.state.expanded
      : this.props.expanded;
  }

  _handleToggle() {
    const expanded = !this._getCurrentExpanded();

    if (isUndef(this.props.expanded)) {
      this.setState({
        expanded,
      });
    }

    this.props.onToggle(expanded);
  }

  _renderToggleButton() {
    if (!this.props.haveToggleButton) return null;

    const expanded = this._getCurrentExpanded();

    return (
      <SidebarToggle
        toggleButtonText={this.props.toggleButtonText}
        icon={this.props.toggleButtonIcon || undefined}
        expanded={expanded}
        autoCollapsing={this.props.autoCollapsing}
        onClick={this._handleToggle}
      />
    );
  }

  render() {
    const toggleButton = this._renderToggleButton(),
      expanded = this._getCurrentExpanded();

    return (
      <SidebarStyled
        expanded={expanded}
        autoCollapsing={this.props.autoCollapsing}
        attachToRight={this.props.attachToRight}
        haveToggleButton={this.props.haveToggleButton}
      >
        <SidebarBoxStyled
          expanded={expanded}
          autoCollapsing={this.props.autoCollapsing}
          attachToRight={this.props.attachToRight}
          haveToggleButton={this.props.haveToggleButton}
        >
          {toggleButton}
          {this.props.children}
        </SidebarBoxStyled>
      </SidebarStyled>
    );
  }
}

Sidebar.propTypes = propTypes;
Sidebar.defaultProps = defaultProps;
Sidebar.displayName = 'Sidebar';
