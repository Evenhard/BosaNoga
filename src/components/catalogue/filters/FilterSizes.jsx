import React from 'react';

let classNames = require('classnames');

const FilterSizesChild = (props) => (
    <li>
        <label>
            <input type="checkbox"
                   className="checkbox"
                   name={`checkbox-${props.size}`}
                   onChange={() => props.clickHandler(props.size)}
                   value={props.size}
            />
            <span className="checkbox-custom"/>
            <span className="label">{props.size}</span>
        </label>
    </li>
);

const FilterSizes = (props) => {
    let list1 = [];
    let list2 = [];

    for (let i = 0; i < props.sizes.length; i++) {
        if (i % 2 > 0) {
            list2.push(<FilterSizesChild clickHandler={props.clickHandler} key={i} size={props.sizes[i]}/>);

        } else {
            list1.push(<FilterSizesChild clickHandler={props.clickHandler} key={i} size={props.sizes[i]}/>);
        }
    }

    let divClassName = classNames({
        'sidebar__size': !props.isHeelHeight,
        'sidebar__heel-height': props.isHeelHeight
    });

    return (
        <section className="sidebar__division">
            <div className={divClassName}>
                <div className="sidebar__division-title">
                    <h3>Размер</h3>
                    {/*<h3>Размер каблука</h3>*/}
                    <div className="opener-down"/>
                </div>
                <ul>
                    <div className="list-1">
                        {list1}
                    </div>
                    <div className="list-2">
                        {list2}
                    </div>
                </ul>
            </div>
        </section>
    )
};

export default FilterSizes;