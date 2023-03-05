import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { useState } from "react";
import "./sign-in-form.style.jsx";
import { SignInButtons, SignInContainer } from "./sign-in-form.style.jsx";

//saga
import { useDispatch } from "react-redux";

import {
    googleSignInStart,
    emailSignInStart,
} from "../../store/user/user.action";

const defaultFormFields = {
    email: "",
    password: "",
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const dispatch = useDispatch();

    const resetFormInputs = () => {
        setFormFields(defaultFormFields);
    };
    const signInWithGoogle = async () => {
        dispatch(googleSignInStart());
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            console.log(email, password);
            dispatch(emailSignInStart(email, password));
            resetFormInputs();
        } catch (error) {
            switch (error.code) {
                case "auth/wrong-password":
                    alert("incorrect password for email");
                    break;
                case "auth/user-not-fount":
                    alert("no user associated with this email");
                    break;
                default:
                    console.log(error);
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <SignInContainer onSubmit={handleSubmit}>
            <h2>I alredy have an account</h2>
            <span>Sign in with your email and password</span>
            <FormInput
                label="email"
                type="email"
                name="email"
                required
                value={email}
                onChange={handleChange}
            />
            <FormInput
                label="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                value={password}
                onChange={handleChange}
            />
            <SignInButtons>
                <Button type="submit">Sign In</Button>
                <Button
                    type="button"
                    onClick={signInWithGoogle}
                    buttonType={BUTTON_TYPES_CLASSES.google}
                >
                    Google sign in
                </Button>{" "}
            </SignInButtons>
        </SignInContainer>
    );
};

export default SignInForm;
