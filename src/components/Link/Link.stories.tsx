import type { Meta } from '@storybook/react';
import React from 'react';

import Link from './Link';

export default {
  title: 'Link',
  component: Link,
} as Meta;

export function Default() {
  return <Link href="/" text="link" />;
}
