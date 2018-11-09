import React, {Component} from 'react';

import FilterType from './filters/FilterType';
import FilterSizes from './filters/FilterSizes';
import FilterPrice from './filters/FilterPrice';
import FilterColor from "./filters/FilterColor";

let classNames = require('classnames');

const filter = {
    type: ['Кроссовки', 'Туфли', 'Кеды', 'Сапоги', 'Ботинки', 'Шлепанцы', 'Ботильоны', 'Босоножки'],
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
    reason: ['Прогулка', 'Высокая мода', 'Спорт'],
    season: ['Лето', 'Осень'],
    sizes: [8, 10, 12, 14, 15, 16, 18, 20],
    heelSize: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
};

export default class Filters extends Component {
    constructor(props) {
        super(props);

        this.state = {
            something: {},
        };
    }

    render() {
        return (
            <section className="sidebar">

                <FilterType type={filter.type}
                            clickHandler={this.props.clickHandler}/>

                <div className="separator-150 separator-150-1"/>
                <FilterPrice/>

                <div className="separator-150 separator-150-2"/>
                <FilterColor color={filter.color}
                             mod="color"
                             clickHandler={this.props.clickHandler}/>

                <div className="separator-150 separator-150-3"/>
                <FilterSizes sizes={filter.sizes}
                             clickHandler={this.props.clickHandler}
                             isHeelHeight={false}/>

                <div className="separator-150 separator-150-4"/>
                <FilterSizes sizes={filter.heelSize}
                             clickHandler={this.props.clickHandler}
                             isHeelHeight/>


                <div className="separator-150 separator-150-5"/>
                <section className="sidebar__division">
                    <div className="sidebar__occasion">
                        <div className="sidebar__division-title">
                            <h3>Повод</h3>
                            <div className="opener-down"/>
                        </div>
                        <ul>
                            {filter.reason.map((item, index) => {
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

                </section>
                <div className="separator-240"/>

                <section className="sidebar__division">
                    <div className="drop-down">
                        <a><span className="drop-down-icon"/>Сбросить</a>
                    </div>
                </section>


            </section>
        )
    }
}