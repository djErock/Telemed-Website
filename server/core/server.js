const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('../../webpack.config.js');
const options = {
  contentBase: './dist',
  hot: true
};

var app = require('express')();
var cors = require('cors');
var bodyParser = require('body-parser')

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next();
});
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

const auth = require("../controllers/authenticate.js");
app.post('/api/login', function (req, resp) {
  auth.login(req, resp);
});

const companies = require("../controllers/company.js");
app.get('/api/companies', function (req, res) {
  companies.getCompanyList(req, res);
});

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

app.listen(5000, () => {
  console.log('dev server listening on port 5000');
});