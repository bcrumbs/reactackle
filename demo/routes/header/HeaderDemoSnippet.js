import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const style = {
  height: '500px',
  width: '100%',
  border: '1px',
};

const propTypes = {
  snippetNum: PropTypes.number.isRequired,
};

export default class HeaderDemoSnippet extends Component {
  constructor(props) {
    super(props);

    this._iframeElement = null;

    this._saveRef = this._saveRef.bind(this);
  }

  componentDidMount() {
    this._iframeElement.contentWindow.React = React;
    this._iframeElement.contentWindow.ReactDOM = ReactDOM;
    this._iframeElement.contentWindow.PropTypes = PropTypes;
  }

  _saveRef(ref) {
    this._iframeElement = ref;
  }

  render() {
    return (
      <div className="demo-iframe-holder">
        <iframe
          ref={this._saveRef}
          src={`/header${this.props.snippetNum}.html`}
          style={style}
        />
      </div>
    );
  }
}

HeaderDemoSnippet.propTypes = propTypes;
