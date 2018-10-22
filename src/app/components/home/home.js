import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import Navigation from '../design/navigation.js';
import LitecoinPage from '../cryptocurrencies/litecoin.js';
import Logo from '../design/logo.js';
import ColorGrid from '../design/colorGrid.js';
import CryptoLinks from '../design/cryptoLinks.js';

export default class Home extends Component {
    render() {
        return (
            <Router>
                <div class="container">
                    <Logo />
                    <CryptoLinks />
                    {/*Routes*/}
                    <Switch>
                        <Route exact path="/" component={Navigation}/>
                        <Route path="/litecoin" component={LitecoinPage}/>
                    </Switch>
                    <ColorGrid /> 
                </div>
            </Router>
          );
      }
}