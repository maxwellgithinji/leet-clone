import React from 'react';

import Button from '@/components/Button/Button';
import Form from '@/components/Form/Form';
import HelpLink from '@/components/HelpLink/HelpLink';
import TextInput from '@/components/TextInput/TextInput';

type SignUpProps = {
  openLoginForm: React.MouseEventHandler<HTMLButtonElement>;
  submitForm: React.MouseEventHandler<HTMLButtonElement>;
};

const SignUp: React.FC<SignUpProps> = ({ openLoginForm, submitForm }) => {
  return (
    <Form headingText="Sign up to leet clone">
      <TextInput
        id="email"
        name="email"
        type="email"
        label="Your Email"
        placeholder="jondoe@email.com"
      />
      <TextInput
        id="displayName"
        name="displayName"
        type="displayName"
        label="Your Email"
        placeholder="jondoe"
      />
      <TextInput
        id="password"
        name="password"
        type="password"
        label="Your Password"
        placeholder="********"
      />

      <Button
        buttonClass="primary"
        text="Sign Up"
        buttonType="submit"
        onClick={submitForm}
      />
      <HelpLink
        question="Already have an account"
        link={
          <Button
            buttonClass="link"
            text="Login Here"
            onClick={openLoginForm}
          />
        }
      />
    </Form>
  );
};

export default SignUp;
