'use strict';

import React, { Component } from 'react';
import {
  SelectBox,
  FormItem,
} from 'reactackle';

import {
  RouteDemo,
} from '../../components/Route/RouteStructure';

import {
  TestBox,
  DemoSnippet,
  DemoPreview,
  DemoCode,
} from '../../components/DemoSnippet/DemoSnippet';

import Snippet1 from './snippets/1.snippet';
import Snippet2 from './snippets/2.snippet';
import Snippet3 from './snippets/3.snippet';
import Snippet4 from './snippets/4.snippet';

const data = [
  { text: 'Option 1', value: 1 },
  { text: 'Option 2', value: 2 },
  { text: 'Option 3 - disabled', value: 3, disabled: true },
];

export class SelectBoxDemoRoute extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      value: 1,
    };
    
    this._handleChange = this._handleChange.bind(this);
  }
  
  _handleChange({ value }) {
    this.setState({
      value,
    });
  }
  
  render() {
    return (
      <RouteDemo {...this.props}>
        <DemoSnippet title="Default SelectBox">
          <DemoPreview>
            <TestBox title="Default">
              <TestBox>
                <SelectBox
                  value={this.state.value}
                  options={data}
                  placeholder={'Choose option...'}
                  onChange={this._handleChange}
                  label="Customized select box"
                />
              </TestBox>
              <TestBox spaced>
                <SelectBox
                  value={this.state.value}
                  options={data}
                  placeholder={'Choose option...'}
                  onChange={this._handleChange}
                  label="Native select box"
                  type="native"
                />
              </TestBox>
            </TestBox>
              
            <TestBox title="Bordered">
              <TestBox>
                <SelectBox
                  value={this.state.value}
                  options={data}
                  placeholder={'Choose option...'}
                  onChange={this._handleChange}
                  label="Customized select box"
                  bordered
                />
              </TestBox>
              <TestBox spaced>
                <SelectBox
                  value={this.state.value}
                  options={data}
                  placeholder={'Choose option...'}
                  onChange={this._handleChange}
                  label="Native select box"
                  type="native"
                  bordered
                />
              </TestBox>
            </TestBox>
          </DemoPreview>
          <DemoCode
            code={Snippet1}
          />
        </DemoSnippet>
  
        <DemoSnippet title="Label Position">
          <DemoPreview>
            <TestBox>
              <SelectBox
                value={this.state.value}
                options={data}
                placeholder={'Choose option...'}
                onChange={this._handleChange}
                label="label position: top"
              />
            </TestBox>
            <TestBox spaced>
              <SelectBox
                value={this.state.value}
                options={data}
                placeholder={'Choose option...'}
                onChange={this._handleChange}
                label="label position: side"
                labelPosition="side"
              />
            </TestBox>
          </DemoPreview>
          <DemoCode
            code={Snippet2}
          />
        </DemoSnippet>
  
        <DemoSnippet title="SelectBox size">
          <DemoPreview>
            <TestBox>
              <SelectBox
                value={this.state.value}
                options={data}
                placeholder={'Choose option...'}
                onChange={this._handleChange}
                label="Densed SelectBox"
                dense
              />
            </TestBox>
            <TestBox spaced>
              <SelectBox
                value={this.state.value}
                options={data}
                placeholder={'Choose option...'}
                onChange={this._handleChange}
                label="FullWidth SelectBox"
                fullWidth
              />
            </TestBox>
            <TestBox spaced>
              <SelectBox
                value={this.state.value}
                options={data}
                placeholder={'Choose option...'}
                onChange={this._handleChange}
                label="FullWidth & Dense SelectBox"
                fullWidth
                dense
              />
            </TestBox>
          </DemoPreview>
          <DemoCode
            code={Snippet3}
          />
        </DemoSnippet>
  
        <DemoSnippet title="SelectBox states">
          <DemoPreview>
            <TestBox title="Default">
              <FormItem>
                <SelectBox
                  value={this.state.value}
                  options={data}
                  placeholder={'Choose option...'}
                  onChange={this._handleChange}
                  label="SelectBox label"
                />
              </FormItem>
              <FormItem>
                <SelectBox
                  value={this.state.value}
                  options={data}
                  placeholder={'Choose option...'}
                  onChange={this._handleChange}
                  label="SelectBox bordered"
                  bordered
                />
              </FormItem>
            </TestBox>
            <TestBox spaced title="Disabled">
              <FormItem>
                <SelectBox
                  value={this.state.value}
                  options={data}
                  placeholder={'Choose option...'}
                  onChange={this._handleChange}
                  label="SelectBox label"
                  disabled
                />
              </FormItem>
              <FormItem>
                <SelectBox
                  value={this.state.value}
                  options={data}
                  placeholder={'Choose option...'}
                  onChange={this._handleChange}
                  label="SelectBox label"
                  disabled
                  bordered
                />
              </FormItem>
            </TestBox>
            <TestBox spaced title="Error">
              <FormItem>
                <SelectBox
                  value={this.state.value}
                  options={data}
                  placeholder={'Choose option...'}
                  onChange={this._handleChange}
                  label="SelectBox label"
                  colorScheme="error"
                />
              </FormItem>
              <FormItem>
                <SelectBox
                  value={this.state.value}
                  options={data}
                  placeholder={'Choose option...'}
                  onChange={this._handleChange}
                  label="SelectBox label"
                  colorScheme="error"
                  bordered
                />
              </FormItem>
            </TestBox>
            <TestBox spaced title="Success">
              <FormItem>
                <SelectBox
                  value={this.state.value}
                  options={data}
                  placeholder={'Choose option...'}
                  onChange={this._handleChange}
                  label="SelectBox label"
                  colorScheme="success"
                />
              </FormItem>
              <FormItem>
                <SelectBox
                  value={this.state.value}
                  options={data}
                  placeholder={'Choose option...'}
                  onChange={this._handleChange}
                  label="SelectBox label"
                  colorScheme="success"
                  bordered
                />
              </FormItem>
            </TestBox>
          </DemoPreview>
          <DemoCode
            code={Snippet4}
          />
        </DemoSnippet>
      </RouteDemo>
    );
  }
}

SelectBoxDemoRoute.displayName = 'SelectBoxDemoRoute';
