import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CryptoLinks from '../design/cryptoLinks.js';
import Logo from '../design/logo.js';

// This page purposely blank
export default class Navigation extends Component {
    render() {
        return (
            <div class="container-fluid">
                <div class="row pt-5">
                    <div class="col-6 btc-Icon">
                        <Link to="/litecoin" style={{ textDecoration: 'none' }}>
                            <i class="cf cf-btc btc-links"></i>
                        </Link>
                    </div>
                    <div class="col-6 dash-Icon">
                        <Link to="/litecoin" style={{ textDecoration: 'none' }}>
                            <i class="cf cf-dash"></i>
                        </Link>
                    </div>
                    </div>
                    <div class="row pt-5">
                    <div class="col-6 eth-Icon">
                        <Link to="/litecoin" style={{ textDecoration: 'none' }}>
                            <i class="cf cf-eth"></i>
                        </Link>
                    </div>
                    <div class="col-6 ltc-Icon">
                        <Link to="/litecoin" style={{ textDecoration: 'none' }}>
                            <div class="ltc-Link"><i class="cf cf-ltc"></i></div>
                        </Link>
                    </div>
                    </div>
                    <div class="row pt-5">
                    <div class="col-6 xmr-Icon">
                        <Link to="/litecoin" style={{ textDecoration: 'none' }}>
                            <i class="cf cf-xmr"></i>
                        </Link>
                    </div>
                    <div class="col-6 xrp-Icon">
                        <Link to="/litecoin" style={{ textDecoration: 'none' }}>
                            <i class="cf cf-xrp"></i>
                        </Link>
                    </div>
                    </div>
            </div> 
          );
      }
}