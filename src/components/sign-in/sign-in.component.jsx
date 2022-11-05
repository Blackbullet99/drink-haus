import { Fragment, useState } from "react";

import { signInAuthUserWithEmailAndPassword } from "../../utils/firebase.utils";
import signinImage from "../../assets/signinImage.jpg";
import {
  SignInContent,
  ButtonsContainer,
  LoginContainer,
  ActionContainer,
  ActionLink,
} from "./sign-in.styles";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

const defaultFormField = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formField, setFormFields] = useState(defaultFormField);
  const { email, password } = formField;

  const resetFormFields = () => {
    setFormFields(defaultFormField);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log("user sign in encountered an error", error);
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
        <SignInContent>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
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
            <ButtonsContainer>
              <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.base}>
                Sign In
              </Button>
            </ButtonsContainer>
            <ActionContainer>
              Don't have an account?
              <ActionLink to="/sign-up">Create One</ActionLink>
            </ActionContainer>
          </form>
        </SignInContent>
        <img src={signinImage} alt="signinImage" />
      </LoginContainer>
    </Fragment>
  );
};

export default SignInForm;
