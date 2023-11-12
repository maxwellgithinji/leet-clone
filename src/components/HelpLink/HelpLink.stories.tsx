import type { Meta } from '@storybook/react';
import React from 'react';

import Link from '../Link/Link';
import HelpLink from './HelpLink';

export default {
  title: 'HelpLink',
  component: HelpLink,
} as Meta;

export function Default() {
  const link = <Link href="/" text="link" />;
  return <HelpLink question="Forgot password?" link={link} />;
}
