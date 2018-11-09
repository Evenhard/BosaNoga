import React from 'react';

const FilterType = (props) => (
    <section className="sidebar__division">
        <div className="sidebar__catalogue-list">
            <div className="sidebar__division-title">
                <h3>Каталог</h3>
                <div className="opener-down"/>
            </div>
            <ul>
                {props.type.map((item, index) => {
                    return (
                        <li key={index}>
                            <a onClick={() => props.clickHandler(item)}>{item}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    </section>
);

export default FilterType;