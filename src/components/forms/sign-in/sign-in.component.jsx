import React, { Component } from "react";
import './sign-in.styles.scss'
import FormInput from "../../form-input/form-input.component";
import CustomButton from "../../custom-button/custom-buttom.component";
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../../firebase/firebase.utils";
class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    onSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            signInAuthUserWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: ''
            });
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
        return (
            <div className="sign-in">
                <h2 className="title">I Have Account</h2>
                <span>signin with email and password</span>

                <form onSubmit={this.onSubmit}>
                    <FormInput name="email"
                        type="email"
                        value={this.state.email}
                        required
                        handleChange={this.onChange}
                        label="email"
                    />

                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password} required
                        handleChange={this.onChange}
                        label="passowrd"
                    />
                    <div className="buttons-container">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGooglePopup} isGoogleSignIn={true}>Sign In with google</CustomButton>
                    </div>
                </form>


            </div>
        )


    }




}

export default SignIn;