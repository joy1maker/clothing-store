import React from "react";
import "./sign-up.styles.scss";
import FormInput from "../../form-input/form-input.component";
import CustomButton from "../../custom-button/custom-buttom.component";
import { createUserDocumentFromAuth, createAuthUserWithEmailAndPassword } from "../../../firebase/firebase.utils";
import { Component } from "react";



class SignUp extends Component {
    defaultFormFields = {
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
    };
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    handelSubmit = async (event) => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("password don't match");
            return;
        }
        try {
            console.log(email + "    " + password);
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        }
        catch (error) {
            console.log(error);
        }
    }

    onChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">Don't have account ?</h2>
                <span>SignUp with email and password </span>
                <form onSubmit={this.handelSubmit}>
                    <FormInput
                        label="Display Name"
                        type="text"
                        required
                        handleChange={this.onChange}
                        name="displayName"
                        value={displayName}
                    />

                    <FormInput
                        label="Email"
                        type="email"
                        required
                        handleChange={this.onChange}
                        name="email"
                        value={email}
                    />

                    <FormInput
                        label="Password"
                        type="password"
                        required
                        handleChange={this.onChange}
                        name="password"
                        value={password}
                    />

                    <FormInput
                        label="Confirm Password"
                        type="password"
                        required
                        handleChange={this.onChange}
                        name="confirmPassword"
                        value={confirmPassword}
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>

            </div>


        )


    }


}

export default SignUp;