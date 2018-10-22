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

var NumberFormat = require('react-number-format');

var CryptoPage = function (_Component) {
    _inherits(CryptoPage, _Component);

    function CryptoPage(props) {
        _classCallCheck(this, CryptoPage);

        var _this = _possibleConstructorReturn(this, (CryptoPage.__proto__ || Object.getPrototypeOf(CryptoPage)).call(this, props));

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

    _createClass(CryptoPage, [{
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
                null,
                _react2.default.createElement(
                    'h5',
                    null,
                    this.state.coin.coinId
                ),
                _react2.default.createElement(
                    'h5',
                    null,
                    this.state.coin.coinName
                ),
                _react2.default.createElement(
                    'h5',
                    null,
                    this.state.priceData.coinPrice
                )
            );
        }
    }]);

    return CryptoPage;
}(_react.Component);

exports.default = CryptoPage;