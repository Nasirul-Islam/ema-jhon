import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, getStoredCart } from '../../utilities/fakedb'
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProduct, setdisplayProduct] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setdisplayProduct(data)
            })
    }, [])

    useEffect(() => {
        if (products.length) {
            const saveCard = getStoredCart();
            const storedCard = [];
            for (const key in saveCard) {
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    const quantity = saveCard[key];
                    addedProduct.quantity = quantity;
                    console.log(addedProduct)
                    storedCard.push(addedProduct)
                }
            }
            setCart(storedCard)
        }
    }, [products])

    const handleAddToCard = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
        addToDb(product.key)
    }

    const heandelSearch = event => {
        const searchText = event.target.value;
        const matchedProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setdisplayProduct(matchedProduct);
        console.log(matchedProduct.length)
    }

    return (
        <>
            <div className="search-container">
                <input type="text"
                    onChange={heandelSearch}
                    placeholder="Search Product" />
            </div>
            <div className="shop-container">
                <div className="empty-div"></div>
                <div className="product-container">
                    {
                        displayProduct.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddToCard={handleAddToCard}
                        ></Product>)
                    }
                </div>
                <div className="card">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </>
    );
};

export default Shop;