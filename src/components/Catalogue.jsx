import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import OverlookedSlider from './catalogue/OverlookedSlider';
import ProductList from './catalogue/ProductList';
import Filters from './catalogue/Filters';
import Sorter from './catalogue/Sorter';

import Breadcrumbs from './Breadcrumbs';
import Pagination from './Pagination';
import ShopApi from "../js/script";

const queryString = require('query-string');

export default class Catalogue extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filter: {},
            page: 1,
            sort: 'popularity',

            productList: [],
            isFetching: false,

            data: ''
        };

        this.getFetching = this.getFetching.bind(this);
        this.getUpdate = this.getUpdate.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
        this.favoriteHandler = this.favoriteHandler.bind(this);
    }

    getFetching(query) {
        ShopApi.query(`products/?${query}`).then(productList => {
            this.setState({productList, isFetching: false})
        });
    }

    getUpdate() {

    }

    clickHandler(item) {
        console.log(item);

    }

    favoriteHandler() {

    }

    componentWillMount() {
        this.setState({
            filter: queryString.parse(window.location.search),
            isFetching: true
        });
    }

    componentDidMount() {
        const queryObj = {
            page: this.state.page,
            sortBy: this.state.sort
        };

        this.getFetching(queryString.stringify(Object.assign({}, this.state.filter, queryObj)));
    }

    render() {
        return (
            <div>
                <Breadcrumbs/>
                <main className="product-catalogue">
                    <Filters clickHandler={this.clickHandler}/>
                    <section className="product-catalogue-content">
                        <Sorter/>
                        {
                            //console.log(this.state.productList)
                        }
                        <ProductList productList={this.state.productList}/>
                        <Pagination/>
                    </section>
                </main>
                <OverlookedSlider/>
            </div>
        );
    }
}