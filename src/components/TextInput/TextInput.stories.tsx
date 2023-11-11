import type { Meta } from '@storybook/react';
import React from 'react';

import TextInput from './TextInput';

export default {
  title: 'TextInput',
  component: TextInput,
} as Meta;

export function Default() {
  return (
    <TextInput
      id="username"
      name="username"
      type="text"
      label="Your Username"
      placeholder="JonDoe"
    />
  );
}
