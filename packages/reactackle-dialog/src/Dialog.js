'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Portal from 'react-portal';
import {
  withTheme,
  noop,
  getKey,
  registerDefaultComponentTheme,
} from 'reactackle-core';
import { DialogHeading } from './DialogHeading';
import { DialogCloseButton } from './DialogCloseButton';
import { DialogContent } from './DialogContent';
import { DialogButton } from './DialogButton';
import { DialogActions, DialogActionsRegion } from './DialogActions';
import { ModalStyled } from './styles/ModalStyled';
import { BackdropStyled } from './styles/BackdropStyled';
import { OverflowWrapperStyled } from './styles/OverflowWrapperStyled';
import { RegionMainStyled } from './styles/RegionMainStyled';
import { RegionSideStyled } from './styles/RegionSideStyled';
import { ContentWrapperStyled } from './styles/ContentWrapperStyled';
import componentTheme from './styles/theme';

registerDefaultComponentTheme('dialog', componentTheme);

const ButtonType = PropTypes.shape({
  ...DialogButton.propTypes,
  id: PropTypes.number,
});

const propTypes = {
  /**
   * Determine whether to render backdrop
   */
  backdrop: PropTypes.bool,
  /**
   * If set to true, the content of the Dialog will be scrollable
   */
  scrollable: PropTypes.bool,
  /**
   * Determine whether to render dialog
   */
  open: PropTypes.bool,
  /**
   * Determine whether to render close button
   */
  haveCloseButton: PropTypes.bool,
  /**
   * Determine whether to close dialog on ESC key down
   */
  closeOnEscape: PropTypes.bool,
  /**
   * Determine whether to close dialog on backdrop click
   */
  closeOnBackdropClick: PropTypes.bool,
  /**
   * Title of the dialog
   */
  title: PropTypes.string,
  /**
   * Subtitle of the dialog
   */
  subtitle: PropTypes.string,
  /**
   * Buttons of the left side of the dialog
   */
  buttonsLeft: PropTypes.arrayOf(ButtonType),
  /**
   * Buttons of the right side of the dialog
   */
  buttons: PropTypes.arrayOf(ButtonType),
  /**
   * Minimum width of the dialog
   */
  minWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Padding size in the dialog
   */
  paddingSize: PropTypes.oneOf(['none', 'default']),
  /**
   * Determine whether to render dialog in full window size
   */
  fullWindowSize: PropTypes.bool,
  /**
   * Determine whether to render dialog with transparent background
   */
  transparentBg: PropTypes.bool,
  /**
   * Determine whether to display dialog content in flex mode
   */
  dialogContentFlex: PropTypes.bool,
  /**
   * Dialog aside element
   */
  regionAside: PropTypes.element,
  /**
   * Dialog aside element max width
   */
  regionAsideMaxWidth: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  /**
   * Determine whether to show dialog aside element in dialog
   */
  regionAsideShow: PropTypes.bool,
  /**
   * @ignore
   */
  // eslint-disable-next-line react/require-default-props
  theme: PropTypes.object,
  /**
   * Specify function to call on ENTER key press
   */
  onEnterKeyPress: PropTypes.func,
  /**
   * Specify function to call on dialog close
   */
  onClose: PropTypes.func,
  /**
   * Specify function to call just before dialog close
   */
  onBeforeClose: PropTypes.func,
  /**
   * Determines whether to display already mounted dialog
   */
  visible: PropTypes.bool,
};

const defaultProps = {
  backdrop: false,
  scrollable: false,
  open: false,
  haveCloseButton: false,
  closeOnEscape: false,
  closeOnBackdropClick: false,
  title: '',
  subtitle: '',
  buttons: [],
  buttonsLeft: [],
  minWidth: 0,
  paddingSize: 'default',
  fullWindowSize: false,
  transparentBg: false,
  dialogContentFlex: false,
  regionAside: null,
  regionAsideMaxWidth: 150,
  regionAsideShow: false,
  onEnterKeyPress: noop,
  onClose: noop,
  onBeforeClose: noop,
  visible: true,
};

const ESC = 27,
  ENTER = 13;

class _Dialog extends Component {
  constructor(props) {
    super(props);

    this.canHaveBackdrop = true;
    this._keyboardListened = false;
    this._backupBodyStyle = {
      height: null,
      overflowY: null,
    };

    this._handleBackdropClick = this._handleBackdropClick.bind(this);
    this._handleKeyUp = this._handleKeyUp.bind(this);
    this._handleDialogClose = this._handleDialogClose.bind(this);
  }

  componentDidMount() {
    this._toggleKeyboardListener(this._isVisible());
  }

  componentWillReceiveProps(nextProps) {
    this._toggleKeyboardListener(this._isVisible(nextProps));
  }

  componentWillUnmount() {
    this._toggleKeyboardListener(false);
  }


