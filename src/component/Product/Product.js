// import ReactDOM from 'react-dom'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    // console.log(props)
    const { img, name, seller, price, stock, star } = props.product
    const element = <FontAwesomeIcon icon={faShoppingCart} />
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
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly></Rating>
                <br />
                <button onClick={() => props.handleAddToCard(props.product)} className="regular-Btn">{element} add to cart</button>
            </div>
        </div>
    );
};

export default Product;