import type { Meta } from '@storybook/react';
import React from 'react';

import TopBar from './TopBar';

export default {
  title: 'TopBar',
  component: TopBar,
} as Meta;

export function Default() {
  return <TopBar />;
}
