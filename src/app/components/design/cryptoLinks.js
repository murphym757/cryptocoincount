import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CryptoLinks extends Component {
    render() {
        return (
            <div class="container pb-3">
                <div class="row">
                    <div class="col-2">
                        <Link to="/litecoin" style={{ textDecoration: 'none' }}>
                            <i class="cf cf-btc"></i>
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
                    <div class="col-2">
                        <Link to="/litecoin" style={{ textDecoration: 'none' }}>
                            <i class="cf cf-ltc"></i>
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