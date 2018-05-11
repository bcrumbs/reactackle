import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { noop, registerDefaultComponentTheme } from 'reactackle-core';
import { Alert } from './Alert/Alert';
import componentTheme from './styles/theme';
import { AlertsWrapperStyled } from './styles/AlertsWrapperStyled';

registerDefaultComponentTheme('alertsArea', componentTheme);

const propTypes = {
  /*
   * Defines timeout for Alert close event
   */
  defaultTimeout: PropTypes.number,
  /*
   * Array of Alerts
   */
  alerts: PropTypes.arrayOf(Alert),
  /*
   * Specify function to be called on Close button click
   */
  onClose: PropTypes.func,
  /*
   * Speed of exit animation
   */
  animationDuration: PropTypes.number,
  /*
   * Horizontal position of Alert area relatively ro the window
   */
  positionX: PropTypes.oneOf(['left', 'right']),
  /*
   * Vertical position of Alert area relatively ro the window
   */
  positionY: PropTypes.oneOf(['top', 'bottom']),
};
const defaultProps = {
  defaultTimeout: 3000,
  alerts: [],
  onClose: noop,
  icon: null,
  animationDuration: 300,
  positionX: 'right',
  positionY: 'bottom',
};

export default class AlertArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAlert: 0,
      queue: [],
      closeAnimation: false,
    };
    this._timeoutId = null;
    this._handleAlertClose = this._handleAlertClose.bind(this);
    this._closeCurrentAlert = this._closeCurrentAlert.bind(this);
  }
  
  componentDidMount() {
    this._setupTimeout();
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.alerts !== this.props.alerts) {
      this.setState({
        currentAlert: 0,
        queue: [],
        closeAnimation: false,
      }, () => {
        this._setupTimeout();
      });
    }
  }
  
  _handleAlertClose() {
    this.setState({
      closeAnimation: true,
    });
    this._timeoutId = setTimeout(
      this._closeCurrentAlert,
      this.props.animationDuration,
    );
  }
  
  _closeCurrentAlert() {
    const alert = this._getAlert();
    if (alert) {
      this.setState(prevState => ({
        currentAlert: prevState.currentAlert + 1,
        closeAnimation: false,
      }), () => {
        this.props.onClose(alert.id);
        this._setupTimeout();
      });
    }
  }
  
  _setupTimeout() {
    this._timeoutId = null;
    const alert = this._getAlert();
    if (alert) {
      const timeout = (alert.timeout === 0 || alert.timeout)
        ? +alert.timeout
        : this.props.defaultTimeout;
      if (timeout) {
        this._timeoutId = timeout > this.props.animationDuration
          ? setTimeout(
            this._handleAlertClose,
            timeout - this.props.animationDuration,
          )
          : setTimeout(this._closeCurrentAlert, timeout);
      }
    }
  }
  
  _getAlert() {
    const { currentAlert, queue } = this.state;
    const queueIndex = currentAlert - this.props.alerts.length;
    if (currentAlert < this.props.alerts.length)
      return this.props.alerts[currentAlert];
    else if (queueIndex < queue.length)
      return queue[queueIndex];
    return null;
  }
  
  _renderCurrentAlert() {
    const { closeAnimation } = this.state;
    const alert = this._getAlert();
    if (alert) {
      return (
        <Alert
          id={alert.id}
          closeAnimation={closeAnimation}
          onClose={this._handleAlertClose}
          {...alert}
        >
          {alert.content}
        </Alert>
      );
    }
    return null;
  }
  
  addToQueue(alert) {
    this.setState({
      queue: [
        ...this.state.queue,
        alert,
      ],
    }, () => {
      if (!this._timeoutId)
        this._setupTimeout();
    });
  }
  
  render() {
    const currentAlert = this._renderCurrentAlert();
    return (
      <AlertsWrapperStyled
        positionX={this.props.positionX}
        positionY={this.props.positionY}
      >
        {currentAlert}
      </AlertsWrapperStyled>
    );
  }
}

AlertArea.propTypes = propTypes;
AlertArea.defaultProps = defaultProps;
AlertArea.displayName = 'AlertArea';
