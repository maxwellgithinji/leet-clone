import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

import Login from '@/components/Form/Login/Login';
import Modal from '@/components/Modal/Modal';
import { auth } from '@/firebase/firebase';

type LoginModalProps = {
  closeModal: React.MouseEventHandler<SVGElement>;
  openResetPasswordForm: React.MouseEventHandler<HTMLButtonElement>;
  openSignUpForm: React.MouseEventHandler<HTMLButtonElement>;
  loading: boolean;
};

const LoginModal: React.FC<LoginModalProps> = ({
  closeModal,
  openResetPasswordForm,
  openSignUpForm,
  loading,
}) => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const router = useRouter();
  const [signInWithEmailAndPassword, error] =
    useSignInWithEmailAndPassword(auth);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const newUserLogin = await signInWithEmailAndPassword(
        inputs.email,
        inputs.password,
      );
      if (!newUserLogin) return;
      router.push('/');
    } catch (err: any) {
      alert(err.message);
    }
  };

  useEffect(() => {
    if (error) console.log(error);
  }, [error]);

  return (
    <Modal
      closeModal={closeModal}
      modalBody={
        <Login
          openResetPasswordForm={openResetPasswordForm}
          openSignUpForm={openSignUpForm}
          handleChangeInput={handleChangeInput}
          handleLogin={handleLogin}
          loading={loading}
        />
      }
    />
  );
};

export default LoginModal;
