import { Fragment, useState } from "react";
import {
  LoginContainer,
  LoginContent,
  ButtonsContainer,
} from "./sign-in.styles";

import loginImage from "../../assets/loginImage.jpg";
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
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formField, [name]: value });
  };

  return (
    <Fragment>
      <LoginContainer>
        <LoginContent>
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
              <Button
              type="submit" 
              buttonType={BUTTON_TYPE_CLASSES.base}>
                Sign In
              </Button>
            </ButtonsContainer>
          </form>
        </LoginContent>
        <img src={loginImage} alt="loginImage" />
      </LoginContainer>
    </Fragment>
  );
};

export default SignInForm;
