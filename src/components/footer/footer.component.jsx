import { Fragment, useState } from "react";

import {
  FooterContainer,
  FooterContent,
  FooterInfo,
  Documentation,
  EmailInfo,
  Socials,
  SocialsContent,
} from "./footer.styles";
import FormInput from "../form-input/form-input.component";

const defaultFormField = {
  email: "",
};

const Footer = () => {
  const [formField, setFormFields] = useState(defaultFormField);
  const { email } = formField;

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
      <FooterContainer>
        <FooterContent>
          <FooterInfo>
            <h1>Haus</h1>
            <Documentation>
              <p>Contact us</p>
              <p>Return policy</p>
              <p>Privacy policy</p>
              <p>Terms of conditions</p>
            </Documentation>
            <EmailInfo>
              <h2>Stay posted</h2>
              <p>
                Let's be friends. Subscribe to our newsletter to receive updates
                on new launches, recipes, playlists, and more
              </p>
              <form onSubmit={handleSubmit}>
                <FormInput
                  label="Email"
                  type="email"
                  required
                  onChange={handleChange}
                  name="email"
                  value={email}
                />
              </form>
            </EmailInfo>
          </FooterInfo>
        </FooterContent>
        <Socials>
          <h1>Socials</h1>
          <SocialsContent>
            <a href="">Facebook</a>
            <a href="">Instagram</a>
            <a href="">Spotify</a>
            <a href="">Twitter</a>
          </SocialsContent>
        </Socials>
      </FooterContainer>
    </Fragment>
  );
};

export default Footer;
