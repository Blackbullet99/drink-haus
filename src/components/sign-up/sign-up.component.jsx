import { Fragment, useState } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";

import signupImage from "../../assets/signupImage.jpg";
import {
  SignUpContent,
  ButtonsContainer,
  LoginContainer,
  ActionContainer,
  ActionLink,
} from "./sign-up.styles";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formField, setFormFields] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formField;

  const resetFormFields = () => {
    setFormFields(defaultFormField);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("password does not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

     
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email/-already-in-use") {
        alert("Email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formField, [name]: value });
  };

  return (
    <Fragment>
      <LoginContainer>
        <SignUpContent>
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <FormInput
              label="Display Name"
              type="text"
              required
              onChange={handleChange}
              name="displayName"
              value={displayName}
            />

            <FormInput
              label="Email"
              type="email"
              required
              onChange={handleChange}
              name="email"
              value={email}
            />

            <FormInput
              label="Password"
              type="password"
              required
              onChange={handleChange}
              name="password"
              value={password}
            />

            <FormInput
              label="confirm Password"
              type="password"
              required
              onChange={handleChange}
              name="confirmPassword"
              value={confirmPassword}
            />
            <ButtonsContainer>
              <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.base}>
                Sign Up
              </Button>
            </ButtonsContainer>
            <ActionContainer>
              Already have account?
              <ActionLink to="/auth">Sign In</ActionLink>
            </ActionContainer>
          </form>
        </SignUpContent>
        <img src={signupImage} alt="signupImage" />
      </LoginContainer>
    </Fragment>
  );
};

export default SignUpForm;
