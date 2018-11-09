import React from 'react';
import ShopApi from "../../js/script";

import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {Link} from 'react-router-dom';
import Swiper from 'react-id-swiper';


const NewDealMenuElement = (title, id) => (
    <Tab className="new-deals__menu-item"
         selectedClassName="new-deals__menu-item new-deals__menu-item_active"
         key={id}>

        <p>{title}</p>
    </Tab>
);


export default class NewDeals extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dealsList: [],
            dealsElementsList: []
        };
    }

    componentDidMount() {
        ShopApi.query("categories").then(dealsList => {
            this.setState({dealsList})
        });

        ShopApi.query("featured").then(dealsElementsList => {
            this.setState({dealsElementsList})
        });
    }

    render() {
        const params = {
            slidesPerView: 3,
            spaceBetween: 10,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
        };

        return (
            <section className="new-deals wave-bottom">
                <h2 className="h2">Новинки</h2>

                <Tabs className="new-deals__menu">
                    <TabList className="new-deals__menu-items">
                        {this.state.dealsList.map(item => NewDealMenuElement(item.title, item.id))}
                    </TabList>
                    {this.state.dealsList.map(category => {
                        return (
                            <TabPanel key={category.id}>
                                <Swiper className="new-deals__slider" {...params}>
                                    {this.state.dealsElementsList.map(listItem => {
                                        if (listItem.categoryId === category.id) {
                                            return (
                                                <div key={listItem.id}>
                                                    <div className="new-deals__product"
                                                         style={{backgroundImage: `url( ${listItem.images[0]} )`}}>
                                                        <Link to={`/product-card-desktop/${listItem.id}`}/>
                                                        <div className="new-deals__product_favorite"/>
                                                    </div>
                                                    <div className="new-deals__product-info">
                                                        <Link className="h3"
                                                              to={`/product-card-desktop/${listItem.id}`}>{listItem.title}</Link>
                                                        <p>Производитель:
                                                            <br/>
                                                            <span>{listItem.brand}</span>
                                                        </p>
                                                        <h3 className="h3">{listItem.price} ₽</h3>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })}
                                </Swiper>
                            </TabPanel>
                        );
                    })}
                </Tabs>
            </section>
        );
    }
}