  _toggleKeyboardListener(condition) {
    if (condition && !this._keyboardListened) {
      this._keyboardListened = true;
      document.body.addEventListener('keyup', this._handleKeyUp);
    } else if (!condition && this._keyboardListened) {
      this._keyboardListened = false;
      document.body.removeEventListener('keyup', this._handleKeyUp);
    }
  }

  _isVisible(source = this.props) {
    return source.open && source.visible;
  }

  _handleDialogClose() {
    const willNotClose = this.props.onBeforeClose() === false;

    if (!willNotClose) this.props.onClose();
  }

  _handleBackdropClick() {
    if (this.props.closeOnBackdropClick) this._handleDialogClose();
  }

  _handleKeyUp(event) {
    if (event.keyCode === ESC && this.props.closeOnEscape)
      this._handleDialogClose();
    else if (event.keyCode === ENTER)
      this.props.onEnterKeyPress(this._handleDialogClose);
  }

  _renderCloseButton() {
    if (!this.props.haveCloseButton) return null;

    return (
      <DialogCloseButton
        onClick={this._handleDialogClose}
        transparentBg={this.props.transparentBg}
      />
    );
  }

  _renderRegionAside() {
    if (!this.props.regionAside) return null;

    return (
      <RegionSideStyled regionAsideMaxWidth={this.props.regionAsideMaxWidth}>
        {this.props.regionAside}
      </RegionSideStyled>
    );
  }

  _renderButtonsLeft() {
    if (!this.props.buttonsLeft.length) return null;

    const buttonsLeftList = this.props.buttonsLeft.map((button, index) =>
      <DialogButton
        {...button}
        key={getKey(button, index)}
        onCloseDialog={this._handleDialogClose}
      />,
    );

    return (
      <DialogActionsRegion alignLeft>
        {buttonsLeftList}
      </DialogActionsRegion>
    );
  }

  _renderButtons() {
    if (!this.props.buttons.length) return null;

    const buttonsList = this.props.buttons.map((button, index) =>
      <DialogButton
        {...button}
        key={getKey(button, index)}
        onCloseDialog={this._handleDialogClose}
      />,
    );

    return (
      <DialogActionsRegion>
        {buttonsList}
      </DialogActionsRegion>
    );
  }

  _renderActions() {
    if (!this.props.buttons.length && !this.props.buttonsLeft.length)
      return null;

    const buttonsLeft = this._renderButtonsLeft(),
      buttons = this._renderButtons();

    return (
      <DialogActions>
        {buttonsLeft}
        {buttons}
      </DialogActions>
    );
  }

  _renderBackdrop() {
    if (!this.canHaveBackdrop || !this.props.backdrop) return null;

    return <BackdropStyled onClick={this._handleBackdropClick} />;
  }

  render() {
    const closeButton = this._renderCloseButton(),
      regionAside = this._renderRegionAside(),
      actions = this._renderActions(),
      backdrop = this._renderBackdrop();

    const followsHeading = !!this.props.title || !!this.props.subtitle,
      hasRegionAside = this.props.regionAside !== null;

    return (
      <Portal isOpened={this.props.open}>
        <ModalStyled visible={this.props.visible}>
          {backdrop}
          <OverflowWrapperStyled
            customMinWidth={this.props.minWidth}
            hasRegionAside={hasRegionAside}
            regionAsideMaxWidth={this.props.regionAsideMaxWidth}
            regionAsideShow={this.props.regionAsideShow}
          >
            <ContentWrapperStyled
              paddingSize={this.props.paddingSize}
              fullWindowSize={this.props.fullWindowSize}
              customMinWidth={this.props.minWidth}
              hasTransparentBg={this.props.transparentBg}
              hasRegionAside={hasRegionAside}
              regionAsideMaxWidth={this.props.regionAsideMaxWidth}
              regionAsideShow={this.props.regionAsideShow}
            >
              <RegionMainStyled scrollable={this.props.scrollable}>
                {closeButton}
                <DialogHeading
                  title={this.props.title}
                  subtitle={this.props.subtitle}
                  paddingSize={this.props.paddingSize}
                  haveCloseButton={this.props.haveCloseButton}
                />
                <DialogContent
                  flex={this.props.dialogContentFlex}
                  paddingSize={this.props.paddingSize}
                  scrollable={this.props.scrollable}
                  followsHeading={followsHeading}
                >
                  {this.props.children}
                </DialogContent>
                {actions}
              </RegionMainStyled>
              {regionAside}
            </ContentWrapperStyled>
          </OverflowWrapperStyled>
        </ModalStyled>
      </Portal>
    );
  }
}

_Dialog.propTypes = propTypes;
_Dialog.defaultProps = defaultProps;
_Dialog.displayName = 'Dialog';

export default withTheme(_Dialog);
