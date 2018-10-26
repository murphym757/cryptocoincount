import React, { Component } from 'react';
import axios from 'axios';
import CryptoLinksLTC from '../litecoin/cryptoLinksLTC.js'

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
        axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=LTC&tsyms=USD,BTC&e=coinbase')
            .then(res => {
                this.setState({
                    priceData: {
                        coinPrice:  res.data.DISPLAY.LTC.USD.PRICE,
                        coinExchange: res.data.DISPLAY.LTC.USD.MARKET,
                        coinChangePrice24Hours: res.data.DISPLAY.LTC.USD.CHANGE24HOUR,
                        coinChangePct24Hours: res.data.DISPLAY.LTC.USD.CHANGEPCT24HOUR,
                        dollarSign: res.data.DISPLAY.LTC.USD.TOSYMBOL,
                        bitcoinSign: res.data.DISPLAY.LTC.BTC.TOSYMBOL,
                        coinPriceBTC: res.data.DISPLAY.LTC.BTC.PRICE,
                        coinChangePrice24HoursBTC: res.data.DISPLAY.LTC.BTC.CHANGE24HOUR,
                        coinChangePct24HoursBTC: res.data.DISPLAY.LTC.BTC.CHANGEPCT24HOUR,
                    }
                });
            })
    }


    render() {
        return (
            <div>
                <CryptoLinksLTC />
                <div class="container">
                    <h5 class="coinPageTitle">{this.state.coin.coinFullName} (<span class="coinInitialsLTC">{this.state.coin.coinName}</span>)</h5>
                    <h6 class="exchangeName pb-2">Coin data courtesy of <span class="exchangeLTC">{this.state.priceData.coinExchange}</span></h6>
                    <div class="row">
                        <div class="container-fluid USD col-sm-6">
                            <h5 class="coinPageUSD">United States Dollar (<span class="coinInitialsLTC">{this.state.priceData.dollarSign}</span>)</h5>
                            <div class="container-fluid">
                                <h5 class="coinCurrentPrice">Current Price: <span class="priceLTC">{this.state.priceData.coinPrice}</span></h5>
                                <div class="row">
                                <h5 class="changePrice col-xl-6">Price change (24 hours): <span class="pricechangeLTC">{this.state.priceData.coinChangePrice24Hours}</span></h5>
                                <h5 class="changePercent col-xl-6">Percentage change (24 hours): <span class="percentChangeLTC">{this.state.priceData.coinChangePct24Hours}%</span></h5>
                            </div>
                            </div>
                        </div>
                        <div class="container-fluid BTC col-sm-6">
                        <h5 class="coinPageBTC">Bitcoin (<span class="bitcoinLogo"><i class="cf cf-btc btcCompare"></i></span>)</h5>
                            <div class="container-fluid">
                                <h5 class="coinCurrentPrice">Current Price: <span class="priceLTC">{this.state.priceData.coinPriceBTC}</span></h5>
                                <div class="row">
                                <h5 class="changePrice col-xl-6">Price change (24 hours): <span class="btcPriceChangeLTC">{this.state.priceData.coinChangePrice24HoursBTC}</span></h5>
                                <h5 class="changePercent col-xl-6">Percentage change (24 hours): <span class="btcPercentChangeLTC">{this.state.priceData.coinChangePct24HoursBTC}%</span></h5>
                            </div>
                            </div>
                        </div>
                        <div class="container-fluid">
                            <h6 class="cryptoDefinitionLTC">
                                Litecoin is based on an open source global payment 
                                network that is not controlled by any central authority. 
                                Litecoin differs from Bitcoins in aspects like faster block 
                                generation rate and use of scrypt as a proof of work scheme.
                            </h6>
                            <h6 class="investopediaLink lead">
                                <a href="https://www.investopedia.com/terms/l/litecoin.asp" class="InvestopediaLTC" target="_blank">- Investopedia</a>
                            </h6>
                        </div>
                    </div>
                    <div class="container-fluid">
                        <div class="grid-LTC"></div>
                    </div>    
                </div>
            </div>
          );
      }
}