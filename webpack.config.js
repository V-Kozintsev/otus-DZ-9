const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'production', // Указываем режим разработки
  entry: './src/index.js', // Исправленный путь к вашему основному файлу
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js', // Исправленное имя выходного файла
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html', // Укажите свой HTML-шаблон
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './public/article.html', // Шаблон для страницы статьи
      filename: 'article.html', // Имя выходного файла
    }),
    new MiniCssExtractPlugin({
      filename: './css/style.css', // Имя выходного файла для CSS
      chunkFilename: '[id].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              // параметры по желанию
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader, // Извлечение CSS
          'css-loader', // Обработка CSS
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Папка для сервированных статических файлов
    },
    compress: true,
    port: 9000,
    hot: true,
    open: true,
    client: {
      overlay: true, // Показывает ошибки в виде оверлея
    },
  },
};
