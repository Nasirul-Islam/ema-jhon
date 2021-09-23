import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;

    const totalreducer = (previous, product) => previous + product.price;
    const total = cart.reduce(totalreducer, 0);

    // let total = 0;
    // for (const product of cart) {
    //     total = total + product.price
    // }

    const shipping = 15;
    const tax = (total + shipping) / 10;
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <h2>Order Summery</h2>
            <h3>Items Ordered : {cart.length}</h3>
            <h3>Total : $ {total.toFixed(2)}</h3>
            <h4>Shipping : {shipping.toFixed(2)}</h4>
            <h4>Tax : {tax.toFixed(2)}</h4>
            <h4>Grand Total : {grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;