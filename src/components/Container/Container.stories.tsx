import type { Meta } from '@storybook/react';
import Image from 'next/image';
import React from 'react';

import Container from './Container';

export default {
  title: 'Container',
  component: Container,
} as Meta;

export function Default() {
  return <Container />;
}

export function WithChild() {
  return (
    <Container tailwindClasses="pointer-events-none flex select-none items-center justify-center">
      <Image
        src="/assets/images/hero.png"
        alt="Hero Image"
        width={200}
        height={200}
      />
    </Container>
  );
}

export function WithChildren() {
  return (
    <Container tailwindClasses="pointer-events-none flex select-none items-center justify-center">
      <h1>With Children</h1>
      <Image
        src="/assets/images/hero.png"
        alt="Hero Image"
        width={200}
        height={200}
      />
    </Container>
  );
}
