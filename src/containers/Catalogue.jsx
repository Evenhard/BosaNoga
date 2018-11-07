import React, {Component} from 'react';

import Breadcrumbs from '../Components/Breadcrumbs';
import Pagination from '../Components/Pagination';
import ShopApi from "../js/script";

import {Link} from 'react-router-dom';

const queryString = require('query-string');

const OverlookedSlider = () => (
    <section className="product-catalogue__overlooked-slider">
        <h3>Вы смотрели:</h3>
        <div className="overlooked-slider">
            <div className="overlooked-slider__arrow overlooked-slider__arrow_left arrow"/>
            <div className="overlooked-slider__item overlooked-slider__item-1">
                <Link to="/product-card-desktop"/>
            </div>
            <div className="overlooked-slider__item overlooked-slider__item-2">
                <Link to="/product-card-desktop"/>
            </div>
            <div className="overlooked-slider__item overlooked-slider__item-3">
                <Link to="/product-card-desktop"/>
            </div>
            <div className="overlooked-slider__item overlooked-slider__item-4">
                <Link to="/product-card-desktop"/>
            </div>
            <div className="overlooked-slider__item overlooked-slider__item-5">
                <Link to="/product-card-desktop"/>
            </div>
            <div className="overlooked-slider__arrow overlooked-slider__arrow_right arrow"/>
        </div>
    </section>
);

