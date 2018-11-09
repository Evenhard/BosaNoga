import React, {Component} from 'react';
import ShopApi from "../js/script";
import Swiper from 'react-id-swiper';

export default class ProductCardDesktop extends Component {
    constructor(props) {
        super(props);

        this.state = {
            product: {
                images: []
            }
        };
    }

    componentWillMount() {
        ShopApi.query(`products/${this.props.match.params.id}`).then(product => {
            this.setState({product})
        });
    }

    render() {
        const params = {
            slidesPerView: 3,
            spaceBetween: 10,
            direction: 'vertical',
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: 'favourite-product-slider__arrow favourite-product-slider__arrow_up arrow-up'
            },
        };

        return (
            <main className="product-card">
                <section className="product-card-content">
                    <h2 className="section-name">Ботинки женские</h2>
                    <section className="product-card-content__main-screen">
                        {
                            //Слайдер выбранного товара
                        }

                        <section className="main-screen__favourite-product-slider">
                            <Swiper className="favourite-product-slider" {...params}>
                                {
                                    this.state.product.images.map((image, index) => {
                                        return (
                                            <div key={index}
                                                 className="favourite-product-slider__item favourite-product-slider__item-1"
                                                 style={{backgroundImage: `url( ${image} )`}}>
                                                <a href="#"/>
                                            </div>
                                        )
                                    })

                                    // this.state.product.images.map(item => console.log(item))

                                }
                            </Swiper>
                        </section>

                        {/*<section className="main-screen__favourite-product-slider">*/}
                        {/*<div className="favourite-product-slider">*/}
                        {/*<div className="favourite-product-slider__arrow favourite-product-slider__arrow_up arrow-up"/>*/}

                        {/*<div className="favourite-product-slider__item favourite-product-slider__item-1"*/}
                             {/*style={{backgroundImage: `url( ${this.state.product.images[0]} )`}}>*/}
                        {/*<a href="#"/>*/}
                        {/*</div>*/}

                        {/*<div className="favourite-product-slider__item favourite-product-slider__item-2">*/}
                        {/*<a href="#"/>*/}
                        {/*</div>*/}
                        {/*<div className="favourite-product-slider__item favourite-product-slider__item-3">*/}
                        {/*<a href="#"/>*/}
                        {/*</div>*/}
                        {/*<div*/}
                        {/*className="favourite-product-slider__arrow favourite-product-slider__arrow_down arrow-down"/>*/}
                        {/*</div>*/}
                        {/*</section>*/}

                        {
                            //Изображение выбранного товара
                        }
                        <div className="main-screen__favourite-product-pic">
                            <a href="#"><img src={this.state.product.images[0]} /></a>
                            <a href="#" className="main-screen__favourite-product-pic__zoom"/>
                        </div>
                        {
                            //Блок информации о товаре
                        }
                        <div className="main-screen__product-info">
                            <div className="product-info-title"><h2>Ботинки женские</h2>
                                <div className="in-stock">В наличии</div>
                            </div>
                            <div className="product-features">
                                <table className="features-table">
                                    <tbody>
                                    <tr>
                                        <td className="left-col">Артикул:</td>
                                        <td className="right-col">BD0677C</td>
                                    </tr>
                                    <tr>
                                        <td className="left-col">Производитель:</td>
                                        <td className="right-col"><a href="#"><span className="producer">Fabi</span></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="left-col">Цвет:</td>
                                        <td className="right-col">чёрный</td>
                                    </tr>
                                    <tr>
                                        <td className="left-col">Материалы:</td>
                                        <td className="right-col">натуральная кожа</td>
                                    </tr>
                                    <tr>
                                        <td className="left-col">Сезон:</td>
                                        <td className="right-col">Осень-зима</td>
                                    </tr>
                                    <tr>
                                        <td className="left-col">Повод:</td>
                                        <td className="right-col">Любой</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="size">Размер</p>
                            <ul className="sizes">
                                <li><a href="#">36</a></li>
                                <li className="active"><a href="#">37</a></li>
                                <li><a href="#">38</a></li>
                                <li><a href="#">38</a></li>
                                <li><a href="#">39</a></li>
                            </ul>
                            <div className="size-wrapper">
                                <a href="#"><span className="size-rule"/><p className="size-table">Таблица размеров</p>
                                </a>
                            </div>
                            <a href="#" className="in-favourites-wrapper">
                                <div className="favourite"/>
                                <p className="in-favourites">В избранное</p>
                            </a>
                            <div className="basket-item__quantity">
                                <div
                                    className="basket-item__quantity-change basket-item-list__quantity-change_minus">-
                                </div>
                                1
                                <div
                                    className="basket-item__quantity-change basket-item-list__quantity-change_plus">+</div>
                            </div>
                            <div className="price">26 120 ₽</div>
                            <button className="in-basket in-basket-click">В корзину</button>
                        </div>

                    </section>
                </section>
            </main>
        );
    }
}