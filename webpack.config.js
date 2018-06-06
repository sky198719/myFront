const path = require('path')
module.exports = {
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react'],
          plugins: ['@babel/plugin-proposal-class-properties']
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' }, 
          { loader: 'css-loader' },
          { loader: 'less-loader' }
        ]
      }
    ]
  }
}