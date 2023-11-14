import React from 'react';

import Button from '@/components/Button/Button';
import Form from '@/components/Form/Form';
import HelpLink from '@/components/HelpLink/HelpLink';
import TextInput from '@/components/TextInput/TextInput';

type LoginProps = {
  openResetPasswordForm: React.MouseEventHandler<HTMLButtonElement>;
  openSignUpForm: React.MouseEventHandler<HTMLButtonElement>;
  submitForm: React.MouseEventHandler<HTMLButtonElement>;
};

const Login: React.FC<LoginProps> = ({
  openResetPasswordForm,
  openSignUpForm,
  submitForm,
}) => {
  return (
    <Form headingText="Login to leet clone">
      <TextInput
        id="email"
        name="email"
        type="email"
        label="Your Email"
        placeholder="jondoe@email.com"
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
        text="Login"
        buttonType="submit"
        onClick={submitForm}
      />
      <div>
        <Button
          buttonClass="link"
          text="Forgot Password?"
          onClick={openResetPasswordForm}
        />
      </div>
      <HelpLink
        question="Not Registered?"
        link={
          <Button
            buttonClass="link"
            text="Sign Up Today"
            onClick={openSignUpForm}
          />
        }
      />
    </Form>
  );
};

export default Login;
