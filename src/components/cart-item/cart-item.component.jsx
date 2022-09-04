import React from "react";
import "./cart-item.styles.scss"

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <div className="cart-item">
        <img src={imageUrl} alt="item"></img>
        <div className="itemDetails">
            <div className="name">{name}</div>
            <span className="price">{quantity}  X {price}</span>
        </div>
    </div>
)

export default CartItem;