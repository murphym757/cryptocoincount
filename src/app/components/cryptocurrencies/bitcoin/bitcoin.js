import React, { Component } from 'react';
import axios from 'axios';
import CryptoLinksBTC from '../bitcoin/cryptoLinksBTC.js'

export default class LitecoinPage extends Component {
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
        const coinType = "BTC"
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
        axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD&e=coinbase')
            .then(res => {
                this.setState({
                    priceData: {
                        coinPrice:  res.data.DISPLAY.BTC.USD.PRICE,
                        coinExchange: res.data.DISPLAY.BTC.USD.MARKET,
                        coinChangePrice24Hours: res.data.DISPLAY.BTC.USD.CHANGE24HOUR,
                        coinChangePct24Hours: res.data.DISPLAY.BTC.USD.CHANGEPCT24HOUR,
                        dollarSign: res.data.DISPLAY.BTC.USD.TOSYMBOL
                    }
                });
            })
    }


    render() {
        return (
            <div>
                <CryptoLinksBTC />
                <div class="container">
                    <h5 class="coinPageTitle">{this.state.coin.coinFullName} (<span class="coinInitialsBTC">{this.state.coin.coinName}</span>)</h5>
                    <h6 class="exchangeName pb-2">Coin data courtesy of <span class="exchangeBTC">{this.state.priceData.coinExchange}</span></h6>
                    <div class="row">
                        <div class="container-fluid USD col-sm-6">
                            <h5 class="coinPageUSD">United States Dollar (<span class="coinInitialsBTC">{this.state.priceData.dollarSign}</span>)</h5>
                            <div class="container-fluid">
                                <h5 class="coinCurrentPrice">Current Price: <span class="priceBTC">{this.state.priceData.coinPrice}</span></h5>
                                <div class="row">
                                <h5 class="changePriceBTC col-xl-6">Price change (24 hours): <span class="pricechangeBTC">{this.state.priceData.coinChangePrice24Hours}</span></h5>
                                <h5 class="changePercentBTC col-xl-6">Percentage change (24 hours): <span class="percentChangeBTC">{this.state.priceData.coinChangePct24Hours}%</span></h5>
                            </div>
                            </div>
                        </div>
                        <div class="container-fluid">
                            <h6 class="cryptoDefinitionBTC">
                                Bitcoin is a digital currency created in 2009. 
                                It follows the ideas set out in a white paper 
                                by the mysterious Satoshi Nakamoto, whose true 
                                identity has yet to be verified. Bitcoin offers 
                                the promise of lower transaction fees than traditional 
                                online payment mechanisms and is operated by a decentralized 
                                authority, unlike government-issued currencies.
                            </h6>
                            <h6 class="investopediaLink lead">
                                <a href="https://www.investopedia.com/terms/b/bitcoin.asp" class="InvestopediabTC" target="_blank">- Investopedia</a>
                            </h6>
                        </div>
                    </div>  
                </div>
            </div>
          );
      }
}