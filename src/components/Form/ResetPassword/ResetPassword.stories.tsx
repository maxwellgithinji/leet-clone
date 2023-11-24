import type { Meta } from '@storybook/react';
import React from 'react';

import ResetPassword from './ResetPassword';

export default {
  title: 'ResetPassword',
  component: ResetPassword,
} as Meta;

export function Default() {
  return (
    <ResetPassword
      handleChangeInput={() => {}}
      handleResetPassword={() => {}}
      loading={false}
    />
  );
}

export function Submitting() {
  return (
    <ResetPassword
      handleChangeInput={() => {}}
      handleResetPassword={() => {}}
      loading
    />
  );
}
