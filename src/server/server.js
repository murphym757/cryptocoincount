const express = require('express'),
  cors = require('cors'),
  app = express(),
  path = require('path'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  session = require('express-session'),
  MongoStore = require('connect-mongo')(session),
  methodOverride = require('method-override'),
  webpack = require('webpack'),
  webpackMiddleware = require('webpack-dev-middleware'),
  webpackConfig = require('../../webpack.config.js'),
  port = process.env.PORT || 3000;

  app.use(webpackMiddleware(
    webpack(webpackConfig),
    { publicPath: '/' }
));


var whitelist = ['http://localhost:3000/', 'https://cryptocoincount.herokuapp.com/']
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* Mongoose 
// Mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(uri).then(
    () => {console.log('Database is connected')},
    err => {console.log('Cannnot connect to the database' + err)}
);
//mongoose.connect('mongodb://localhost/Postsdb'); //change Postsdb to whatever you'd like to name your database
const db = mongoose.connection;

// Mongo Error
db.on('error', console.error.bind(console, 'connection error:'));

// use sessions for tracking logins
app.use(session({
    secret: 'react-template',
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
        mongooseConnection: db
    })
}));
*/

app.use(express.static(path.join(__dirname + './../../')));
app.get('*', cors(corsOptionsDelegate), function (req, res) {
    res.sendFile(path.resolve(__dirname + './../../src/index.html'));
});

app.listen(port, () => {
    console.log('Server started on port ' + port)
});