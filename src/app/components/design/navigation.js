import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CryptoPage from '../cryptocurrencies/cryptoPage.js';
import Logo from '../design/logo.js';

export default class Navigation extends Component {
    render() {
        return (
            <div class="container pt-3">
            <div class="card">
                <Link to="/litecoin" style={{ textDecoration: 'none' }}>
                </Link>
            <div class="row">
                <div class="col-sm">
                    <i class="fas fa-chart-area fa-10x"></i>
                </div>
                <div class="col-sm">
                    <i class="fas fa-chart-area fa-10x"></i>
                </div>
            </div>
            </div> 
            </div>
          );
      }
}