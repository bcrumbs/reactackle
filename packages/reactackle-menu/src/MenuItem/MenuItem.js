import React from 'react';
import PropTypes from 'prop-types';
import { IconArrowChevronRight } from 'reactackle-icons';
import { withExternalProps, noop, createBroadcast } from 'reactackle-core';
import { MENU_BROADCAST, MENU_GROUP_BROADCAST } from '../broadcastsConstants';
import { MenuItemStyled } from './styles/MenuItemStyled';
import { AnchorStyled } from './styles/AnchorStyled';
import { ContentStyled } from './styles/ContentStyled';
import { TextPrimaryStyled } from './styles/TextPrimaryStyled';
import { TextSecondaryStyled } from './styles/TextSecondaryStyled';
import { IconLeftStyled } from './styles/IconLeftStyled';
import { IconRightStyled } from './styles/IconRightStyled';
import { ImageStyled } from './styles/ImageStyled';
import { ExpandButtonStyled } from './styles/ExpandButtonStyled';
import { ExpandIconStyled } from './styles/ExpandIconStyled';
import { AddonRightStyled } from './styles/AddonRightStyled';
import { TextRightStyled } from './styles/TextRightStyled';
import { MenuLink } from './MenuLink';

const propTypes = {
  /**
   * Item id
   */
  id: PropTypes.string,
  /**
   * Defines left icon element
   */
  iconLeft: PropTypes.element,
  /**
   * Defines right icon element
   */
  iconRight: PropTypes.element,
  /**
   * Defines right text element
   */
  textRight: PropTypes.string,
  /**
   * Defines left image element
   */
  image: PropTypes.string,
  /**
   * Defines item's link
   */
  linkHref: PropTypes.string,
  /**
   * Primary item text
   */
  text: PropTypes.string,
  /**
   * Secondary item text
   */
  textSecondary: PropTypes.string,
  /**
   * Allow item to behave like a link
   */
  renderLink: PropTypes.bool,
  /**
   * Define link component
   */
  linkComponent: PropTypes.func,
  /**
   * Primary right add-on element
   */
  addonRight: PropTypes.element,
  /**
   * Define item colorScheme
   */
  colorScheme: PropTypes.oneOf(['light', 'dark']),
  /**
   * Display item as active
   */
  active: PropTypes.bool,
  /**
   * Simulate image offset for item without image
   */
  addImageOffset: PropTypes.bool,
  /**
   * Simulate image offset for item without left icon
   */
  addIconOffset: PropTypes.bool,
  /**
   * Simulate item offset for nested trees
   */
  nestingLevel: PropTypes.number,
  /**
   * Set item inClick function
   */
  onClick: PropTypes.func,
  /**
   * Define expand icon element
   */
  iconExpand: PropTypes.element,
};

const defaultProps = {
  id: '',
  iconLeft: null,
  iconRight: null,
  textRight: '',
  image: '',
  linkHref: '#',
  text: '',
  textSecondary: '',
  renderLink: false,
  linkComponent: MenuLink,
  addonRight: null,
  colorScheme: 'dark',
  active: false,
  addImageOffset: false,
  addIconOffset: false,
  nestingLevel: 0,
  onClick: noop,
  iconExpand: <IconArrowChevronRight color="currentColor" size="custom" />,
};

export class MenuItem extends React.Component {
  constructor(props) {
    super(props);

    this._broadcast = createBroadcast({
      nestingLevel: this.props.nestingLevel,
      colorScheme: this.props.colorScheme,
    });

    this.state = {
      submenuOpen: false,
    };
    this._toggleMenu = this._toggleMenu.bind(this);
    this._handleClick = this._handleClick.bind(this);
    this._createElementRef = this._createElementRef.bind(this);
    this._handleExpandIconClick = this._handleExpandIconClick.bind(this);
  }

  getChildContext() {
    return {
      ...this.context,
      [MENU_BROADCAST]: this._broadcast.subscribe,
      [MENU_GROUP_BROADCAST]: this._broadcast.subscribe,
    };
  }
  
  _toggleMenu(open) {
    if (this.props.children) {
      this.setState({
        submenuOpen: typeof open === 'boolean' ? open : !this.state.submenuOpen,
      });
    }
  }
  
