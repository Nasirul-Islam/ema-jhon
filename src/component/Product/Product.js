import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product)
    const { img, name, seller, price, stock } = props.product
    return (
        <div className="product">
            <div className="">
                <img src={img} alt="" />
            </div>
            <div className="product-text">
                <h3 className="product-name">{name}</h3>
                <p><small>by : {seller}</small></p>
                <h2>$ {price}</h2>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button className="regular-Btn">add to cart</button>
            </div>
        </div>
    );
};

export default Product;