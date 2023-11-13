import React from 'react';

import Button from '@/components/Button/Button';
import Form from '@/components/Form/Form';
import HelpLink from '@/components/HelpLink/HelpLink';
import Link from '@/components/Link/Link';
import TextInput from '@/components/TextInput/TextInput';

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const signUpLink = <Link href="/" text="Create account" />;

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

      <Button buttonClass="primary" text="Login" buttonType="submit" />
      <div>
        <Link href="/" text="Forgot Password" />
      </div>
      <HelpLink question="Not Registered?" link={signUpLink} />
    </Form>
  );
};

export default Login;
