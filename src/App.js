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

import Header from './Components/Header';
import Footer from './Components/Footer';

class App extends Component {

    componentDidMount() {
        // ShopApi.query("categories").then(data => {
        //     data.map(item => console.log(item));
        // });
    }

    render() {
        return (
            <div className="App">
                <BrowserRouter>
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
            ;
    }
}

export default App;