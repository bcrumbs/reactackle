'use strict';

import React, { Component } from 'react';
import {
  InputAutocomplete,
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


import SnippetDefault from './snippets/0.snippet';

const data = [
  { value: 'Option 1' },
  { value: 'Option 2' },
  { value: 'Option 3' },
  { value: 'Option 4' },
  { value: 'Option 5' },
  { value: 'Option 6' },
];

export class InputAutocompleteDemoRoute extends Component {
  constructor() {
    super();
    
    this.state = {
      options1: data,
      options2: data,
    };
    
    this._handleChangeSnippet1 = this._handleChangeSnippet1.bind(this);
    this._handleChangeSnippet2 = this._handleChangeSnippet2.bind(this);
  }
  
  _filterOptions(value) {
    return data.filter(
      option => option.value.toLowerCase().includes(value.toLowerCase()),
    );
  }
  
  _handleChangeSnippet1(options) {
    this._handleChange({
      snippet: 'options1',
      ...options,
    });
  }
  
  _handleChangeSnippet2(options) {
    this._handleChange({
      snippet: 'options2',
      ...options,
    });
  }
  
  _handleChange({ snippet, value, option, complete }) {
    if (option || complete) return;
    
    this.setState({
      [snippet]: this._filterOptions(value),
    });
  }
  
  render() {
    return (
      <RouteDemo {...this.props}>
        <DemoSnippet title="InputAutocomplete styles">
          <DemoPreview>
            <TestBox padding>
              <FormItem>
                <InputAutocomplete
                  onChange={this._handleChangeSnippet1}
                  options={this.state.options1}
                  placeholder="Default InputAutocomplete"
                />
              </FormItem>
            </TestBox>
          </DemoPreview>
          <DemoCode
            code={SnippetDefault}
          />
        </DemoSnippet>
      </RouteDemo>
    );
  }
}

InputAutocompleteDemoRoute.displayName = 'InputAutocompleteDemoRoute';
