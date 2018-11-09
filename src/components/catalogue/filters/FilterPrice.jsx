import React from 'react';

const FilterPrice = () => (
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
);

export default FilterPrice;