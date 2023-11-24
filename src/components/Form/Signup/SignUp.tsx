import React from 'react';

import Button from '@/components/Button/Button';
import Form from '@/components/Form/Form';
import HelpLink from '@/components/HelpLink/HelpLink';
import TextInput from '@/components/TextInput/TextInput';

type SignUpProps = {
  openLoginForm: React.MouseEventHandler<HTMLButtonElement>;
  handleChangeInput: React.ChangeEventHandler<HTMLInputElement>;
  handleSignUp: React.FormEventHandler<HTMLFormElement>;
  loading: boolean;
};

const SignUp: React.FC<SignUpProps> = ({
  openLoginForm,
  handleChangeInput,
  handleSignUp,
  loading,
}) => {
  return (
    <Form headingText="Sign Up for LeetClone" onSubmit={handleSignUp}>
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
        id="displayName"
        name="displayName"
        type="text"
        label="Your Username"
        required
        placeholder="jondoe"
        onChange={handleChangeInput}
      />
      <TextInput
        id="password"
        name="password"
        type="password"
        required
        label="Your Password"
        placeholder="********"
        onChange={handleChangeInput}
      />

      <Button
        buttonClass="secondary"
        text={loading ? 'Signing Up...' : 'Sign Up'}
        buttonType="submit"
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