const filter = {
    catalogue: ['Балетки', 'Босоножки и сандалии', 'Ботильоны', 'Ботинки', 'Ботфорты', 'Галоши', 'Тапочки', 'Туфли', 'Сапоги'],
    color: [{
        code: 'beige',
        title: 'Бежевый'
    }, {
        code: 'whitesnake',
        title: 'Белый'
    }, {
        code: 'shocking-blue',
        title: 'Голубой'
    }, {
        code: 'yellow',
        title: 'Жёлтый'
    }, {
        code: 'king-crimson',
        title: 'Алый'
    }, {
        code: 'deep-purple',
        title: 'Фиолетовый'
    }, {
        code: 'black-sabbath',
        title: 'Чёрный'
    }],
    sizes: [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    occasion: ['Офис', 'Вечеринка', 'Свадьба', 'Спорт', 'Путешествие', 'Свидание', 'Дома', 'Произвести впечатление']


};

const SidebarSizesChild = (props) => (
    <li>
        <label>
            <input type="checkbox" className="checkbox" name={`checkbox-${props.size}`}/>
            <span className="checkbox-custom"/>
            <span className="label">{props.size}</span>
        </label>
    </li>
);

const SidebarSizes = () => {
    let list1 = [];
    let list2 = [];

    for (let i = 0; i < filter.sizes.length; i++) {
        if (filter.sizes[i] % 2 > 0) {
            list1.push(<SidebarSizesChild key={i} size={filter.sizes[i]}/>);

        } else {
            list2.push(<SidebarSizesChild key={i} size={filter.sizes[i]}/>);
        }
    }

    return (
        <ul>
            <div className="list-1">
                {list1}
            </div>
            <div className="list-2">
                {list2}
            </div>
        </ul>
    )
};

const Sidebar = () => (
    <section className="sidebar">
        <section className="sidebar__division">
            <div className="sidebar__catalogue-list">
                <div className="sidebar__division-title">
                    <h3>Каталог</h3>
                    <div className="opener-down"/>
                </div>
                <ul>
                    {filter.catalogue.map((item, index) => {
                        return (
                            <li key={index}><a>{item}</a></li>
                        )
                    })}
                </ul>
            </div>
        </section>
        <div className="separator-150 separator-150-1"/>
        <section className="sidebar__division">
            <div className="sidebar__price">
                <div className="sidebar__division-title">
                    <h3>Цена</h3>
                    <div className="opener-down"/>
                </div>
                <div className="price-slider">
                    <div className="circle-container">
                        <div className="circle-1"/>
                        <div className="line-white"/>
                        <div className="line-colored"/>
                        <div className="circle-2"/>
                    </div>
                    <div className="counter">
                        <input type="text" className="input-1" defaultValue="1000"/>
                        <div className="input-separator"/>
                        <input type="text" className="input-2" defaultValue="30 000"/>
                    </div>
                </div>
            </div>
        </section>
        <div className="separator-150 separator-150-2"/>
        <section className="sidebar__division">
            <div className="sidebar__color">
                <div className="sidebar__division-title">
                    <h3>Цвет</h3>
                    <div className="opener-down"/>
                </div>
                <ul>
                    {filter.color.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href="#">
                                    <div className={`color ${item.code}`}/>
                                    <span className="color-name">{item.title}</span>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
        <div className="separator-150 separator-150-3"/>
        <section className="sidebar__division">
            <div className="sidebar__size">
                <div className="sidebar__division-title">
                    <h3>Размер</h3>
                    <div className="opener-down"/>
                </div>
                <SidebarSizes/>
            </div>
        </section>
        <div className="separator-150 separator-150-4"/>
        <section className="sidebar__division">
            <div className="sidebar__heel-height">
                <div className="sidebar__division-title">
                    <h3>Размер каблука</h3>
                    <div className="opener-up"/>
                </div>
            </div>
        </section>
        <div className="separator-150 separator-150-5"/>
        <section className="sidebar__division">
            <div className="sidebar__occasion">
                <div className="sidebar__division-title">
                    <h3>Повод</h3>
                    <div className="opener-down"/>
                </div>
                <ul>
                    {filter.occasion.map((item, index) => {
                        return (
                            <li key={index}><a href="">{item}</a></li>
                        )
                    })}
                </ul>
            </div>
        </section>
        <div className="separator-150 separator-150-6"/>
        <section className="sidebar__division">
            <div className="sidebar__season">
                <div className="sidebar__division-title">
                    <h3>Сезон</h3>
                    <div className="opener-up"/>
                </div>
            </div>
        </section>
        <div className="separator-150 separator-150-7"/>
        <section className="sidebar__division">
            <div className="sidebar__brand">
                <h3>Бренд</h3>
                <form action="post" className="brand-search">
                    <input type="search" className="brand-search" id="brand-search" placeholder="Поиск"/>
                    <input type="submit" name="" value="" className="submit"/>
                </form>
            </div>

            <label><input type="checkbox" className="checkbox" name="checkbox-disc"/><span
                className="checkbox-discount"/> <span className="text-discount">Со скидкой</span></label>

            <div className="separator-240"/>
        </section>

        <section className="sidebar__division">
            <div className="drop-down">
                <a href="#"><span className="drop-down-icon"/>Сбросить</a>
            </div>
        </section>
    </section>
);

const Sorter = () => (
    <section className="product-catalogue__head">
        <div className="product-catalogue__section-title">
            <h2 className="section-name">Женская обувь</h2><span className="amount"> 1 764 товара</span>
        </div>
        <div className="product-catalogue__sort-by">
            <p className="sort-by">Сортировать</p>
            <select name="" id="sorting">
                <option value="">по популярности</option>
                <option value="">по размеру</option>
                <option value="">по производителю</option>
            </select>
        </div>
    </section>
);

export default class Catalogue extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: {
                page: 1,
                brand: undefined,
                color: undefined,
                sortBy: 'popularity'
            },
            productList: [],
            isFetching: false
        };
    }

    componentDidUpdate() {
        const sQuery = `?${queryString.stringify(this.state.query)}`;
        const obCurrentQuery = queryString.parse(window.location.search);

        if (window.location.search !== sQuery) {
            this.setState({
                query: obCurrentQuery,
                isFetching: true
            });
        }

        if (this.state.isFetching) {
            ShopApi.query(`products/${sQuery}`).then(productList => {
                this.setState({productList, isFetching: false})
            });
        }

    }

    componentWillMount() {
        this.setState({query: queryString.parse(window.location.search), isFetching: true});
    }

    componentDidMount() {
        ShopApi.query(`products/?${queryString.stringify(this.state.query)}`).then(productList => {
            this.setState({productList, isFetching: false})
        });
    }

    render() {
        const ProductCatalogue = () => (
            <section className="product-catalogue__item-list">
                {this.state.productList.map(item => {
                    return (
                        <Link className="item-list__item-card item" to={`/product-card-desktop/${item.id}`} key={item.id}>
                            <div className="item-pic">
                                <img className="item-pic" src={item.images[0]} alt={item.title}/>
                                {
                                    //тут меняются стили
                                    //product-catalogue__product_favorite
                                    //product-catalogue__product_favorite-chosen
                                }
                                <div className="product-catalogue__product_favorite"><p/></div>
                                <div className="arrow arrow_left"/>
                                <div className="arrow arrow_right"/>
                            </div>
                            <div className="item-desc">
                                <h4 className="item-name">{item.title}</h4>
                                <p className="item-producer">Производитель: <span
                                    className="producer">{item.brand}</span></p>
                                <p className="item-price">{item.price}</p>
                                <div className="sizes">
                                    <p className="sizes__title">Размеры в наличии:</p>
                                    <p className="sizes__avalible">36, 37, 38, 39, 40, 41, 42</p>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </section>
        );

        return (
            <div>
                <Breadcrumbs/>
                <main className="product-catalogue">
                    <Sidebar/>
                    <section className="product-catalogue-content">
                        <Sorter/>
                        {
                            console.log(this.state.productList)
                        }
                        <ProductCatalogue/>
                        <Pagination/>
                    </section>
                </main>
                <OverlookedSlider/>
            </div>
        );
    }
}