import React, { Component } from 'react';
import axios from 'axios';

export default class LitecoinPage extends Component {
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
        const coinName = "Litecoin"
        axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=' + coinType + '&tsyms=USD&e=coinbase')
            .then(res => {
                this.setState({
                    priceData: {
                        coinPrice:  res.data.DISPLAY.LTC.USD.PRICE,
                        coinExchange: res.data.DISPLAY.LTC.USD.MARKET
                    }
                });
            })
    }


    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="container-fluid col-sm-6">
                        <h5 class="coinPageTitle">{this.state.coin.coinFullName} (<span class="coinInitialsLTC">{this.state.coin.coinName}</span>)</h5>
                        <i class="fas fa-10x fa-chart-area"></i>
                        <h5 class="coinCurrentPrice">Current Price: <span class="priceLTC">{this.state.priceData.coinPrice}</span></h5>
                        <h5 class="exchangeName">Coin data courtesy of <span class="exchangeNameLTC">{this.state.priceData.coinExchange}</span></h5>
                    </div>
                    <div class="container-fluid col-sm-6">
                        <h6 class="cryptoDefinitionLTC">
                            Litecoin is based on an open source global payment 
                            network that is not controlled by any central authority. 
                            Litecoin differs from Bitcoins in aspects like faster block 
                            generation rate and use of scrypt as a proof of work scheme.
                        </h6>
                        <h6 class="investopediaLink lead"><a href="https://www.investopedia.com/terms/l/litecoin.asp" class="InvestopediaLTC" target="_blank">- Investopedia</a></h6>
                    </div>
                </div>    
            </div>
          );
      }
}