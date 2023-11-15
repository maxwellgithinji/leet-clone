import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

import Button from '@/components/Button/Button';
import Form from '@/components/Form/Form';
import HelpLink from '@/components/HelpLink/HelpLink';
import TextInput from '@/components/TextInput/TextInput';
import { auth } from '@/firebase/firebase';

type SignUpProps = {
  openLoginForm: React.MouseEventHandler<HTMLButtonElement>;
};

const SignUp: React.FC<SignUpProps> = ({ openLoginForm }) => {
  const [inputs, setInputs] = useState({
    email: '',
    displayName: '',
    password: '',
  });

  const router = useRouter();
  const [createUserWithEmailAndPassword, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignUp = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const newUser = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password,
      );

      if (!newUser) return;

      router.push('/');
    } catch (err: any) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    if (error) console.log(error);
  }, [error]);

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
