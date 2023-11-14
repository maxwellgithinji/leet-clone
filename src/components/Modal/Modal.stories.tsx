import type { Meta } from '@storybook/react';
import React from 'react';

import Modal from './Modal';

export default {
  title: 'Modal',
  component: Modal,
} as Meta;

export function Default() {
  const greeting = <div>Hello</div>;
  return <Modal modalBody={greeting} closeModal={() => {}} />;
}
