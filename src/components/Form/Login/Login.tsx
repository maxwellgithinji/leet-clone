import React from 'react';

import Button from '@/components/Button/Button';
import Form from '@/components/Form/Form';
import HelpLink from '@/components/HelpLink/HelpLink';
import TextInput from '@/components/TextInput/TextInput';

type LoginProps = {
  openResetPasswordForm: React.MouseEventHandler<HTMLButtonElement>;
  openSignUpForm: React.MouseEventHandler<HTMLButtonElement>;
  handleChangeInput: React.ChangeEventHandler<HTMLInputElement>;
  handleLogin: React.FormEventHandler<HTMLFormElement>;
  loading: boolean;
};

const Login: React.FC<LoginProps> = ({
  openResetPasswordForm,
  openSignUpForm,
  handleChangeInput,
  handleLogin,
  loading,
}) => {
  return (
    <Form headingText="Login to LeetClone" onSubmit={handleLogin}>
      <TextInput
        id="email"
        name="email"
        type="email"
        label="Your Email"
        required
        placeholder="jondoe@email.com"
        onChange={handleChangeInput}
      />
      <TextInput
        id="password"
        name="password"
        type="password"
        label="Your Password"
        required
        placeholder="********"
        onChange={handleChangeInput}
      />

      <Button
        buttonClass="secondary"
        text={loading ? 'Logging in...' : 'Login'}
        buttonType="submit"
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
