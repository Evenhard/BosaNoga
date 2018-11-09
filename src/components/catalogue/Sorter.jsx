import React from 'react';

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

export default Sorter;