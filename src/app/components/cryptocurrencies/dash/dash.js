import React, { Component } from 'react';
import axios from 'axios';
import CryptoLinksDASH from '../dash/cryptoLinksDASH.js'

export default class DashPage extends Component {
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
        const coinType = "DASH"
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
        axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=DASH&tsyms=USD,BTC')
            .then(res => {
                this.setState({
                    priceData: {
                        coinPrice:  res.data.DISPLAY.DASH.USD.PRICE,
                        coinExchange: res.data.DISPLAY.DASH.USD.MARKET,
                        coinChangePrice24Hours: res.data.DISPLAY.DASH.USD.CHANGE24HOUR,
                        coinChangePct24Hours: res.data.DISPLAY.DASH.USD.CHANGEPCT24HOUR,
                        dollarSign: res.data.DISPLAY.DASH.USD.TOSYMBOL,
                        bitcoinSign: res.data.DISPLAY.DASH.BTC.TOSYMBOL,
                        coinPriceBTC: res.data.DISPLAY.DASH.BTC.PRICE,
                        coinChangePrice24HoursBTC: res.data.DISPLAY.DASH.BTC.CHANGE24HOUR,
                        coinChangePct24HoursBTC: res.data.DISPLAY.DASH.BTC.CHANGEPCT24HOUR,
                    }
                });
            })
    }


    render() {
        return (
            <div>
                <CryptoLinksDASH />
                <div class="container">
                    <h5 class="coinPageTitle">{this.state.coin.coinFullName} (<span class="coinInitialsDASH">{this.state.coin.coinName}</span>)</h5>
                    <h6 class="exchangeName pb-2">Coin data courtesy of <span class="exchangeDASH">{this.state.priceData.coinExchange}</span></h6>
                    <div class="row">
                        <div class="container-fluid USD col-sm-6">
                            <h5 class="coinPageUSD">United States Dollar (<span class="coinInitialsDASH">{this.state.priceData.dollarSign}</span>)</h5>
                            <div class="container-fluid">
                                <h5 class="coinCurrentPrice">Current Price: <span class="priceDASH">{this.state.priceData.coinPrice}</span></h5>
                                <div class="row">
                                <h5 class="changePriceDASH col-xl-6">Price change (24 hours): <span class="pricechangeDASH">{this.state.priceData.coinChangePrice24Hours}</span></h5>
                                <h5 class="changePercentDASH col-xl-6">Percentage change (24 hours): <span class="percentChangeDASH">{this.state.priceData.coinChangePct24Hours}%</span></h5>
                            </div>
                            </div>
                        </div>
                        <div class="container-fluid BTC col-sm-6">
                        <h5 class="coinPageBTC">Bitcoin (<span class="bitcoinLogoDASH"><i class="cf cf-btc btcCompareDASH"></i></span>)</h5>
                            <div class="container-fluid">
                                <h5 class="coinCurrentPrice">Current Price: <span class="priceDASH">{this.state.priceData.coinPriceBTC}</span></h5>
                                <div class="row">
                                <h5 class="BTCchangePriceDASH col-xl-6">Price change (24 hours): <span class="btcPriceChangeDASH">{this.state.priceData.coinChangePrice24HoursBTC}</span></h5>
                                <h5 class="BTCchangePriceDASH col-xl-6">Percentage change (24 hours): <span class="btcPercentChangeDASH">{this.state.priceData.coinChangePct24HoursBTC}%</span></h5>
                            </div>
                            </div>
                        </div>
                        <div class="container-fluid">
                            <h6 class="cryptoDefinitionDASH">
                                Dash is apeer-to-peer cryptocurrency that was 
                                forked out of Bitcoin to offer faster and more 
                                private transactions to users. Dash is the first 
                                digital currency with a decentralized blockchain 
                                governance system.
                            </h6>
                            <h6 class="investopediaLink lead">
                                <a href="https://www.investopedia.com/terms/d/dash.asp" class="InvestopediaDASH" target="_blank">- Investopedia</a>
                            </h6>
                        </div>
                    </div>  
                </div>
            </div>
          );
      }
}