import React from "react";
import "./forms.styles.scss"
import SignIn from "./sign-in/sign-in.component";
import SignUp from "./sign-up/sign-up.component";

const Forms = () => (

    <div className="forms">
        <div className="sign-in-and-sign-up">
            <SignIn></SignIn>
            <SignUp></SignUp>
        </div>
    </div>

)
export default Forms;