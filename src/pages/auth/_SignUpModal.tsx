import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

import SignUp from '@/components/Form/Signup/SignUp';
import Modal from '@/components/Modal/Modal';
import { auth } from '@/firebase/firebase';

type SignUpModalProps = {
  closeModal: React.MouseEventHandler<SVGElement>;
  openLoginForm: React.MouseEventHandler<HTMLButtonElement>;
  loading: boolean;
};

const SignUpModal: React.FC<SignUpModalProps> = ({
  closeModal,
  openLoginForm,
  loading,
}) => {
  const [inputs, setInputs] = useState({
    email: '',
    displayName: '',
    password: '',
  });
  const router = useRouter();
  const [createUserWithEmailAndPassword, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignUp = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const newUser = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password,
      );

      if (!newUser) return;

      router.push('/');
    } catch (err: any) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    if (error) console.log(error);
  }, [error]);

  return (
    <Modal
      closeModal={closeModal}
      modalBody={
        <SignUp
          openLoginForm={openLoginForm}
          handleChangeInput={handleChangeInput}
          handleSignUp={handleSignUp}
          loading={loading}
        />
      }
    />
  );
};

export default SignUpModal;
