import type { Meta } from '@storybook/react';
import Image from 'next/image';
import React from 'react';

import Button from '../Button/Button';
import Container from '../Container/Container';
import Modal from '../Modal/Modal';
import Navbar from '../NavBar/Navbar';
import Canvas from './Canvas';

export default {
  title: 'Canvas',
  component: Canvas,
} as Meta;

export function Default() {
  return <Canvas />;
}

export function SignUp() {
  const button = <Button buttonClass="primary" text="Sign In" />;
  const modalBody = <div>Hello</div>;

  return (
    <Canvas>
      <Navbar button={button} />
      <Container tailwindClasses="pointer-events-none flex select-none items-center justify-center">
        <Image
          src="/assets/images/hero.png"
          alt="Hero Image"
          width={200}
          height={200}
        />
      </Container>
      <Modal modalBody={modalBody} closeModal={() => {}} />
    </Canvas>
  );
}
