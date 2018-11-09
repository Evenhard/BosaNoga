import React from 'react';
import {Link} from 'react-router-dom';

const ProductList = (props) => (
    <section className="product-catalogue__item-list">
        {props.productList.map(item => {
            return (
                <Link className="item-list__item-card item" to={`/product-card-desktop/${item.id}`} key={item.id}>
                    <div className="item-pic">
                        <img className="item-pic" src={item.images[0]} alt={item.title}/>
                        <div className="product-catalogue__product_favorite" onClick={() => console.log('БУПК!')}><p/></div>
                        {
                            //тут меняются стили
                            //product-catalogue__product_favorite
                            //product-catalogue__product_favorite-chosen
                        }
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

export default ProductList;