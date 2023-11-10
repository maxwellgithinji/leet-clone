import type { Meta } from '@storybook/react';
import React from 'react';

import Button from './Button';

export default {
  title: 'Button',
  component: Button,
} as Meta;

export function Default() {
  return <Button text="Button" />;
}
