import React, { Component } from 'react';
import axios from 'axios';
const NumberFormat = require('react-number-format');

export default class CryptoPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coin: {
                fromLogo: null,
                toLogo: null
            },
            priceData: {
                coinPrice: null
            }
        };
    }

    componentDidMount() {
        this.generalCoinInfo();
        this.coinPriceData();
      }

      
    generalCoinInfo() {
        const coinType = "LTC"
        axios.get('https://min-api.cryptocompare.com/data/top/exchanges/full?fsym='+coinType+'&tsym=USD&e=coinbase')
            .then(res => {
                this.setState({
                    coin: {
                        coinId: res.data.Data.CoinInfo.Id,
                        coinName: res.data.Data.CoinInfo.Name,
                        coinFullName: res.data.Data.CoinInfo.FullName
                    }
                });
            })
    }
    
    coinPriceData() {
        const coinType = "LTC"
        axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms='+coinType+'&tsyms=USD&e=coinbase')
            .then(res => {
                this.setState({
                    priceData: {
                        coinPrice: res.data.DISPLAY.LTC.USD.PRICE,
                        coinExchange: res.data.DISPLAY.LTC.USD.MARKET
                    }
                });
            })
    }


    render() {
        return (
            <div>
                <h5>{this.state.coin.coinId}</h5>
                <h5>{this.state.coin.coinName}</h5>
                <h5>{this.state.priceData.coinPrice}</h5>
            </div>
          );
      }
}