const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',           
  output: {
    path: path.resolve(__dirname, 'dist'),  
    filename: 'bundle.js'                   
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,                  
        exclude: /node_modules/,          
        use: 'babel-loader'              
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'       
    })
  ],
  devServer: {
    static: path.join(__dirname, 'dist'), 
    open: true,                           
    port: 3000                            
  },
  resolve: {
  extensions: ['.js', '.jsx', '.ts', '.tsx']
  }
};
