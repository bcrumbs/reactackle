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
    
    this.state = {};
    
    this._handleChange = this._handleChange.bind(this);
  }
  
  _handleChange(key) {
    return ({ value }) => this.setState({ [key]: value });
  }

  _getValue(key) {
    return this.state[key] ? this.state[key] : 1;
  }
  
  render() {
    return (
      <RouteDemo {...this.props}>
        <DemoSnippet title="Default SelectBox">
          <DemoPreview>
            <TestBox title="Default">
              <TestBox>
                <SelectBox
                  value={this._getValue(0)}
                  options={data}
                  placeholder={'Choose option...'}
                  onChange={this._handleChange(0)}
                  label="Customized select box"
                />
              </TestBox>
              <TestBox spaced>
                <SelectBox
                  value={this._getValue(1)}
                  options={data}
                  placeholder={'Choose option...'}
                  onChange={this._handleChange(1)}
                  label="Native select box"
                  type="native"
                />
              </TestBox>
            </TestBox>
              
            <TestBox title="Bordered">
              <TestBox>
                <SelectBox
                  value={this._getValue(2)}
                  options={data}
                  placeholder={'Choose option...'}
                  onChange={this._handleChange(2)}
                  label="Customized select box"
                  bordered
                />
              </TestBox>
              <TestBox spaced>
                <SelectBox
                  value={this._getValue(3)}
                  options={data}
                  placeholder={'Choose option...'}
                  onChange={this._handleChange(3)}
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
                value={this._getValue(4)}
                options={data}
                placeholder={'Choose option...'}
                onChange={this._handleChange(4)}
                label="label position: top"
              />
            </TestBox>
            <TestBox spaced>
              <SelectBox
                value={this._getValue(5)}
                options={data}
                placeholder={'Choose option...'}
                onChange={this._handleChange(5)}
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
                value={this._getValue(6)}
                options={data}
                placeholder={'Choose option...'}
                onChange={this._handleChange(6)}
                label="Densed SelectBox"
                dense
              />
            </TestBox>
            <TestBox spaced>
              <SelectBox
                value={this._getValue(7)}
                options={data}
                placeholder={'Choose option...'}
                onChange={this._handleChange(7)}
                label="FullWidth SelectBox"
                fullWidth
              />
            </TestBox>
            <TestBox spaced>
              <SelectBox
                value={this._getValue(8)}
                options={data}
                placeholder={'Choose option...'}
                onChange={this._handleChange(8)}
                label="FullWidth & Dense SelectBox"
                fullWidth
                dense
              />
            </TestBox>
            <TestBox>
              <SelectBox
                value={this._getValue(17)}
                options={data}
                maxOptionsVisible={2.25}
                placeholder={'Choose option...'}
                onChange={this._handleChange(17)}
                label="With restricted visible options"
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
                  value={this._getValue(9)}
                  options={data}
                  placeholder={'Choose option...'}
                  onChange={this._handleChange(9)}
                  label="SelectBox label"
                />
              </FormItem>
              <FormItem>
                <SelectBox
                  value={this._getValue(10)}
                  options={data}
                  placeholder={'Choose option...'}
                  onChange={this._handleChange(10)}
                  label="SelectBox bordered"
                  bordered
                />
              </FormItem>
            </TestBox>
            <TestBox spaced title="Disabled">
              <FormItem>
                <SelectBox
                  value={this._getValue(11)}
                  options={data}
                  placeholder={'Choose option...'}
                  onChange={this._handleChange(11)}
                  label="SelectBox label"
                  disabled
                />
              </FormItem>
              <FormItem>
                <SelectBox
                  value={this._getValue(12)}
                  options={data}
                  placeholder={'Choose option...'}
                  onChange={this._handleChange(12)}
                  label="SelectBox label"
                  disabled
                  bordered
                />
              </FormItem>
            </TestBox>
            <TestBox spaced title="Error">
              <FormItem>
                <SelectBox
                  value={this._getValue(13)}
                  options={data}
                  placeholder={'Choose option...'}
                  onChange={this._handleChange(13)}
                  label="SelectBox label"
                  colorScheme="error"
                />
              </FormItem>
              <FormItem>
                <SelectBox
                  value={this._getValue(14)}
                  options={data}
                  placeholder={'Choose option...'}
                  onChange={this._handleChange(14)}
                  label="SelectBox label"
                  colorScheme="error"
                  bordered
                />
              </FormItem>
            </TestBox>
            <TestBox spaced title="Success">
              <FormItem>
                <SelectBox
                  value={this._getValue(15)}
                  options={data}
                  placeholder={'Choose option...'}
                  onChange={this._handleChange(15)}
                  label="SelectBox label"
                  colorScheme="success"
                />
              </FormItem>
              <FormItem>
                <SelectBox
                  value={this._getValue(16)}
                  options={data}
                  placeholder={'Choose option...'}
                  onChange={this._handleChange(16)}
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
