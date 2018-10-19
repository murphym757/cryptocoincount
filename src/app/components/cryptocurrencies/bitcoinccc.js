import React, { Component } from 'react';
import axios from 'axios';
const NumberFormat = require('react-number-format');

export default class BTC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bitcoin: {
                fromLogo: null,
                toLogo: null
            }
        };
    }

    componentDidMount() {
        axios.get('https://www.cryptocompare.com/api/data/coinlist/')
            .then(res => {
                this.setState({
                    bitcoin: {
                        fromLogo: res.data.Data.LTC.CoinName
                    }
                });
            })
    }

    render() {
        return (
            <div>
                <h1>{this.state.bitcoin.fromLogo}</h1>
                <h1>{this.state.bitcoin.toLogo}</h1>
            </div>
          );
      }
}