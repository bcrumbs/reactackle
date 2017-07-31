'use strict';

const path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

const createAliases = packagesNames => {
  const alias = {};
  packagesNames.forEach(name => {
    alias[name] = path.resolve(__dirname, `packages/${name}/src/index.js`);
  });
  return alias;
};

const packagesNames = [
  'reactackle',
  // 'reactackle-app',
  // 'reactackle-autoposition',
  // 'reactackle-button',
  // 'reactackle-card',
  // 'reactackle-checkbox',
  // 'reactackle-core',
  // 'reactackle-dialog',
  // 'reactackle-form',
  // 'reactackle-grid',
  // 'reactackle-header',
  // 'reactackle-icon',
  // 'reactackle-input-autocomplete',
  // 'reactackle-radio-group',
  // 'reactackle-selectbox',
  // 'reactackle-sidebar',
  // 'reactackle-tabs',
  // 'reactackle-text-field',
  // 'reactackle-toggle-button',
  // 'reactackle-tooltip',
  // 'reactackle-tooltip-icon',
];

const mainConfig = {
  context: path.join(__dirname, 'demo'),

  entry: './index.js',

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: '/',
  },

  externals: {
    cheerio: 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx'],
    alias: createAliases(packagesNames),
  },

  resolveLoader: {
    modules: ['node_modules'],
    extensions: ['.js'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Reactackle demo',
      template: 'index.ejs',
      inject: 'body',
      favicon: path.resolve(__dirname, 'demo', 'static', 'favicon.png'),
      hash: true,
    }),
  ],

  devServer: {
    port: 8090,
    contentBase: 'dist/',
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.snippet$/,
        loaders: [
          'raw-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          // eslint-disable-next-line max-len
          'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false',
        ],
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
    ],
  },
};

const createHeaderSnippetConfig = ({ snippetPath, bundleName, htmlName }) => ({
  entry: path.join(
    __dirname,
    snippetPath,
  ),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: bundleName,
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'prop-types': 'PropTypes',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: htmlName,
      template: path.join(__dirname, 'demo', 'index.ejs'),
    }),
  ],
  resolve: mainConfig.resolve,
  module: mainConfig.module,
});

module.exports = [
  mainConfig,
  createHeaderSnippetConfig({ snippetPath: 'demo/routes/header/snippets/snippet0', bundleName: 'header-component-0.js', htmlName: 'header0.html' }),
  createHeaderSnippetConfig({ snippetPath: 'demo/routes/header/snippets/snippet1', bundleName: 'header-component-1.js', htmlName: 'header1.html' }),
  createHeaderSnippetConfig({ snippetPath: 'demo/routes/header/snippets/snippet2', bundleName: 'header-component-2.js', htmlName: 'header2.html' }),
];
