'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _cryptoLinks = require('../design/cryptoLinks.js');

var _cryptoLinks2 = _interopRequireDefault(_cryptoLinks);

var _logo = require('../design/logo.js');

var _logo2 = _interopRequireDefault(_logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This page purposely blank
var Navigation = function (_Component) {
    _inherits(Navigation, _Component);

    function Navigation() {
        _classCallCheck(this, Navigation);

        return _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).apply(this, arguments));
    }

    _createClass(Navigation, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { 'class': 'container-fluid naviLinks' },
                _react2.default.createElement(
                    'div',
                    { 'class': 'row' },
                    _react2.default.createElement(
                        'div',
                        { 'class': 'col-6 btc-Icon' },
                        _react2.default.createElement(
                            'div',
                            { 'class': 'row' },
                            _react2.default.createElement(
                                'div',
                                { 'class': 'col-12' },
                                _react2.default.createElement(
                                    _reactRouterDom.Link,
                                    { to: '/litecoin', style: { textDecoration: 'none' } },
                                    _react2.default.createElement('i', { 'class': 'cf cf-btc btc-links' })
                                )
                            ),
                            _react2.default.createElement(
                                'h3',
                                { 'class': 'col-12 btc-link-name' },
                                'Bitcoin'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { 'class': 'col-6 dash-Icon' },
                        _react2.default.createElement(
                            'div',
                            { 'class': 'row' },
                            _react2.default.createElement(
                                'div',
                                { 'class': 'col-12' },
                                _react2.default.createElement(
                                    _reactRouterDom.Link,
                                    { to: '/litecoin', style: { textDecoration: 'none' } },
                                    _react2.default.createElement('i', { 'class': 'cf cf-dash' })
                                )
                            ),
                            _react2.default.createElement(
                                'h3',
                                { 'class': 'col-12 dash-link-name' },
                                'Dash'
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { 'class': 'row pt-2 pb-2' },
                    _react2.default.createElement(
                        'div',
                        { 'class': 'col-6 eth-Icon' },
                        _react2.default.createElement(
                            'div',
                            { 'class': 'row' },
                            _react2.default.createElement(
                                'div',
                                { 'class': 'col-12' },
                                _react2.default.createElement(
                                    _reactRouterDom.Link,
                                    { to: '/litecoin', style: { textDecoration: 'none' } },
                                    _react2.default.createElement('i', { 'class': 'cf cf-eth' })
                                )
                            ),
                            _react2.default.createElement(
                                'h3',
                                { 'class': 'col-12 eth-link-name' },
                                'Ethereum'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { 'class': 'col-6 ltc-Icon' },
                        _react2.default.createElement(
                            'div',
                            { 'class': 'row' },
                            _react2.default.createElement(
                                'div',
                                { 'class': 'col-12' },
                                _react2.default.createElement(
                                    _reactRouterDom.Link,
                                    { to: '/litecoin', style: { textDecoration: 'none' } },
                                    _react2.default.createElement('i', { 'class': 'cf cf-ltc' })
                                )
                            ),
                            _react2.default.createElement(
                                'h3',
                                { 'class': 'col-12 ltc-link-name' },
                                'Litecoin'
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { 'class': 'row' },
                    _react2.default.createElement(
                        'div',
                        { 'class': 'col-6 xmr-Icon' },
                        _react2.default.createElement(
                            'div',
                            { 'class': 'row' },
                            _react2.default.createElement(
                                'div',
                                { 'class': 'col-12' },
                                _react2.default.createElement(
                                    _reactRouterDom.Link,
                                    { to: '/litecoin', style: { textDecoration: 'none' } },
                                    _react2.default.createElement('i', { 'class': 'cf cf-xmr' })
                                )
                            ),
                            _react2.default.createElement(
                                'h3',
                                { 'class': 'col-12 xmr-link-name' },
                                'Monero'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { 'class': 'col-6 xrp-Icon' },
                        _react2.default.createElement(
                            'div',
                            { 'class': 'row' },
                            _react2.default.createElement(
                                'div',
                                { 'class': 'col-12' },
                                _react2.default.createElement(
                                    _reactRouterDom.Link,
                                    { to: '/litecoin', style: { textDecoration: 'none' } },
                                    _react2.default.createElement('i', { 'class': 'cf cf-xrp' })
                                )
                            ),
                            _react2.default.createElement(
                                'h3',
                                { 'class': 'col-12 xrp-link-name' },
                                'Ripple'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Navigation;
}(_react.Component);

exports.default = Navigation;