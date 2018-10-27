import React, { Component } from 'react';
import axios from 'axios';
import CryptoLinksXRP from '../ripple/cryptoLinksXRP.js'

export default class RipplePage extends Component {
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
        const coinType = "XRP"
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
        axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=XRP&tsyms=USD,BTC')
            .then(res => {
                this.setState({
                    priceData: {
                        coinPrice:  res.data.DISPLAY.XRP.USD.PRICE,
                        coinExchange: res.data.DISPLAY.XRP.USD.MARKET,
                        coinChangePrice24Hours: res.data.DISPLAY.XRP.USD.CHANGE24HOUR,
                        coinChangePct24Hours: res.data.DISPLAY.XRP.USD.CHANGEPCT24HOUR,
                        dollarSign: res.data.DISPLAY.XRP.USD.TOSYMBOL,
                        bitcoinSign: res.data.DISPLAY.XRP.BTC.TOSYMBOL,
                        coinPriceBTC: res.data.DISPLAY.XRP.BTC.PRICE,
                        coinChangePrice24HoursBTC: res.data.DISPLAY.XRP.BTC.CHANGE24HOUR,
                        coinChangePct24HoursBTC: res.data.DISPLAY.XRP.BTC.CHANGEPCT24HOUR,
                    }
                });
            })
    }


    render() {
        return (
            <div>
                <CryptoLinksXRP />
                <div class="container">
                    <h5 class="coinPageTitle">{this.state.coin.coinFullName} (<span class="coinInitialsXRP">{this.state.coin.coinName}</span>)</h5>
                    <h6 class="exchangeName pb-2">Coin data courtesy of <span class="exchangeXRP">{this.state.priceData.coinExchange}</span></h6>
                    <div class="row">
                        <div class="container-fluid USD col-sm-6">
                            <h5 class="coinPageUSD">United States Dollar (<span class="coinInitialsXRP">{this.state.priceData.dollarSign}</span>)</h5>
                            <div class="container-fluid">
                                <h5 class="coinCurrentPrice">Current Price: <span class="priceXRP">{this.state.priceData.coinPrice}</span></h5>
                                <div class="row">
                                <h5 class="changePriceXRP col-xl-6">Price change (24 hours): <span class="pricechangeXRP">{this.state.priceData.coinChangePrice24Hours}</span></h5>
                                <h5 class="changePercentXRP col-xl-6">Percentage change (24 hours): <span class="percentChangeXRP">{this.state.priceData.coinChangePct24Hours}%</span></h5>
                            </div>
                            </div>
                        </div>
                        <div class="container-fluid BTC col-sm-6">
                        <h5 class="coinPageBTC">Bitcoin (<span class="bitcoinLogo"><i class="cf cf-btc btcCompare"></i></span>)</h5>
                            <div class="container-fluid">
                                <h5 class="coinCurrentPrice">Current Price: <span class="priceXRP">{this.state.priceData.coinPriceBTC}</span></h5>
                                <div class="row">
                                <h5 class="BTCchangePriceXRP col-xl-6">Price change (24 hours): <span class="btcPriceChangeXRP">{this.state.priceData.coinChangePrice24HoursBTC}</span></h5>
                                <h5 class="BTCchangePriceXRP col-xl-6">Percentage change (24 hours): <span class="btcPercentChangeXRP">{this.state.priceData.coinChangePct24HoursBTC}%</span></h5>
                            </div>
                            </div>
                        </div>
                        <div class="container-fluid">
                            <h6 class="cryptoDefinitionXRP">
                                Ripple is more known for its digital 
                                payment protocol than its cryptocurrency, XRP. 
                                Ripple operates on an open source and peer-to-peer 
                                decentralized platform that allows for a seamless 
                                transfer of money in any form, whether USD, Yen, 
                                litecoin, or bitcoin.
                            </h6>
                            <h6 class="investopediaLink lead">
                                <a href="https://www.investopedia.com/terms/r/ripple-cryptocurrency.asp" class="InvestopediaXRP" target="_blank">- Investopedia</a>
                            </h6>
                        </div>
                    </div>  
                </div>
            </div>
          );
      }
}