const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  devtool: 'inline-source-map',

  entry: './src/index.ts',

  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: './assets/[base]',
  },

  module: {
    rules: [
      {
        test: /\.[tj]s$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },

  resolve: {
    alias: {
    type: path.resolve(__dirname, 'src/type.ts'),
    API: path.resolve(__dirname, 'src/API/'),
    utils: path.resolve(__dirname, 'src/utils'),
    store: path.resolve(__dirname, 'src/store'),
    pages: path.resolve(__dirname, 'src/pages/'),
    rerenderService: path.resolve(__dirname, 'src/rerenderService'),
    shared: path.resolve(__dirname, 'src/shared/'),
    asset: path.resolve(__dirname, 'src/asset/'),
  },
    extensions: ['.ts', '.js', 'scss']
  },

  mode: "development",

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    })
  ],

  devServer: {
    open: true,
    contentBase: path.join(__dirname, 'dist'),
    port: 8080,
    historyApiFallback: true,
  },

};
