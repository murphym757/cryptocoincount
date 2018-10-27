import React, { Component } from 'react';
import axios from 'axios';
import CryptoLinksETH from '../ethereum/cryptoLinksETH.js'

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
        const coinType = "ETH"
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
        axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD,BTC&e=coinbase')
            .then(res => {
                this.setState({
                    priceData: {
                        coinPrice:  res.data.DISPLAY.ETH.USD.PRICE,
                        coinExchange: res.data.DISPLAY.ETH.USD.MARKET,
                        coinChangePrice24Hours: res.data.DISPLAY.ETH.USD.CHANGE24HOUR,
                        coinChangePct24Hours: res.data.DISPLAY.ETH.USD.CHANGEPCT24HOUR,
                        dollarSign: res.data.DISPLAY.ETH.USD.TOSYMBOL,
                        bitcoinSign: res.data.DISPLAY.ETH.BTC.TOSYMBOL,
                        coinPriceBTC: res.data.DISPLAY.ETH.BTC.PRICE,
                        coinChangePrice24HoursBTC: res.data.DISPLAY.ETH.BTC.CHANGE24HOUR,
                        coinChangePct24HoursBTC: res.data.DISPLAY.ETH.BTC.CHANGEPCT24HOUR,
                    }
                });
            })
    }


    render() {
        return (
            <div>
                <CryptoLinksETH />
                <div class="container">
                    <h5 class="coinPageTitle">{this.state.coin.coinFullName} (<span class="coinInitialsETH">{this.state.coin.coinName}</span>)</h5>
                    <h6 class="exchangeName pb-2">Coin data courtesy of <span class="exchangeETH">{this.state.priceData.coinExchange}</span></h6>
                    <div class="row">
                        <div class="container-fluid USD col-sm-6">
                            <h5 class="coinPageUSD">United States Dollar (<span class="coinInitialsETH">{this.state.priceData.dollarSign}</span>)</h5>
                            <div class="container-fluid">
                                <h5 class="coinCurrentPrice">Current Price: <span class="priceETH">{this.state.priceData.coinPrice}</span></h5>
                                <div class="row">
                                <h5 class="changePriceETH col-xl-6">Price change (24 hours): <span class="pricechangeETH">{this.state.priceData.coinChangePrice24Hours}</span></h5>
                                <h5 class="changePercentETH col-xl-6">Percentage change (24 hours): <span class="percentChangeETH">{this.state.priceData.coinChangePct24Hours}%</span></h5>
                            </div>
                            </div>
                        </div>
                        <div class="container-fluid BTC col-sm-6">
                        <h5 class="coinPageBTC">Bitcoin (<span class="bitcoinLogoETH"><i class="cf cf-btc btcCompareETH"></i></span>)</h5>
                            <div class="container-fluid">
                                <h5 class="coinCurrentPrice">Current Price: <span class="priceETH">{this.state.priceData.coinPriceBTC}</span></h5>
                                <div class="row">
                                <h5 class="BTCchangePriceETH col-xl-6">Price change (24 hours): <span class="btcPriceChangeETH">{this.state.priceData.coinChangePrice24HoursBTC}</span></h5>
                                <h5 class="BTCchangePercentETH col-xl-6">Percentage change (24 hours): <span class="btcPercentChangeETH">{this.state.priceData.coinChangePct24HoursBTC}%</span></h5>
                            </div>
                            </div>
                        </div>
                        <div class="container-fluid">
                            <h6 class="cryptoDefinitionETH">
                                Ethereum is a decentralized software platform 
                                that enables SmartContracts and Distributed Applications 
                                (ĐApps) to be built and run without any downtime, fraud, 
                                control or interference from a third party.
                            </h6>
                            <h6 class="investopediaLink lead">
                                <a href="https://www.investopedia.com/terms/e/ethereum.asp" class="InvestopediaETH" target="_blank">- Investopedia</a>
                            </h6>
                        </div>
                    </div>  
                </div>
            </div>
          );
      }
}