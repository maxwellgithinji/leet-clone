import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

import Button from '@/components/Button/Button';
import Form from '@/components/Form/Form';
import HelpLink from '@/components/HelpLink/HelpLink';
import TextInput from '@/components/TextInput/TextInput';
import { auth } from '@/firebase/firebase';

type LoginProps = {
  openResetPasswordForm: React.MouseEventHandler<HTMLButtonElement>;
  openSignUpForm: React.MouseEventHandler<HTMLButtonElement>;
};

const Login: React.FC<LoginProps> = ({
  openResetPasswordForm,
  openSignUpForm,
}) => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const router = useRouter();
  const [signInWithEmailAndPassword, error] =
    useSignInWithEmailAndPassword(auth);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const newUserLogin = await signInWithEmailAndPassword(
        inputs.email,
        inputs.password,
      );
      if (!newUserLogin) return;
      router.push('/');
    } catch (err: any) {
      alert(err.message);
    }
  };

  useEffect(() => {
    if (error) console.log(error);
  }, [error]);

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

      <Button buttonClass="secondary" text="Login" buttonType="submit" />
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
