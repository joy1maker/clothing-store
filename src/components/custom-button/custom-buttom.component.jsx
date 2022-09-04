import React from "react";
import './custom-buttom.styles.scss'


const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
    <button  {...otherProps}
        className={` ${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    >
        <div className="up">{children}</div>
    </button>


)
export default CustomButton;