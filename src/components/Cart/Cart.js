import React from 'react';

const Cart = (props) => {
    return (
        <div>
            <h2>This is cart</h2>
            <h2>Cart Items : {props.cart.length}</h2>
        </div>
    );
};

export default Cart;