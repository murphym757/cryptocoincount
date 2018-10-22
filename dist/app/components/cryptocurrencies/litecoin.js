'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LitecoinPage = function (_Component) {
    _inherits(LitecoinPage, _Component);

    function LitecoinPage(props) {
        _classCallCheck(this, LitecoinPage);

        var _this = _possibleConstructorReturn(this, (LitecoinPage.__proto__ || Object.getPrototypeOf(LitecoinPage)).call(this, props));

        _this.state = {
            coin: {
                fromLogo: null,
                toLogo: null
            },
            priceData: {
                coinPrice: null
            }
        };
        return _this;
    }

    _createClass(LitecoinPage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.generalCoinInfo();
            this.coinPriceData();
        }
    }, {
        key: 'generalCoinInfo',
        value: function generalCoinInfo() {
            var _this2 = this;

            var coinType = "LTC";
            _axios2.default.get('https://min-api.cryptocompare.com/data/top/exchanges/full?fsym=' + coinType + '&tsym=USD&e=coinbase').then(function (res) {
                _this2.setState({
                    coin: {
                        coinId: res.data.Data.CoinInfo.Id,
                        coinName: res.data.Data.CoinInfo.Name,
                        coinFullName: res.data.Data.CoinInfo.FullName
                    }
                });
            });
        }
    }, {
        key: 'coinPriceData',
        value: function coinPriceData() {
            var _this3 = this;

            var coinType = "LTC";
            var coinName = "Litecoin";
            _axios2.default.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=' + coinType + '&tsyms=USD&e=coinbase').then(function (res) {
                _this3.setState({
                    priceData: {
                        coinPrice: res.data.DISPLAY.LTC.USD.PRICE,
                        coinExchange: res.data.DISPLAY.LTC.USD.MARKET
                    }
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { 'class': 'container' },
                _react2.default.createElement(
                    'div',
                    { 'class': 'row' },
                    _react2.default.createElement(
                        'div',
                        { 'class': 'container-fluid col-sm-6' },
                        _react2.default.createElement(
                            'h5',
                            { 'class': 'coinPageTitle' },
                            this.state.coin.coinFullName,
                            ' (',
                            _react2.default.createElement(
                                'span',
                                { 'class': 'coinInitialsLTC' },
                                this.state.coin.coinName
                            ),
                            ')'
                        ),
                        _react2.default.createElement('i', { 'class': 'fas fa-10x fa-chart-area' }),
                        _react2.default.createElement(
                            'h5',
                            { 'class': 'coinCurrentPrice' },
                            'Current Price: ',
                            _react2.default.createElement(
                                'span',
                                { 'class': 'priceLTC' },
                                this.state.priceData.coinPrice
                            )
                        ),
                        _react2.default.createElement(
                            'h5',
                            { 'class': 'exchangeName' },
                            'Coin data courtesy of ',
                            _react2.default.createElement(
                                'span',
                                { 'class': 'exchangeNameLTC' },
                                this.state.priceData.coinExchange
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { 'class': 'container-fluid col-sm-6' },
                        _react2.default.createElement(
                            'h6',
                            { 'class': 'cryptoDefinitionLTC' },
                            'Litecoin is based on an open source global payment network that is not controlled by any central authority. Litecoin differs from Bitcoins in aspects like faster block generation rate and use of scrypt as a proof of work scheme.'
                        ),
                        _react2.default.createElement(
                            'h6',
                            { 'class': 'investopediaLink lead' },
                            _react2.default.createElement(
                                'a',
                                { href: 'https://www.investopedia.com/terms/l/litecoin.asp', 'class': 'InvestopediaLTC', target: '_blank' },
                                '- Investopedia'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return LitecoinPage;
}(_react.Component);

exports.default = LitecoinPage;