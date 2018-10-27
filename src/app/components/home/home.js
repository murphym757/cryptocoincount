import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import Navigation from '../design/navigation.js';
import BitcoinPage from '../cryptocurrencies/bitcoin/bitcoin.js';
import DashPage from '../cryptocurrencies/dash/dash.js';
import EthereumPage from '../cryptocurrencies/ethereum/ethereum.js';
import LitecoinPage from '../cryptocurrencies/litecoin/litecoin.js';
import MoneroPage from '../cryptocurrencies/monero/monero.js';
import RipplePage from '../cryptocurrencies/ripple/ripple.js';
import Logo from '../design/logo.js';

export default class Home extends Component {
    render() {
        return (
            <Router>
                <div class="container">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Logo />
                    </Link>
                    {/*Routes*/}
                    <Switch>
                        <Route exact path="/" component={Navigation}/>
                        <Route path="/bitcoin" component={BitcoinPage}/>
                        <Route path="/dash" component={DashPage}/>
                        <Route path="/ethereum" component={EthereumPage}/>
                        <Route path="/litecoin" component={LitecoinPage}/>
                        <Route path="/monero" component={MoneroPage}/>
                        <Route path="/ripple" component={RipplePage}/>
                    </Switch>
                </div>
            </Router>
          );
      }
}