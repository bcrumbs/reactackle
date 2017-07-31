'use strict';

import React, { Component } from 'react';
import {
  RadioGroup,
  Checkbox,
  AutoPosition,
  recalculateAllAutoPosition,
} from 'reactackle';
import {
  RouteDemo,
} from '../../components/Route/RouteStructure';
import {
  DemoSnippet,
  DemoPreview,
  DemoCode,
  TestBox,
} from '../../components/DemoSnippet/DemoSnippet';
import Snippet0 from './snippets/0.snippet';

const boxStyle = {
  width: '60px',
  height: '60px',
  color: 'white',
  background: 'skyblue',
};
export class AutoPositionDemoRoute extends Component {
  constructor(props) {
    super(props);

    this.state = {
      domNode0: null,
      visible: true,
      positionX: 'left',
      positionY: 'top',
      type: 'outer',
      direction: 'horizontal',
      overflowMargin: -5,
      allowedShowByCenter: false,
      allowedSlideOnCurrentEdge: true,
      allowedSlideOnOppositeEdge: true,
    };

    this._saveRef0 = this._saveRef0.bind(this);
    this._handleRecalculate = this._handleRecalculate.bind(this);
    this._handleChangeType = this._handleChangeType.bind(this);
    this._handleChangePositionX = this._handleChangePositionX.bind(this);
    this._handleChangePositionY = this._handleChangePositionY.bind(this);
    this._handleChangeDirection = this._handleChangeDirection.bind(this);
    this._handleAllowedShowByCenter =
      this._handleAllowedShowByCenter.bind(this);
    this._handleAllowedSlideOnCurrentEdge =
      this._handleAllowedSlideOnCurrentEdge.bind(this);
    this._handleAllowedSlideOnOppositeEdge =
      this._handleAllowedSlideOnOppositeEdge.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this._handleRecalculate, false);
  }

  componentDidUpdate() {
    recalculateAllAutoPosition();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._handleRecalculate, false);
  }

  _handleRecalculate() {
    recalculateAllAutoPosition();
  }

  _handleAllowedShowByCenter({ value }) {
    this.setState({
      allowedShowByCenter: value,
    });
  }

  _handleAllowedSlideOnCurrentEdge({ value }) {
    this.setState({
      allowedSlideOnCurrentEdge: value,
    });
  }

  _handleAllowedSlideOnOppositeEdge({ value }) {
    this.setState({
      allowedSlideOnOppositeEdge: value,
    });
  }

  _handleChangePositionX({ value }) {
    this.setState({
      positionX: value,
    });
  }

  _handleChangePositionY({ value }) {
    this.setState({
      positionY: value,
    });
  }

  _handleChangeDirection({ value }) {
    this.setState({
      direction: value,
    });
  }

  _handleChangeType({ value }) {
    this.setState({
      type: value,
    });
  }

  _renderContainer0() {
    const content = (
      <div style={boxStyle} />
    );

    return (
      <AutoPosition
        parent={this.state.domNode0}
        positionX={this.state.positionX}
        positionY={this.state.positionY}
        type={this.state.type}
        direction={this.state.direction}
        allowedShowByCenter={this.state.allowedShowByCenter}
        allowedSlideOnCurrentEdge={this.state.allowedSlideOnCurrentEdge}
        allowedSlideOnOppositeEdge={this.state.allowedSlideOnOppositeEdge}
        visible={this.state.visible}
      >
        {content}
      </AutoPosition>
    );
  }

  _saveRef0(domNode0) {
    this.setState({ domNode0 });
  }

  render() {
    const container0 = this._renderContainer0();

    const styleWrapper = {
      border: '1px solid #ccc',
      width: '300px',
      height: '300px',
      margin: '0 auto',
      marginBottom: '20px',
      flexShrink: '0',
    };
  
    const headerStyle = {
      fontWeight: 'bold',
      marginBottom: '8px',
      lineHeight: '1.5',
    };
  
    const optionsStyle = {
      margin: '0 20px 0 0',
      minWidth: '110px',
    };

    return (
      <RouteDemo {...this.props}>
        <DemoSnippet title="Custom AutoPosition">
          <DemoPreview>
            <p style={{ maxWidth: '40em', marginBottom: '24px' }}>AutoPosition
              component let you position any component inside window boundaries.
              Change window size to see how box changes its position to fit the
              window.</p>
            
            <div style={styleWrapper} ref={this._saveRef0} />
            
            <TestBox flex spaced>
              <div style={optionsStyle}>
                <div style={headerStyle}>Type</div>
                <RadioGroup
                  defaultValue={this.state.type}
                  options={[
                    { value: 'outer', text: 'outer' },
                    { value: 'inner', text: 'inner' },
                  ]}
                  onChange={this._handleChangeType}
                />
              </div>
              <div style={optionsStyle}>
                <div style={headerStyle}>PositionX</div>
                <RadioGroup
                  defaultValue={this.state.positionX}
                  options={[
                    { value: 'left', text: 'left' },
                    { value: 'right', text: 'right' },
                  ]}
                  onChange={this._handleChangePositionX}
                />
              </div>
              <div style={optionsStyle}>
                <div style={headerStyle}>PositionY</div>
                <RadioGroup
                  defaultValue={this.state.positionY}
                  options={[
                    { value: 'top', text: 'top' },
                    { value: 'bottom', text: 'bottom' },
                  ]}
                  onChange={this._handleChangePositionY}
                />
              </div>
              <div style={optionsStyle}>
                <div style={headerStyle}>Direction (only type: outer)</div>
                <RadioGroup
                  defaultValue={this.state.direction}
                  options={[
                    { value: 'horizontal', text: 'horizontal' },
                    { value: 'vertical', text: 'vertical' },
                  ]}
                  onChange={this._handleChangeDirection}
                />
              </div>
              
              <div style={optionsStyle}>
                <div style={headerStyle}>Other</div>
                <Checkbox
                  label="allowedShowByCenter"
                  checked={this.state.allowedShowByCenter}
                  onChange={this._handleAllowedShowByCenter}
                />
                <Checkbox
                  label="allowedSlideOnCurrentEdge"
                  checked={this.state.allowedSlideOnCurrentEdge}
                  onChange={this._handleAllowedSlideOnCurrentEdge}
                />
                <Checkbox
                  label="allowedSlideOnOppositeEdge"
                  checked={this.state.allowedSlideOnOppositeEdge}
                  onChange={this._handleAllowedSlideOnOppositeEdge}
                />
              </div>
            </TestBox>
          </DemoPreview>
          <DemoCode
            code={Snippet0}
          />
        </DemoSnippet>

        {container0}
      </RouteDemo>
    );
  }
}

AutoPositionDemoRoute.displayName = 'AutoPositionDemoRoute';
