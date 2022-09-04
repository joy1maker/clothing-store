import React from "react";
import CustomButton from "../custom-button/custom-buttom.component";
import './cart-dropdown.styles.scss'
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux/es/exports";

const CartDropDown = ({ CartItems }) => (
    <div className="cart-dropdown" >
        <div className="cart-items">
            {
                CartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
            }
        </div>
        <CustomButton onClick={() => console.log(CartItems)}>GO TO CHECK OUT</CustomButton>
    </div>
);
const mapStateToProps = (state) => ({
    CartItems: state.cart.cartItems
})
export default connect(mapStateToProps)(CartDropDown);


