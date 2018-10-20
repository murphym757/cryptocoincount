import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navigation from '../design/navigation.js';
import LitecoinPage from '../cryptocurrencies/litecoin.js';
import Logo from '../design/logo.js';
import ColorGrid from '../design/colorGrid.js';

export default class Home extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Logo />
                    {/*Routes*/}
                    <Route exact path="/" component={Navigation}/>
                    <Route path="/litecoin" component={LitecoinPage}/>
                    <ColorGrid /> 
                </div>
            </Router>
          );
      }
}