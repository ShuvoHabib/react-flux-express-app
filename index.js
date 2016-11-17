const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

const app = express();
const port = process.env.PORT || 8081;
const productRoutes = require('./server/routes/items');
const isDevelopment = process.argv.indexOf('--development') !== -1;

app.use(urlencodedParser);
app.use('/api/v1/products', productRoutes);

if (isDevelopment) {
  const webpack = require('webpack');
  const webpackConfig = require('./webpack.config.js');
  const compiler = webpack(webpackConfig);

  app.use(require('webpack-dev-middleware')(compiler, {
    hot: true,
    quiet: true,
    stats: {
      colors: true
    }
  }));
  app.use(require('webpack-hot-middleware')(compiler));
} else {
  app.use(express.static(__dirname + '/public'));
}

app.get('*', function (req, res) {
  res.render(__dirname + '/server/views/404.ejs');
});

app.listen(port);

console.log(`server started on port: ${port}`);
