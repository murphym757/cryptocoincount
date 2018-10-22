import React from 'react';
import { render } from 'react-dom';
import MainSource from './app/components/main.js';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import bootstrapGrid from '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import bootstrapJs from '../node_modules/bootstrap/dist/js/bootstrap.min.js';

// Styling
import './app/assets/styles/styles.scss'; // Overall Page Styling
import fontStyles from './app/assets/styles/fonts.scss'; // Fonts
import './app/assets/cryptoFont/sass/cryptofont.scss' // Cryptofont Styling
import './app/assets/styles/cryptoIcons.scss' // Crypto Icons
import './app/assets/styles/cryptocurrencies.scss' // Cryptocurrency Page Styling

render(<MainSource />, document.getElementById("app"));