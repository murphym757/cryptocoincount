import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CryptoLinks from '../design/cryptoLinks.js';
import Logo from '../design/logo.js';

// This page purposely blank
export default class Navigation extends Component {
    render() {
        return (
            <div class="container-fluid naviLinks">
                <div class="row">
                    <div class="col-6 btc-Icon">
                        <div class="row">
                            <div class="col-12">
                                <Link to="/litecoin" style={{ textDecoration: 'none' }}>
                                    <i class="cf cf-btc btc-links"></i>
                                </Link>
                            </div>
                            <h3 class="col-12 btc-link-name">Bitcoin</h3>
                        </div>    
                    </div>
                    <div class="col-6 dash-Icon">
                        <div class="row">
                            <div class="col-12">
                                <Link to="/litecoin" style={{ textDecoration: 'none' }}>
                                    <i class="cf cf-dash"></i>
                                </Link>
                            </div>
                            <h3 class="col-12 dash-link-name">Dash</h3>
                        </div>
                    </div>
                </div>
                <div class="row pt-2 pb-2">
                    <div class="col-6 eth-Icon">
                        <div class="row">
                            <div class="col-12">
                                <Link to="/litecoin" style={{ textDecoration: 'none' }}>
                                    <i class="cf cf-eth"></i>
                                </Link>
                            </div>
                            <h3 class="col-12 eth-link-name">Ethereum</h3>
                        </div>
                    </div>
                    <div class="col-6 ltc-Icon">
                        <div class="row">
                            <div class="col-12">
                                <Link to="/litecoin" style={{ textDecoration: 'none' }}>
                                    <i class="cf cf-ltc"></i>
                                </Link>
                            </div>
                            <h3 class="col-12 ltc-link-name">Litecoin</h3>
                        </div>
                    </div>
                </div>
                <div class="row pb-5">
                    <div class="col-6 xmr-Icon">
                    <div class="row">
                                <div class="col-12">
                                <Link to="/litecoin" style={{ textDecoration: 'none' }}>
                                    <i class="cf cf-xmr"></i>
                                </Link>
                                </div>
                                <h3 class="col-12 xmr-link-name">Monero</h3>
                        </div>
                    </div>
                    <div class="col-6 xrp-Icon">
                        <div class="row">
                            <div class="col-12">
                                <Link to="/litecoin" style={{ textDecoration: 'none' }}>
                                    <i class="cf cf-xrp"></i>
                                </Link>
                            </div>
                            <h3 class="col-12 xrp-link-name">Ripple</h3>
                        </div>
                    </div>
                </div>
            </div> 
          );
      }
}