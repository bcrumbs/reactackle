'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash.omit';
import { noop, getKey, registerDefaultComponentTheme } from 'reactackle-core';
import { Tab } from './Tab';
import { DefaultLinkComponent } from './Link/DefaultLinkComponent';
import { TabsWrapperStyled } from './styles/TabsWrapperStyled';
import { TabsListStyled } from './styles/TabsListStyled';
import { TabsContentWrapperStyled } from './styles/TabsContentWrapperStyled';
import componentTheme from './styles/theme';

registerDefaultComponentTheme('tabs', componentTheme);

const propTypes = {
  /**
    * Props that will be passed to Tab Item
    * @customType Tab.PropTypes
    */
  tabs: PropTypes.arrayOf(
    PropTypes.shape(
      omit(Tab.propTypes, ['colorScheme', 'index', 'isSelected', 'onSelect']),
    ),
  ),
  /**
   * Specify selected tab by number
   */
  selected: PropTypes.number,
  /**
   * Specify color scheme
   */
  colorScheme: PropTypes.oneOf(['light', 'dark']),
  /**
   * Specify link component that will be used in Tab
   */
  linkComponent: PropTypes.func,
  /**
   * Specify function that will be called on selected Tab change
   */
  onChange: PropTypes.func,
};

const defaultProps = {
  tabs: [],
  selected: 0,
  colorScheme: 'dark',
  linkComponent: DefaultLinkComponent,
  onChange: noop,
};

export default class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: props.selected,
    };

    this._handleTabSelection = this._handleTabSelection.bind(this);
  }

  componentWillReceiveProps(props) {
    if (props.selected !== this.state.selected)
      this.setState({ selected: props.selected });
  }

  _handleTabSelection({ index }) {
    this.setState({
      selected: index,
    });

    this.props.onChange({
      value: index,
    });
  }

  _renderTabs() {
    const { state: { selected } } = this;

    return this.props.tabs.map((tab, key) => {
      const index = getKey(tab, key);
      const tabProps = {
        ...tab,
        index,
        colorScheme: this.props.colorScheme,
        onSelect: this._handleTabSelection,
        isSelected: index === selected,
        linkComponent: tab.linkComponent || this.props.linkComponent,
      };

      return <Tab {...tabProps} key={index} />;
    });
  }

  render() {
    const tabs = this._renderTabs();

    return (
      <TabsWrapperStyled colorScheme={this.props.colorScheme}>
        <TabsContentWrapperStyled>
          <TabsListStyled>
            {tabs}
          </TabsListStyled>
        </TabsContentWrapperStyled>
      </TabsWrapperStyled>
    );
  }
}

Tabs.propTypes = propTypes;
Tabs.defaultProps = defaultProps;
Tabs.displayName = 'Tabs';
