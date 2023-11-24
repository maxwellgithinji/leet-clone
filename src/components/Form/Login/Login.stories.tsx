import type { Meta } from '@storybook/react';
import React from 'react';

import Login from './Login';

export default {
  title: 'Login',
  component: Login,
} as Meta;

export function Default() {
  return (
    <Login
      openResetPasswordForm={() => {}}
      openSignUpForm={() => {}}
      handleChangeInput={() => {}}
      handleLogin={() => {}}
      loading={false}
    />
  );
}

export function Submitting() {
  return (
    <Login
      openResetPasswordForm={() => {}}
      openSignUpForm={() => {}}
      handleChangeInput={() => {}}
      handleLogin={() => {}}
      loading
    />
  );
}
