'use strict';

import React, { Component } from 'react';
import { Button, Dialog, IconSvg } from 'reactackle';
import { RouteDemo } from '../../components/Route/RouteStructure';
import {
  DemoSnippet,
  DemoPreview,
  DemoCode,
} from '../../components/DemoSnippet/DemoSnippet';
import SnippetDefault from './snippets/1.snippet';
import SnippetButtons from './snippets/2.snippet';
import SnippetFullPack from './snippets/3.snippet';

export class DialogDemoRoute extends Component {
  constructor() {
    super();

    this.state = {
      showDialogOne: false,
      showDialogTwo: false,
      showDialogThree: false,
    };

    this._handleDialogClose = this._handleDialogClose.bind(this);
    this._handleDialogOne = this._handleDialogOne.bind(this);
    this._handleDialogTwo = this._handleDialogTwo.bind(this);
    this._handleDialogThree = this._handleDialogThree.bind(this);
  }

  _handleDialogOne() {
    this.setState({
      showDialogOne: true,
    });
  }

  _handleDialogTwo() {
    this.setState({
      showDialogTwo: true,
    });
  }

  _handleDialogThree() {
    this.setState({
      showDialogThree: true,
    });
  }

  _handleDialogClose() {
    this.setState({
      showDialogOne: false,
      showDialogTwo: false,
      showDialogThree: false,
    });
  }

  render() {
    return (
      <RouteDemo {...this.props}>
        <DemoSnippet title="Dialog Example">
          <DemoPreview>
            <Button text="Show dialog" onPress={this._handleDialogOne} />
            <Dialog
              open={this.state.showDialogOne}
              onClose={this._handleDialogClose}
              haveCloseButton
              title="Simple dialog"
            >
              <p>some dialog content</p>
            </Dialog>
          </DemoPreview>
          <DemoCode code={SnippetDefault} />
        </DemoSnippet>

        <DemoSnippet title="Dialog with Buttons">
          <DemoPreview>
            <Button text="Show dialog" onPress={this._handleDialogTwo} />
            <Dialog
              open={this.state.showDialogTwo}
              onClose={this._handleDialogClose}
              title="Simple dialog"
              haveCloseButton
              buttons={[{ text: 'button 1' }, { text: 'button 2' }]}
            >
              <p>some dialog content</p>
            </Dialog>
          </DemoPreview>
          <DemoCode code={SnippetButtons} />
        </DemoSnippet>

        <DemoSnippet title="Dialog Custom">
          <DemoPreview>
            <Button text="Show dialog" onPress={this._handleDialogThree} />
            <Dialog
              open={this.state.showDialogThree}
              onClose={this._handleDialogClose}
              backdrop
              scrollable
              haveCloseButton
              title="Sample dialog"
              subtitle="Dialog subtitle"
              minWidth={240}
              dialogContentFlex
              regionAsideShow
              regionAside={<IconSvg />}
            >
              <div>
                <p>
                  <strong>
                    Some extremely long Dialog content. Compress window height
                    to see differences.
                  </strong>
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                  justo. Nullam dictum felis eu pede mollis pretium. Integer
                  tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
                  vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                  consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                  dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
                  nulla ut metus varius laoreet. Quisque rutrum. Aenean
                  imperdiet.
                </p>
                <p>
                  Etiam ultricies nisi vel augue. Curabitur ullamcorper
                  ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus,
                  tellus eget condimentum rhoncus, sem quam semper libero, sit
                  amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit
                  vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio
                  et ante tincidunt tempus. Donec vitae sapien ut libero
                  venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget
                  eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit
                  amet nibh. Donec sodales sagittis magna. Sed consequat, leo
                  eget bibendum sodales, augue velit cursus nunc. Lorem ipsum
                  dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
                  et magnis dis parturient montes, nascetur ridiculus mus. Donec
                  quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                  Nulla consequat massa quis enim. Donec pede justo, fringilla
                  vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus
                  ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis
                  eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                  Vivamus elementum semper nisi. Aenean vulputate eleifend
                  tellus. Aenean leo ligula, porttitor eu, consequat vitae,
                  eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra
                  quis, feugiat a, tellus. Phasellus viverra nulla ut metus
                  varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam
                  ultricies nisi vel augue. Curabitur ullamcorper ultricies
                  nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus
                  eget condimentum rhoncus, sem quam semper libero, sit amet
                  adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel,
                  luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et
                  ante tincidunt tempus. Donec vitae sapien ut libero venenatis
                  faucibus. Nullam quis ante. Etiam sit amet orci eget eros
                  faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet
                  nibh. Donec sodales sagittis magna. Sed consequat, leo eget
                  bibendum sodales, augue velit cursus nunc. Lorem ipsum dolor
                  sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                  eget dolor. Aenean massa. Cum sociis natoque penatibus et
                  magnis dis parturient montes, nascetur ridiculus mus. Donec
                  quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                  Nulla consequat massa quis enim. Donec pede justo, fringilla
                  vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus
                  ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis
                  eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                  Vivamus elementum semper nisi. Aenean vulputate eleifend
                  tellus. Aenean leo ligula, porttitor eu, consequat vitae,
                  eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra
                  quis, feugiat a, tellus. Phasellus viverra nulla ut metus
                  varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam
                  ultricies nisi vel augue. Curabitur ullamcorper ultricies
                  nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus
                  eget condimentum rhoncus, sem quam semper libero, sit amet
                  adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel,
                  luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et
                  ante tincidunt tempus. Donec vitae sapien ut libero venenatis
                  faucibus. Nullam quis ante. Etiam sit amet orci eget eros
                  faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet
                  nibh. Donec sodales sagittis magna. Sed consequat, leo eget
                  bibendum sodales, augue velit cursus nunc
                </p>
              </div>
            </Dialog>
          </DemoPreview>
          <DemoCode code={SnippetFullPack} />
        </DemoSnippet>
      </RouteDemo>
    );
  }
}

DialogDemoRoute.displayName = 'DialogDemoRoute';
