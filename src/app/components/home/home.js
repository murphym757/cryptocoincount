import React, { Component } from 'react';
import CryptoPage from '../cryptocurrencies/cryptoPage.js';
export default class Home extends Component {

    litecoinButton() {
        <CryptoPage />
    }

    render() {
        return (
            <div class="container pt-3">
            <div class="card">
                <div class="app-title">
                    <img class="ccc-logo" src="./src/app/assets/images/CryptoCoinCount-logo.svg" width="700" alt="logo" />
                </div>
                
                <button onclick="litecoinButton()">Click me</button> 
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