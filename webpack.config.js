module.exports = {
  /*context: __dirname + "/www/js",*/
  entry: "./www/js/index.js",
  output: {
    path: __dirname + "/www",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css'
          //exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        loader: 'file'
      }
      /*{
        test: /\.png$/,
        loader: "url-loader",
        query: {
          mimetype: "image/png"
        }
      }*/
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ["node_modules"]
  }
};
