import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;

    // const totalreducer = (previous, product) => previous + product.price;
    // const total = cart.reduce(totalreducer, 0);

    let totalQualtity = 0;

    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1
        }
        total = total + product.price * product.quantity;
        totalQualtity = totalQualtity + product.quantity;
    }

    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <h2>Order Summery</h2>
            <h3>Items Ordered : {totalQualtity}</h3>
            <h3>Total : $ {total.toFixed(2)}</h3>
            <h4>Shipping : {shipping.toFixed(2)}</h4>
            <h4>Tax : {tax.toFixed(2)}</h4>
            <h4>Grand Total : {grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;