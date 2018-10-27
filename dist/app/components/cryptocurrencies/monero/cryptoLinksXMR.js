'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CryptoLinksXMR = function (_Component) {
    _inherits(CryptoLinksXMR, _Component);

    function CryptoLinksXMR() {
        _classCallCheck(this, CryptoLinksXMR);

        return _possibleConstructorReturn(this, (CryptoLinksXMR.__proto__ || Object.getPrototypeOf(CryptoLinksXMR)).apply(this, arguments));
    }

    _createClass(CryptoLinksXMR, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { 'class': 'container pb-3 pt-3' },
                _react2.default.createElement(
                    'div',
                    { 'class': 'row' },
                    _react2.default.createElement(
                        'div',
                        { 'class': 'col-2' },
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/bitcoin', style: { textDecoration: 'none' } },
                            _react2.default.createElement(
                                'div',
                                { 'class': 'btc-notActiveLink' },
                                _react2.default.createElement('i', { 'class': 'cf cf-btc' })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { 'class': 'col-2' },
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/dash', style: { textDecoration: 'none' } },
                            _react2.default.createElement(
                                'div',
                                { 'class': 'dash-notActiveLink' },
                                _react2.default.createElement('i', { 'class': 'cf cf-dash' })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { 'class': 'col-2' },
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/ethereum', style: { textDecoration: 'none' } },
                            _react2.default.createElement(
                                'div',
                                { 'class': 'eth-notActiveLink' },
                                _react2.default.createElement('i', { 'class': 'cf cf-eth' })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { 'class': ' col-2' },
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/litecoin', style: { textDecoration: 'none' } },
                            _react2.default.createElement(
                                'div',
                                { 'class': 'ltc-notActiveLink' },
                                _react2.default.createElement('i', { 'class': 'cf cf-ltc' })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { 'class': 'col-2' },
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/monero', style: { textDecoration: 'none' } },
                            _react2.default.createElement(
                                'div',
                                { 'class': 'xmr-activeLink' },
                                _react2.default.createElement('i', { 'class': 'cf cf-xmr' })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { 'class': 'col-2' },
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/ripple', style: { textDecoration: 'none' } },
                            _react2.default.createElement(
                                'div',
                                { 'class': 'xrp-notActiveLink' },
                                _react2.default.createElement('i', { 'class': 'cf cf-xrp' })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return CryptoLinksXMR;
}(_react.Component);

exports.default = CryptoLinksXMR;