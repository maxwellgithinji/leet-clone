import type { Meta } from '@storybook/react';
import React from 'react';

import SignUp from './SignUp';

export default {
  title: 'SignUp',
  component: SignUp,
} as Meta;

export function Default() {
  return (
    <SignUp
      openLoginForm={() => {}}
      handleChangeInput={() => {}}
      handleSignUp={() => {}}
      loading={false}
    />
  );
}

export function Submitting() {
  return (
    <SignUp
      openLoginForm={() => {}}
      handleChangeInput={() => {}}
      handleSignUp={() => {}}
      loading
    />
  );
}
