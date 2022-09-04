import React from "react";
import "./header.styles.scss"
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/4.3 crown.svg'
import { signOutUser } from "../../firebase/firebase.utils"
import { connect } from "react-redux/es/exports";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo"></Logo>
        </Link>
        <div className="options">
            <Link to="/shop" className="option">
                SHOP
            </Link>
            <Link to="/shop" className="option">
                CONTACT
            </Link>

            {
                currentUser ?


                    <div className="option" onClick={() => {
                        console.log(currentUser)
                            ; signOutUser()
                    }}>SIGN OUT</div>
                    :


                    <Link to="/signin" className="option">
                        SIGN IN

                    </Link>
            }
            <CartIcon></CartIcon>
        </div>

        {
            hidden ? null : <CartDropDown />
        }
    </div>
)

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => (
    {
        currentUser,
        hidden
    }
)

export default connect(mapStateToProps)(Header);