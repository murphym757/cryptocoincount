'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _cryptoLinksLTC = require('../litecoin/cryptoLinksLTC.js');

var _cryptoLinksLTC2 = _interopRequireDefault(_cryptoLinksLTC);

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

            _axios2.default.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=LTC&tsyms=USD,BTC&e=coinbase').then(function (res) {
                _this3.setState({
                    priceData: {
                        coinPrice: res.data.DISPLAY.LTC.USD.PRICE,
                        coinExchange: res.data.DISPLAY.LTC.USD.MARKET,
                        coinChangePrice24Hours: res.data.DISPLAY.LTC.USD.CHANGE24HOUR,
                        coinChangePct24Hours: res.data.DISPLAY.LTC.USD.CHANGEPCT24HOUR,
                        dollarSign: res.data.DISPLAY.LTC.USD.TOSYMBOL,
                        bitcoinSign: res.data.DISPLAY.LTC.BTC.TOSYMBOL,
                        coinPriceBTC: res.data.DISPLAY.LTC.BTC.PRICE,
                        coinChangePrice24HoursBTC: res.data.DISPLAY.LTC.BTC.CHANGE24HOUR,
                        coinChangePct24HoursBTC: res.data.DISPLAY.LTC.BTC.CHANGEPCT24HOUR
                    }
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_cryptoLinksLTC2.default, null),
                _react2.default.createElement(
                    'div',
                    { 'class': 'container' },
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
                    _react2.default.createElement(
                        'h6',
                        { 'class': 'exchangeName pb-2' },
                        'Coin data courtesy of ',
                        _react2.default.createElement(
                            'span',
                            { 'class': 'exchangeLTC' },
                            this.state.priceData.coinExchange
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { 'class': 'row' },
                        _react2.default.createElement(
                            'div',
                            { 'class': 'container-fluid USD col-sm-6' },
                            _react2.default.createElement(
                                'h5',
                                { 'class': 'coinPageUSD' },
                                'United States Dollar (',
                                _react2.default.createElement(
                                    'span',
                                    { 'class': 'coinInitialsLTC' },
                                    this.state.priceData.dollarSign
                                ),
                                ')'
                            ),
                            _react2.default.createElement(
                                'div',
                                { 'class': 'container-fluid' },
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
                                    'div',
                                    { 'class': 'row' },
                                    _react2.default.createElement(
                                        'h5',
                                        { 'class': 'changePrice col-xl-6' },
                                        'Price change (24 hours): ',
                                        _react2.default.createElement(
                                            'span',
                                            { 'class': 'pricechangeLTC' },
                                            this.state.priceData.coinChangePrice24Hours
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'h5',
                                        { 'class': 'changePercent col-xl-6' },
                                        'Percentage change (24 hours): ',
                                        _react2.default.createElement(
                                            'span',
                                            { 'class': 'percentChangeLTC' },
                                            this.state.priceData.coinChangePct24Hours,
                                            '%'
                                        )
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { 'class': 'container-fluid BTC col-sm-6' },
                            _react2.default.createElement(
                                'h5',
                                { 'class': 'coinPageBTC' },
                                'Bitcoin (',
                                _react2.default.createElement(
                                    'span',
                                    { 'class': 'bitcoinLogo' },
                                    _react2.default.createElement('i', { 'class': 'cf cf-btc btcCompare' })
                                ),
                                ')'
                            ),
                            _react2.default.createElement(
                                'div',
                                { 'class': 'container-fluid' },
                                _react2.default.createElement(
                                    'h5',
                                    { 'class': 'coinCurrentPrice' },
                                    'Current Price: ',
                                    _react2.default.createElement(
                                        'span',
                                        { 'class': 'priceLTC' },
                                        this.state.priceData.coinPriceBTC
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { 'class': 'row' },
                                    _react2.default.createElement(
                                        'h5',
                                        { 'class': 'changePrice col-xl-6' },
                                        'Price change (24 hours): ',
                                        _react2.default.createElement(
                                            'span',
                                            { 'class': 'btcPriceChangeLTC' },
                                            this.state.priceData.coinChangePrice24HoursBTC
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'h5',
                                        { 'class': 'changePercent col-xl-6' },
                                        'Percentage change (24 hours): ',
                                        _react2.default.createElement(
                                            'span',
                                            { 'class': 'btcPercentChangeLTC' },
                                            this.state.priceData.coinChangePct24HoursBTC,
                                            '%'
                                        )
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { 'class': 'container-fluid' },
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
                    ),
                    _react2.default.createElement(
                        'div',
                        { 'class': 'container-fluid' },
                        _react2.default.createElement('div', { 'class': 'grid-LTC' })
                    )
                )
            );
        }
    }]);

    return LitecoinPage;
}(_react.Component);

exports.default = LitecoinPage;