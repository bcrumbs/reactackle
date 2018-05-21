import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createBroadcast, withExternalProps } from 'reactackle-core';
import { MENU_BROADCAST, MENU_GROUP_BROADCAST } from '../broadcastsConstants';

import { MenuGroupStyled } from './styles/MenuGroupStyled';

const propTypes = {
  /**
   * Changes layout direction from vertical to horizontal
   */
  inline: PropTypes.bool,
  /**
   * Set to 'light' for using menu on dark background
   */
  nestingLevel: PropTypes.number,
};

const defaultProps = {
  inline: false,
  nestingLevel: 0,
};

export class MenuGroup extends Component {
  constructor(props) {
    super(props);
    this._broadcast = createBroadcast({
      nestingLevel: this.props.nestingLevel,
    });

    this._createElementRef = this._createElementRef.bind(this);
  }

  getChildContext() {
    return {
      ...this.context,
      [MENU_GROUP_BROADCAST]: this._broadcast.subscribe,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.nestingLevel !== nextProps.nestingLevel
    ) {
      this._broadcast.publish({
        nestingLevel: nextProps.nestingLevel,
      });
    }
  }
  
  _createElementRef(ref) {
    this.element = ref;
  }
  
  render() {
    const {
      children,
      inline,
    } = this.props;

    return (
      <MenuGroupStyled
        ref={this._createElementRef}
        inline={inline}
      >
        {children}
      </MenuGroupStyled>
    );
  }
}

MenuGroup.propTypes = propTypes;
MenuGroup.defaultProps = defaultProps;
MenuGroup.displayName = 'MenuGroup';
MenuGroup.childContextTypes = {
  [MENU_GROUP_BROADCAST]: PropTypes.func.isRequired,
};

export default withExternalProps(MENU_BROADCAST)(
  ({ externalProps, ...props }) =>
    <MenuGroup {...props} {...externalProps} />,
);
