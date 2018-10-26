import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CryptoLinksLTC extends Component {
    render() {
        return (
            <div class="container pb-3 pt-3">
                <div class="row">
                    <div class="col-2">
                        <Link to="/litecoin" style={{ textDecoration: 'none' }}>
                            <i class="cf cf-btc btc-links"></i>
                        </Link>
                    </div>
                    <div class="col-2">
                        <Link to="/litecoin" style={{ textDecoration: 'none' }}>
                            <i class="cf cf-dash"></i>
                        </Link>
                    </div>
                    <div class="col-2">
                        <Link to="/litecoin" style={{ textDecoration: 'none' }}>
                            <i class="cf cf-eth"></i>
                        </Link>
                    </div>
                    <div class=" col-2">
                        <Link to="/litecoin" style={{ textDecoration: 'none' }}>
                        <div class="ltc-activeLink"><i class="cf cf-ltc"></i></div>
                        </Link>
                    </div>
                    <div class="col-2">
                        <Link to="/litecoin" style={{ textDecoration: 'none' }}>
                            <i class="cf cf-xmr"></i>
                        </Link>
                    </div>
                    <div class="col-2">
                        <Link to="/litecoin" style={{ textDecoration: 'none' }}>
                            <i class="cf cf-xrp"></i>
                        </Link>
                    </div>
                </div>
            </div>
            
          );
      }
}