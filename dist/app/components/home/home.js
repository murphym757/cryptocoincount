'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _navigation = require('../design/navigation.js');

var _navigation2 = _interopRequireDefault(_navigation);

var _litecoin = require('../cryptocurrencies/litecoin.js');

var _litecoin2 = _interopRequireDefault(_litecoin);

var _logo = require('../design/logo.js');

var _logo2 = _interopRequireDefault(_logo);

var _colorGrid = require('../design/colorGrid.js');

var _colorGrid2 = _interopRequireDefault(_colorGrid);

var _cryptoLinks = require('../design/cryptoLinks.js');

var _cryptoLinks2 = _interopRequireDefault(_cryptoLinks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
    _inherits(Home, _Component);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactRouterDom.BrowserRouter,
                null,
                _react2.default.createElement(
                    'div',
                    { 'class': 'container' },
                    _react2.default.createElement(_logo2.default, null),
                    _react2.default.createElement(_cryptoLinks2.default, null),
                    _react2.default.createElement(
                        _reactRouterDom.Switch,
                        null,
                        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _navigation2.default }),
                        _react2.default.createElement(_reactRouterDom.Route, { path: '/litecoin', component: _litecoin2.default })
                    ),
                    _react2.default.createElement(_colorGrid2.default, null)
                )
            );
        }
    }]);

    return Home;
}(_react.Component);

exports.default = Home;