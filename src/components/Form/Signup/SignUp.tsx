import React from 'react';

import Button from '@/components/Button/Button';
import Form from '@/components/Form/Form';
import HelpLink from '@/components/HelpLink/HelpLink';
import Link from '@/components/Link/Link';
import TextInput from '@/components/TextInput/TextInput';

type SignUpProps = {};

const SignUp: React.FC<SignUpProps> = () => {
  const loginLink = <Link href="/" text="Login" />;

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

      <Button buttonClass="primary" text="Sign Up" buttonType="submit" />
      <HelpLink question="Already have an account" link={loginLink} />
    </Form>
  );
};

export default SignUp;
