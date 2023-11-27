import type { Meta } from '@storybook/react';
import React from 'react';

import Button from './Button';

export default {
  title: 'Button',
  component: Button,
} as Meta;

export function Primary() {
  return (
    <Button buttonClass="primary" text="Button" buttonName="primary-button" />
  );
}

export function Secondary() {
  return (
    <Button
      buttonClass="secondary"
      text="Button"
      buttonName="secondary-button"
    />
  );
}

export function TopBar() {
  return (
    <Button buttonClass="topbar" text="Button" buttonName="topbar-button" />
  );
}
