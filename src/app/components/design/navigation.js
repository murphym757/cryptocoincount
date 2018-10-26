import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CryptoLinks from '../design/cryptoLinks.js';
import Logo from '../design/logo.js';

// This page purposely blank
export default class Navigation extends Component {
    render() {
        return (
            <div>
                <CryptoLinks />
                <div class="container-fluid">
                    <div class="grid"></div>
                </div> 
            </div> 
          );
      }
}