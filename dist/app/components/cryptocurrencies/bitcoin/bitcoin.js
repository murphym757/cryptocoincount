'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _cryptoLinksBTC = require('../bitcoin/cryptoLinksBTC.js');

var _cryptoLinksBTC2 = _interopRequireDefault(_cryptoLinksBTC);

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
            coin: {},
            priceData: {}
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

            var coinType = "BTC";
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

            _axios2.default.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD&e=coinbase').then(function (res) {
                _this3.setState({
                    priceData: {
                        coinPrice: res.data.DISPLAY.BTC.USD.PRICE,
                        coinExchange: res.data.DISPLAY.BTC.USD.MARKET,
                        coinChangePrice24Hours: res.data.DISPLAY.BTC.USD.CHANGE24HOUR,
                        coinChangePct24Hours: res.data.DISPLAY.BTC.USD.CHANGEPCT24HOUR,
                        dollarSign: res.data.DISPLAY.BTC.USD.TOSYMBOL
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
                _react2.default.createElement(_cryptoLinksBTC2.default, null),
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
                            { 'class': 'coinInitialsBTC' },
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
                            { 'class': 'exchangeBTC' },
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
                                    { 'class': 'coinInitialsBTC' },
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
                                        { 'class': 'priceBTC' },
                                        this.state.priceData.coinPrice
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { 'class': 'row' },
                                    _react2.default.createElement(
                                        'h5',
                                        { 'class': 'changePriceBTC col-xl-6' },
                                        'Price change (24 hours): ',
                                        _react2.default.createElement(
                                            'span',
                                            { 'class': 'pricechangeBTC' },
                                            this.state.priceData.coinChangePrice24Hours
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'h5',
                                        { 'class': 'changePercentBTC col-xl-6' },
                                        'Percentage change (24 hours): ',
                                        _react2.default.createElement(
                                            'span',
                                            { 'class': 'percentChangeBTC' },
                                            this.state.priceData.coinChangePct24Hours,
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
                                { 'class': 'cryptoDefinitionBTC' },
                                'Bitcoin is a digital currency created in 2009. It follows the ideas set out in a white paper by the mysterious Satoshi Nakamoto, whose true identity has yet to be verified. Bitcoin offers the promise of lower transaction fees than traditional online payment mechanisms and is operated by a decentralized authority, unlike government-issued currencies.'
                            ),
                            _react2.default.createElement(
                                'h6',
                                { 'class': 'investopediaLink lead' },
                                _react2.default.createElement(
                                    'a',
                                    { href: 'https://www.investopedia.com/terms/l/litecoin.asp', 'class': 'InvestopediabTC', target: '_blank' },
                                    '- Investopedia'
                                )
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