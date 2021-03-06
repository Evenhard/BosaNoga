import React from 'react';

const Pagination = () => (
    <div className="product-catalogue__pagination">
        <div className="page-nav-wrapper">
            <div className="angle-back"><a href="#"/></div>
            <ul>
                <li className="active"><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li><a href="">...</a></li>
                <li><a href="#">99</a></li>
            </ul>
            <div className="angle-forward"><a href="#"/></div>
        </div>
    </div>
);

export default Pagination;


