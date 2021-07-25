const path = require('path')

// module.exports 밖에서 가져다 쓸 수 있도록 내보낸다.
module.exports = {
  // __dirname = 지금 나의 (=파일) 경로
  // => webpack.config.js를 기준으로 아래의 경로 진입

  // entry 시작점
  entry: path.resolve(__dirname, './src/index.js'),
  // output 빌드 결과물을 내보내는 곳
  output: {
    filename: 'bundle.js',
    // 나를 기준으로 ./dist 폴더 안에 빌드 결과물을 생성할 것
    path: path.resolve(__dirname, 'dist'),
  },
  // 웹팩은 파일 가져올 수 있지만, 안의 코드 해석불가
  // 부가적인 loader(=예시, 파일 읽는 규칙들 추가할 수 있는 곳)
  // sass > css 변화, react > 순수 js 변화, ES6 > ES5 변화
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
}
