import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CryptoLinksLTC extends Component {
    render() {
        return (
            <div class="container pb-3 pt-3">
                <div class="row">
                    <div class="col-2">
                        <Link to="/bitcoin" style={{ textDecoration: 'none' }}>
                            <div class="btc-notActiveLink"><i class="cf cf-btc"></i></div>
                        </Link>
                    </div>
                    <div class="col-2">
                        <Link to="/dash" style={{ textDecoration: 'none' }}>
                            <div class="dash-notActiveLink"><i class="cf cf-dash"></i></div>
                        </Link>
                    </div>
                    <div class="col-2">
                        <Link to="/ethereum" style={{ textDecoration: 'none' }}>
                            <div class="eth-activeLink"><i class="cf cf-eth"></i></div>
                        </Link>
                    </div>
                    <div class=" col-2">
                        <Link to="/litecoin" style={{ textDecoration: 'none' }}>
                            <div class="ltc-notActiveLink"><i class="cf cf-ltc"></i></div>
                        </Link>
                    </div>
                    <div class="col-2">
                        <Link to="/monero" style={{ textDecoration: 'none' }}>
                            <div class="xmr-notActiveLink"><i class="cf cf-xmr"></i></div>
                        </Link>
                    </div>
                    <div class="col-2">
                        <Link to="/ripple" style={{ textDecoration: 'none' }}>
                            <div class="xrp-notActiveLink"><i class="cf cf-xrp"></i></div>
                        </Link>
                    </div>
                </div>
            </div>
            
          );
      }
}