'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _main = require('./app/components/main.js');

var _main2 = _interopRequireDefault(_main);

var _bootstrapMin = require('../node_modules/bootstrap/dist/css/bootstrap.min.css');

var _bootstrapMin2 = _interopRequireDefault(_bootstrapMin);

var _bootstrapGridMin = require('../node_modules/bootstrap/dist/css/bootstrap-grid.min.css');

var _bootstrapGridMin2 = _interopRequireDefault(_bootstrapGridMin);

var _bootstrapMin3 = require('../node_modules/bootstrap/dist/js/bootstrap.min.js');

var _bootstrapMin4 = _interopRequireDefault(_bootstrapMin3);

require('./app/assets/styles/styles.scss');

var _fonts = require('./app/assets/styles/fonts.scss');

var _fonts2 = _interopRequireDefault(_fonts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react2.default.createElement(_main2.default, null), document.getElementById("app"));