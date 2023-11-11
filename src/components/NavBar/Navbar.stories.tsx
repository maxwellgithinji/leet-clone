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
  const signUpButton = <Button buttonClass="primary" text="Sign Up" />;
  return <Navbar button={signUpButton} />;
}

export function SignIn() {
  const signInButton = <Button buttonClass="primary" text="Sign In" />;
  return <Navbar button={signInButton} />;
}
