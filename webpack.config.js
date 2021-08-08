const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// module.exports 밖에서 가져다 쓸 수 있도록 내보낸다.
module.exports = {
  // __dirname = 지금 나의 (=파일) 경로
  // => webpack.config.js를 기준으로 아래의 경로 진입

  // entry 시작점
  entry: path.resolve(__dirname, './src/index.js'),
  // output 빌드 결과물을 내보내는 곳
  output: {
    filename: 'bundle.[hash].js',
    // 나를 기준으로 ./dist 폴더 안에 빌드 결과물을 생성할 것
    path: path.resolve(__dirname, 'dist'),
  },
  // 웹팩은 파일 가져올 수 있지만, 안의 코드 해석불가
  // 부가적인 loader(=예시, 파일 읽는 규칙들 추가할 수 있는 곳)
  // sass > css 변화, react > 순수 js 변화, ES6 > ES5 변화
  module: {
    rules: [
      {
        test: /\.(js)$/, //js로 끝나는 파일들을 읽어옴
        use: 'babel-loader', //읽어온 파일을 babel로 변화
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'], //오른쪽에서 왼쪽으로 읽음
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', //어떤 html 파일을 기준으로 동작을 할 것인가
      filename: './index.html', //이름을 어떻게 내보낼 것인가. ouput path를 따라간다
    }),
    new MiniCssExtractPlugin({ filename: 'css/style.css' }), //css 파일만 따로 추출
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true, // 저장했을 때 바로 반영해줌
    open: true, //알아서 devserver 열어줌
  },
}
