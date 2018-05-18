import React from 'react';
import PropTypes from 'prop-types';
import { IconArrowChevronRight } from 'reactackle-icons';
import { withExternalProps, noop } from 'reactackle-core';
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

const MenuLink = props => <a {...props}>{props.children}</a>;

const propTypes = {
  id: PropTypes.string,
  iconLeft: PropTypes.element,
  iconRight: PropTypes.element,
  textRight: PropTypes.string,
  image: PropTypes.string,
  linkHref: PropTypes.string,
  text: PropTypes.string,
  textSecondary: PropTypes.string,
  renderLink: PropTypes.bool,
  linkComponent: PropTypes.func,
  addonRight: PropTypes.element,
  colorScheme: PropTypes.oneOf(['light', 'dark']),
  active: PropTypes.bool,
  addImageOffset: PropTypes.bool,
  addIconOffset: PropTypes.bool,
  nestingLevel: PropTypes.number,
  onClick: PropTypes.func,
  openSubmenuOnMouseEnter: PropTypes.bool,
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
  renderLink: true,
  linkComponent: MenuLink,
  addonRight: null,
  colorScheme: 'dark',
  active: false,
  addImageOffset: false,
  addIconOffset: false,
  nestingLevel: 0,
  onClick: noop,
  openSubmenuOnMouseEnter: false,
  iconExpand: <IconArrowChevronRight color="currentColor" size="custom" />,
};

export class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submenuOpen: false,
    };
    this._toggleMenu = this._toggleMenu.bind(this);
    this._handleMouseEnter = this._handleMouseEnter.bind(this);
    this._handleClick = this._handleClick.bind(this);
    this._createElementRef = this._createElementRef.bind(this);
    this._handleExpandIconClick = this._handleExpandIconClick.bind(this);
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
  
  _handleMouseEnter() {
    if (this.props.openSubmenuOnMouseEnter)
      this._toggleMenu(true);
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
      <ContentStyled>
        <TextPrimaryStyled
          addImageOffset={this.props.addImageOffset}
          addIconOffset={this.props.addIconOffset}
        >
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
      nestingLevel: this.props.nestingLevel,
      colorScheme: this.props.colorScheme,
      active: this.props.active,
      onClick: this._handleClick,
      onMouseEnter: this._handleMouseEnter,
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
        ref={this._createElementRef}
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

const MenuItemWithMenuProps = withExternalProps(MENU_BROADCAST)(
  ({ externalProps, ...props }) =>
    <MenuItem {...props} menuProps={externalProps} />,
);
export default withExternalProps(MENU_GROUP_BROADCAST)(
  ({ externalProps, ...props }) =>
    <MenuItemWithMenuProps {...props} menuGroupProps={externalProps} />,
);
