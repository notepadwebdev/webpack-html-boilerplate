const path = require('path')
const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const generateHTMLPlugins = () => glob.sync('./src/**/*.html').map(
  dir => new HtmlWebpackPlugin({
    filename: path.basename(dir), // Output
    template: dir, // Input
    minify: false,
  }),
);

module.exports = {
  entry: [
    './src/js/index.js', 
    './src/scss/main.scss'
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.html$/,
        loader: 'raw-loader',
      },
      {
        test: /\.(pdf|gif|png|jpe?g|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    ...generateHTMLPlugins(),    
  ],
}