  _handleExpandIconClick(event) {
    event.preventDefault();
    this._toggleMenu();
  }

  _handleClick() {
    if (!this.props.children)
      this.closeRootMenu();
    else
      this._toggleMenu();
    this.props.onClick();
  }
  
  closeRootMenu() {
    document.dispatchEvent(new MouseEvent('click'));
  }
  
  _createElementRef(ref) {
    this.element = ref;
  }
  
  render() {
    const href = this.props.linkHref;
    const iconLeft = this.props.iconLeft && (
      <IconLeftStyled
        colorScheme={this.props.colorScheme}
        active={this.props.active}
      >
        {this.props.iconLeft}
      </IconLeftStyled>
    );

    const iconRight = this.props.iconRight && (
      <IconRightStyled
        colorScheme={this.props.colorScheme}
        active={this.props.active}
      >
        {this.props.iconRight}
      </IconRightStyled>
    );

    const textRight = this.props.textRight && (
      <TextRightStyled
        colorScheme={this.props.colorScheme}
        active={this.props.active}
      >
        { this.props.textRight }
      </TextRightStyled>
    );
    
    const image = this.props.image && (
      <ImageStyled
        imageOnly={
          !this.props.text
          && !this.props.iconLeft
          && !this.props.iconRight
        }
        style={{ backgroundImage: `url(${this.props.image})` }}
      />
    );
    
    const textSecondary = this.props.textSecondary && (
      <TextSecondaryStyled
        colorScheme={this.props.colorScheme}
        active={this.props.active}
      >
        {this.props.textSecondary}
      </TextSecondaryStyled>
    );

    const text = this.props.text && (
      <ContentStyled
        nestingLevel={this.props.nestingLevel}
        addImageOffset={this.props.addImageOffset}
        addIconOffset={this.props.addIconOffset}
      >
        <TextPrimaryStyled>
          {this.props.text}
        </TextPrimaryStyled>
        {textSecondary}
      </ContentStyled>
    );

    const expandButton = this.props.children && (
      <ExpandButtonStyled
        colorScheme={this.props.colorScheme}
        active={this.props.active}
        onClick={this._handleExpandIconClick}

      >
        <ExpandIconStyled opened={this.state.submenuOpen}>
          {this.props.iconExpand}
        </ExpandIconStyled>
      </ExpandButtonStyled>
    );
    
    const ItemWrapper = this.props.renderLink
      ? AnchorStyled.withComponent(this.props.linkComponent)
      : AnchorStyled.withComponent('div');
    
    const itemWrapperProps = {
      colorScheme: this.props.colorScheme,
      active: this.props.active,
      onClick: this._handleClick,
    };
    
    if (this.props.renderLink)
      itemWrapperProps.href = href;
    
    const addonRight = this.props.addonRight && (
      <AddonRightStyled>
        { this.props.addonRight }
      </AddonRightStyled>
    );
    
    const children = this.props.children;

    return (
      <MenuItemStyled
        innerRef={this._createElementRef}
        tabIndex={-1}
        id={this.props.id}
      >
        <ItemWrapper
          {...itemWrapperProps}
        >
          {iconLeft}
          {image}
          {text}
          {textRight}
          {iconRight}
          {addonRight}
          {expandButton}
        </ItemWrapper>
        {this.state.submenuOpen && children}
      </MenuItemStyled>
    );
  }
}

MenuItem.propTypes = propTypes;
MenuItem.defaultProps = defaultProps;
MenuItem.displayName = 'MenuItem';
MenuItem.childContextTypes = {
  [MENU_BROADCAST]: PropTypes.func.isRequired,
  [MENU_GROUP_BROADCAST]: PropTypes.func.isRequired,
};

const MenuItemWithMenuProps = withExternalProps(MENU_BROADCAST)(
  ({ externalProps, ...props }) =>
    <MenuItem {...props} {...externalProps} />,
    
);
export default withExternalProps(MENU_GROUP_BROADCAST)(
  ({ externalProps, ...props }) =>
    <MenuItemWithMenuProps {...props} {...externalProps} />,
);
