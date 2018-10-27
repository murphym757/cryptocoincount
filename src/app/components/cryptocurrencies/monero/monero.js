import React, { Component } from 'react';
import axios from 'axios';
import CryptoLinksXMR from '../monero/cryptoLinksXMR.js'

export default class MoneroPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coin: {
            },
            priceData: {
            }
        };
    }

    componentDidMount() {
        this.generalCoinInfo();
        this.coinPriceData();
      }

      
    generalCoinInfo() {
        const coinType = "XMR"
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
        axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=XMR&tsyms=USD,BTC')
            .then(res => {
                this.setState({
                    priceData: {
                        coinPrice:  res.data.DISPLAY.XMR.USD.PRICE,
                        coinExchange: res.data.DISPLAY.XMR.USD.MARKET,
                        coinChangePrice24Hours: res.data.DISPLAY.XMR.USD.CHANGE24HOUR,
                        coinChangePct24Hours: res.data.DISPLAY.XMR.USD.CHANGEPCT24HOUR,
                        dollarSign: res.data.DISPLAY.XMR.USD.TOSYMBOL,
                        bitcoinSign: res.data.DISPLAY.XMR.BTC.TOSYMBOL,
                        coinPriceBTC: res.data.DISPLAY.XMR.BTC.PRICE,
                        coinChangePrice24HoursBTC: res.data.DISPLAY.XMR.BTC.CHANGE24HOUR,
                        coinChangePct24HoursBTC: res.data.DISPLAY.XMR.BTC.CHANGEPCT24HOUR,
                    }
                });
            })
    }


    render() {
        return (
            <div>
                <CryptoLinksXMR />
                <div class="container">
                    <h5 class="coinPageTitle">{this.state.coin.coinFullName} (<span class="coinInitialsXMR">{this.state.coin.coinName}</span>)</h5>
                    <h6 class="exchangeName pb-2">Coin data courtesy of <span class="exchangeXMR">{this.state.priceData.coinExchange}</span></h6>
                    <div class="row">
                        <div class="container-fluid USD col-sm-6">
                            <h5 class="coinPageUSD">United States Dollar (<span class="coinInitialsXMR">{this.state.priceData.dollarSign}</span>)</h5>
                            <div class="container-fluid">
                                <h5 class="coinCurrentPrice">Current Price: <span class="priceXMR">{this.state.priceData.coinPrice}</span></h5>
                                <div class="row">
                                <h5 class="changePriceXMR col-xl-6">Price change (24 hours): <span class="pricechangeXMR">{this.state.priceData.coinChangePrice24Hours}</span></h5>
                                <h5 class="changePercentXMR col-xl-6">Percentage change (24 hours): <span class="percentChangeXMR">{this.state.priceData.coinChangePct24Hours}%</span></h5>
                            </div>
                            </div>
                        </div>
                        <div class="container-fluid BTC col-sm-6">
                        <h5 class="coinPageBTC">Bitcoin (<span class="bitcoinLogoXMR"><i class="cf cf-btc btcCompareXMR"></i></span>)</h5>
                            <div class="container-fluid">
                                <h5 class="coinCurrentPrice">Current Price: <span class="priceXMR">{this.state.priceData.coinPriceBTC}</span></h5>
                                <div class="row">
                                <h5 class="BTCchangePriceXMR col-xl-6">Price change (24 hours): <span class="btcPriceChangeXMR">{this.state.priceData.coinChangePrice24HoursBTC}</span></h5>
                                <h5 class="BTCchangePriceXMR col-xl-6">Percentage change (24 hours): <span class="btcPercentChangeXMR">{this.state.priceData.coinChangePct24HoursBTC}%</span></h5>
                            </div>
                            </div>
                        </div>
                        <div class="container-fluid">
                            <h6 class="cryptoDefinitionXMR">
                                Monero is a digital currency that offers 
                                a high level of anonymity for users and 
                                their transactions. Like Bitcoin, Monero 
                                is a decentralized peer-to-peer cryptocurrency, 
                                but unlike Bitcoin, Monero is characterized as a 
                                private digital cash.
                            </h6>
                            <h6 class="investopediaLink lead">
                                <a href="https://www.investopedia.com/terms/m/monero.asp" class="InvestopediaXMR" target="_blank">- Investopedia</a>
                            </h6>
                        </div>
                    </div>  
                </div>
            </div>
          );
      }
}