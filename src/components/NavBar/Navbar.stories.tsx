import type { Meta } from '@storybook/react';
import React from 'react';

import Button from '../Button/Button';
import Navbar from './Navbar';

export default {
  title: 'Navbar',
  component: Navbar,
} as Meta;

export function Default() {
  return <Navbar />;
}

export function SignUp() {
  const signUpButton = (
    <Button
      buttonClass="primary"
      text="Sign Up"
      buttonName="opensignupmodal-button"
    />
  );
  return <Navbar button={signUpButton} />;
}

export function Login() {
  const signInButton = (
    <Button
      buttonClass="primary"
      text="Login"
      buttonName="openloginmodal-button"
    />
  );
  return <Navbar button={signInButton} />;
}
