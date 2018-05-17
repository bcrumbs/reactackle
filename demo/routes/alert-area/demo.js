import React, { Component } from 'react';
import { AlertArea, Button } from 'reactackle';

import { RouteDemo } from '../../components/Route/RouteStructure';

import {
  DemoSnippet,
  DemoPreview,
  DemoCode,
} from '../../components/DemoSnippet/DemoSnippet';

import SnippetDefault from './snippets/1.snippet';
import SnippetWithCloseButton from './snippets/2.snippet';
import SnippetWithTwoButtonsWithVerticalLayout from './snippets/3.snippet';
import SnippetWithTimeoutForAutoclose from './snippets/4.snippet';
import SnippetWithCloseCallback from './snippets/5.snippet';
import SnippetWithQueue from './snippets/6.snippet';

export class AlertAreaDemoRoute extends Component {
  constructor() {
    super();

    this.state = {
      alerts: [],
      visibleNotification: false,
      textNotification: '',
    };
    this.alertArea = null;
    this._handleCloseNotification = this._handleCloseNotification.bind(this);
    this._handleDefault = this._handleDefault.bind(this);
    this._handleCloseAndCallAction = this._handleCloseAndCallAction.bind(this);
    this._handleCloseButtonAlertArea = this._handleCloseButtonAlertArea.bind(
      this,
    );
    this._handleTimeoutForAutoclose = this._handleTimeoutForAutoclose.bind(
      this,
    );
    this._handleTwoButtonsAndVerticalLayout =
      this._handleTwoButtonsAndVerticalLayout.bind(
        this,
      );
    this._handleQueue = this._handleQueue.bind(this);
    this._handleQueueAdd = this._handleQueueAdd.bind(this);
    this._createAlertAreaRef = this._createAlertAreaRef.bind(this);
  }

  _handleDefault() {
    this.setState({
      alerts: [
        {
          content: 'AlertArea content',
        },
      ],
    });
  }

  _handleCloseButtonAlertArea() {
    this.setState({
      alerts: [
        {
          buttons: [
            {
              text: 'close',
              colorScheme: 'flatLight',
              action: () => {},
              closeAlert: true,
            },
          ],
          content: 'AlertArea content',
        },
      ],
      timeout: 0,
    });
  }

  _handleTwoButtonsAndVerticalLayout() {
    this.setState({
      alerts: [
        {
          buttons: [
            {
              text: 'close',
              colorScheme: 'flatLight',
              action: () => {},
              closeAlert: true,
            },
            {
              text: 'subscribe',
              colorScheme: 'primary',
              action: () => {},
              closeAlert: true,
            },
          ],
          content: 'Alert with vertical layout',
          vertical: true,
        },
      ],
    });
  }

  _handleTimeoutForAutoclose() {
    this.setState({
      alerts: [
        {
          content: 'AlertArea content 1',
          timeout: 2000,
        },
        {
          content: 'AlertArea content 2',
          timeout: 3000,
        },
      ],
    });
  }

  _handleCloseAndCallAction() {
    const afterClose = () => {
      this.setState({
        visibleNotification: true,
        textNotification: 'AlertArea closed',
      });
    };

    this.setState({
      alerts: [
        {
          content: 'AlertArea content',
          buttons: [
            {
              text: 'close',
              colorScheme: 'flatLight',
              action: () => {
                afterClose();
              },
              closeAlert: true,
            },
          ],
        },
      ],
    });
  }

  _handleCloseNotification() {
    this.setState({
      visibleNotification: false,
    });
  }

  _handleQueue() {
    this.setState({
      alerts: [
        {
          buttons: [
            {
              text: 'close',
              colorScheme: 'flatLight',
              action: () => {},
              closeAlert: true,
            },
          ],
          content: 'Alert #1 (default timeout)',
        },
        {
          buttons: [
            {
              text: 'close',
              colorScheme: 'flatLight',
              action: () => {},
              closeAlert: true,
            },
          ],
          content: 'Alert #2 (2 seconds timeout)',
          timeout: 2000,
        },
        {
          buttons: [
            {
              text: 'close',
              colorScheme: 'flatLight',
              action: () => {},
              closeAlert: true,
            },
          ],
          content: 'Alert #3 (1 second timeout)',
          timeout: 1000,
        },
      ],
    });
  }
  _createAlertAreaRef(ref) {
    this.alertArea = ref;
  }
  _handleQueueAdd() {
    this.alertArea.addToQueue({
      buttons: [
        {
          text: 'close',
          colorScheme: 'flatLight',
          action: () => {},
          closeAlert: true,
        },
      ],
      content: 'Next alert (2 seconds timeout)',
      timeout: 2000,
    });
  }
  render() {
    return (
      <RouteDemo {...this.props}>
        <DemoSnippet title="Default alert (autoclose, without buttons)">
          <DemoPreview>
            <Button text="show alert" onPress={this._handleDefault} />
          </DemoPreview>
          <DemoCode code={SnippetDefault} />
        </DemoSnippet>

        <DemoSnippet title="AlertArea without autoclose, with close button">
          <DemoPreview>
            <Button
              text="show alert"
              onPress={this._handleCloseButtonAlertArea}
            />
          </DemoPreview>
          <DemoCode code={SnippetWithCloseButton} />
        </DemoSnippet>

        <DemoSnippet title='AlertArea with vertical layout'>
          <DemoPreview>
            <Button
              text="show alert"
              onPress={this._handleTwoButtonsAndVerticalLayout}
            />
          </DemoPreview>
          <DemoCode code={SnippetWithTwoButtonsWithVerticalLayout} />
        </DemoSnippet>

        <DemoSnippet title="AlertArea with timeout for autoclose">
          <DemoPreview>
            <Button
              text="show alert"
              onPress={this._handleTimeoutForAutoclose}
            />
          </DemoPreview>
          <DemoCode code={SnippetWithTimeoutForAutoclose} />
        </DemoSnippet>

        <DemoSnippet title="AlertArea with close handler">
          <DemoPreview>
            <Button
              text="show alert"
              onPress={this._handleCloseAndCallAction}
            />
          </DemoPreview>
          <DemoCode code={SnippetWithCloseCallback} />
        </DemoSnippet>

        <DemoSnippet title="AlertArea queue">
          <DemoPreview>
            <Button text="show queue" onPress={this._handleQueue} />
            <Button text="add item to queue" onPress={this._handleQueueAdd} />
          </DemoPreview>
          <DemoCode code={SnippetWithQueue} />
        </DemoSnippet>

        <AlertArea
          buttons={this.state.buttons}
          alerts={this.state.alerts}
          ref={this._createAlertAreaRef}
        />
        <div>{this.state.textNotification}</div>
      </RouteDemo>
    );
  }
}

AlertAreaDemoRoute.displayName = 'AlertAreaDemoRoute';
