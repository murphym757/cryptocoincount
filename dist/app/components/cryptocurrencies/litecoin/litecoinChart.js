'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _reactChartjs = require('react-chartjs-2');

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
            chartData: {
                labels: ['24 H', '23 H', '22 H', '21 H', '20 H', '19 H', '18 H', '17 H', '16 H', '15 H', '14 H', '13 H', '12 H', '11 H', '10 H', '9 H', '8 H', '7 H', '6 H', '5 H', '4 H', '3 H', '2 H', '1 H', 'Now'],
                datasets: [{
                    label: 'Price (24 Hours)',
                    fill: true,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [65, 59, 80, 81, 56, 55, 40, 43, 65, 59, 80, 81, 40, 43, 65, 59, 80, 81, 40, 43, 65, 59, 80, 81, 60]
                }]
            },
            pricePerHour: {}
        };
        return _this;
    }

    _createClass(LitecoinPage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.coinPricePerHour();
        }
    }, {
        key: 'coinPricePerHour',
        value: function coinPricePerHour() {
            var _this2 = this;

            _axios2.default.get();
            var coinType = "LTC";
            _axios2.default.get('https://min-api.cryptocompare.com/data/histohour?fsym=' + coinType + '&tsym=USD&limit=24&e=coinbase').then(function (res) {
                _this2.setState({
                    pricePerHour: {}
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_reactChartjs.Line, {
                    data: this.state.chartData,
                    options: {}
                })
            );
        }
    }]);

    return LitecoinPage;
}(_react.Component);

exports.default = LitecoinPage;