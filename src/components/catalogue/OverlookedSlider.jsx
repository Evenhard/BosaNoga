import React from 'react';
import {Link} from 'react-router-dom';

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

export default OverlookedSlider;