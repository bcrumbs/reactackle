import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { noop } from 'reactackle-core';
import { LinkWrapper } from '../Link/LinkWrapper';
import { DefaultLinkComponent } from '../Link/DefaultLinkComponent';
import { TabStyled } from './styles/TabStyled';
import { TabContentWrapperStyled } from './styles/TabContentWrapperStyled';
import { TabContentStyled } from './styles/TabContentStyled';
import { TabTextStyled } from './styles/TabTextStyled';
import { TabIconStyled } from './styles/TabIconStyled';

const propTypes = {
  /**
   * Href that will be passed to Link inside Tab
   */
  linkHref: PropTypes.string,
  /**
   * Determines whether to disable Tab
   */
  disabled: PropTypes.bool,
  /**
   * Determines whether Tab is selected
   */
  isSelected: PropTypes.bool,
  /**
   * Text that will be displayed on Tab
   */
  text: PropTypes.string,
  /**
   * Number of Tab
   */
  index: PropTypes.number,
  /**
   * Color scheme of Tab
   */
  colorScheme: PropTypes.oneOf(['light', 'dark']),
  /**
    * Specify link component
    */
  linkComponent: PropTypes.func,
  /**
   * Icon that will be rendered on Tab (see IconSvg or IconCustom props)
   */
  icon: PropTypes.node,
  /**
   * Specify function that will be called on Tab selection
   */
  onSelect: PropTypes.func,
};

const defaultProps = {
  linkHref: '',
  disabled: false,
  isSelected: false,
  text: '',
  index: 0,
  colorScheme: 'dark',
  linkComponent: DefaultLinkComponent,
  icon: null,
  onSelect: noop,
};

export default class Tab extends Component {
  constructor(props) {
    super(props);

    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick() {
    if (!this.props.disabled) {
      this.props.onSelect({
        index: this.props.index,
      });
    }
  }

  _renderTabIcon() {
    const { icon } = this.props;
    if (!icon) return null;
    
    return (
      <TabIconStyled
        colorScheme={this.props.colorScheme}
        selected={this.props.isSelected}
      >
        {icon}
      </TabIconStyled>
    );
  }

  _renderTabTxt() {
    if (!this.props.text) return null;

    return (
      <TabTextStyled hasIcon={this.props.icon}>
        {this.props.text}
      </TabTextStyled>
    );
  }

  _renderTabContent() {
    const { disabled, linkHref, linkComponent, text } = this.props,
      tabIcon = this._renderTabIcon(),
      tabTxt = this._renderTabTxt();

    const tabContent = (
      <TabStyled
        onClick={this._handleClick}
        colorScheme={this.props.colorScheme}
        selected={this.props.isSelected}
      >
        <TabContentWrapperStyled>
          <TabContentStyled>
            {tabIcon}
            {tabTxt}
          </TabContentStyled>
        </TabContentWrapperStyled>
      </TabStyled>
    );

    if (!disabled && linkHref) {
      return (
        <LinkWrapper linkComponent={linkComponent} href={linkHref} title={text}>
          {tabContent}
        </LinkWrapper>
      );
    }

    return tabContent;
  }

  render() {
    return this._renderTabContent();
  }
}

Tab.propTypes = propTypes;
Tab.defaultProps = defaultProps;
Tab.displayName = 'Tab';
