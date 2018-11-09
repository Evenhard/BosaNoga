import React, {Component} from "react";

import {Link} from 'react-router-dom';

let classNames = require('classnames');


const mainMenuList = ['Акции', 'Женская обувь', 'Мужская обувь', 'Детская обувь', 'Аксессуары', 'Для дома', 'Бренды', 'Новинки'];

const droppedMenuList = [{
    topic: 'Повод:',
    className: 'dropped-menu__lists dropped-menu__lists_women',
    filter: 'reason',
    items: ['Прогулка', 'Высокая мода', 'Спорт']
}, {
    topic: 'Категории:',
    className: 'dropped-menu__lists',
    filter: 'type',
    items: ['Кроссовки', 'Туфли', 'Кеды', 'Сапоги', 'Ботинки', 'Шлепанцы', 'Ботильоны']
}, {
    topic: 'Сезон:',
    className: 'dropped-menu__lists',
    filter: 'season',
    items: ['Лето', 'Осень']
}, {
    topic: 'Бренды:',
    className: 'dropped-menu__lists dropped-menu__lists_three-coloumns',
    filter: 'brand',
    items: ["Chanel", "Manolo Blahnik", "Reebok", "Christian Louboutin", "Vans", "Timberland", "Hunter", "ALDO", "Dior", "SWEAR", "GIVENCHY", "JIMMY CHOO", "Dolce & Gabbana", "GUCCI", "BALENCIAGA", "REIKE NEN", "MARNI", "MICHEL VIVIEN", "TORY BURCH", "NIKE", "GUIDI"]
}];


export default class MainMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isVisible: false
        };

        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        this.setState({
            isVisible: !this.state.isVisible
        });
    }

    render() {
        const DroppedMenuChildElement = (name, filter, index) => (
            <li className="dropped-menu__item" key={index}>
                <Link to={`/catalogue/?${filter}=${name}`} onClick={this.clickHandler}>{name}</Link>
            </li>
        );

        const DroppedMenuParentElement = (className, topic, filter, items, index) => (
            <div className={className} key={index}>
                <h3 className="dropped-menu__list-title">{topic}</h3>
                <ul className="dropped-menu__list">
                    {items.map((item, index) => DroppedMenuChildElement(item, filter, index))}
                </ul>
            </div>
        );

        const DroppedMenu = () => {
            let menuClassName = classNames({
                'dropped-menu': true,
                'dropped-menu_visible': this.state.isVisible
            });

            return (
                <div className={menuClassName}>
                    <div className="wrapper">
                        {droppedMenuList.map((item, index) =>
                            DroppedMenuParentElement(item.className, item.topic, item.filter, item.items, index))}
                    </div>
                </div>
            );
        };

        const MainMenuElement = (name, index) => (
            <li className="main-menu__item main-menu__item_sales" key={index}>
                <Link to="/catalogue" onClick={this.clickHandler}>{name}</Link>
            </li>
        );

        return (
            <div>
                <div className="main-menu">
                    <div className="wrapper">
                        <ul className="main-menu__items">
                            {mainMenuList.map((item, index) => MainMenuElement(item, index))}
                        </ul>
                    </div>
                </div>
                <DroppedMenu/>
            </div>
        );
    }
}