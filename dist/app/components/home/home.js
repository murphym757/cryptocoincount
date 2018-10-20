'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _cryptoPage = require('../cryptocurrencies/cryptoPage.js');

var _cryptoPage2 = _interopRequireDefault(_cryptoPage);

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
                'div',
                { 'class': 'container pt-3' },
                _react2.default.createElement(
                    'div',
                    { 'class': 'card' },
                    _react2.default.createElement(
                        'div',
                        { 'class': 'app-title' },
                        _react2.default.createElement('img', { 'class': 'ccc-logo', src: './src/app/assets/images/CryptoCoinCount-logo.svg', width: '700', alt: 'logo' })
                    ),
                    _react2.default.createElement(_cryptoPage2.default, null),
                    _react2.default.createElement(
                        'div',
                        { 'class': 'row' },
                        _react2.default.createElement(
                            'div',
                            { 'class': 'col-sm' },
                            _react2.default.createElement('i', { 'class': 'fas fa-chart-area fa-10x' })
                        ),
                        _react2.default.createElement(
                            'div',
                            { 'class': 'col-sm' },
                            _react2.default.createElement('i', { 'class': 'fas fa-chart-area fa-10x' })
                        )
                    )
                ),
                _react2.default.createElement('div', { 'class': 'grid' })
            );
        }
    }]);

    return Home;
}(_react.Component);

exports.default = Home;