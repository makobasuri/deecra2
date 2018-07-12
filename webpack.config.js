var path = require('path');

module.exports = {
  mode: 'development',
  entry: './public/js/main.js',
  output: {
    path: path.resolve(__dirname, 'public/js/dist'),
    filename: 'main.bundle.js'
  }
};
