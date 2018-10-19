import React, { Component } from 'react';
import BTC from '../cryptocurrencies/bitcoinccc.js';

export default class Home extends Component {
    render() {
        return (
            <div class="container pt-3">
            <div class="card">
                <div class="app-title">
                    <img class="ccc-logo" src="./src/app/assets/images/CryptoCoinCount-logo.svg" width="700" alt="logo" />
                </div>
                <BTC />
                <div class="row">
            <div class="col-sm">
            <i class="fas fa-chart-area fa-10x"></i>
            </div>
            <div class="col-sm">
            <i class="fas fa-chart-area fa-10x"></i>
            </div>
        </div>
        </div>
                <div class="grid"></div>   
            </div>
          );
      }
}