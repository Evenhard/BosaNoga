import React, {Component} from 'react';

import './css/font-awesome.min.css';
import './css/normalize.css';
import './css/style.css';
import './css/style-catalogue.css';
import './css/style-favorite.css';
import './css/style-order.css';
import './css/style-product-card.css';
import 'react-id-swiper/src/styles/css/swiper.css';

// import ShopApi from './js/script';
// import './js/slider.js';

import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';

import Header from './components/Header';
import Footer from './components/Footer';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <div>
                        <Header/>
                        <main className="container">
                            <Routes/>
                        </main>
                        <Footer/>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}