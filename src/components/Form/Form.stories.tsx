import type { Meta } from '@storybook/react';
import React from 'react';

import TextInput from '../TextInput/TextInput';
import Form from './Form';

export default {
  title: 'Form',
  component: Form,
} as Meta;

export function Default() {
  return (
    <Form headingText="User Form">
      <TextInput
        id="username"
        name="username"
        type="text"
        label="Your Username"
        placeholder="JonDoe"
      />
    </Form>
  );
}
