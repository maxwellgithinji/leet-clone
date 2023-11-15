import { authModalState } from '@atoms/authModalAtoms';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import Button from '@/components/Button/Button';
import Canvas from '@/components/Canvas/Canvas';
import Container from '@/components/Container/Container';
import Login from '@/components/Form/Login/Login';
import ResetPassword from '@/components/Form/ResetPassword/ResetPassword';
import SignUp from '@/components/Form/Signup/SignUp';
import Modal from '@/components/Modal/Modal';
import Navbar from '@/components/NavBar/Navbar';
import { auth } from '@/firebase/firebase';

type AuthProps = {};

const Auth: React.FC<AuthProps> = () => {
  const authModal = useRecoilValue(authModalState);
  const setAuthModalState = useSetRecoilState(authModalState);
  const [pageLoading, setPageLoading] = useState(true);

  const openModal = () => {
    setAuthModalState((prev) => ({ ...prev, isOpen: true }));
  };

  const closeModal = () => {
    setAuthModalState((prev) => ({ ...prev, isOpen: false, type: 'login' }));
  };

  const openLoginForm = () => {
    setAuthModalState((prev) => ({ ...prev, type: 'login' }));
  };

  const openSignUpForm = () => {
    setAuthModalState((prev) => ({ ...prev, type: 'signUp' }));
  };

  const openResetPasswordForm = () => {
    setAuthModalState((prev) => ({ ...prev, type: 'resetPassword' }));
  };

  let currentAuthModal: React.ReactNode;

  switch (authModal.type) {
    case 'login':
      currentAuthModal = (
        <Modal
          closeModal={closeModal}
          modalBody={
            <Login
              openResetPasswordForm={openResetPasswordForm}
              openSignUpForm={openSignUpForm}
            />
          }
        />
      );
      break;

    case 'signUp':
      currentAuthModal = (
        <Modal
          closeModal={closeModal}
          modalBody={<SignUp openLoginForm={openLoginForm} />}
        />
      );
      break;

    case 'resetPassword':
      currentAuthModal = (
        <Modal closeModal={closeModal} modalBody={<ResetPassword />} />
      );
      break;

    default:
      break;
  }

  const router = useRouter();
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    if (user) router.push('/');
    if (!loading && !user) setPageLoading(false);
  }, [user, router, loading]);

  if (pageLoading) return null;

  return (
    <Canvas>
      <Navbar
        button={
          <Button buttonClass="primary" text="Login" onClick={openModal} />
        }
      />
      <Container tailwindClasses="pointer-events-none flex select-none items-center justify-center">
        <img
          src="/assets/images/hero.png"
          alt="Hero"
          width={700}
          height={700}
        />
      </Container>
      {authModal.isOpen && currentAuthModal}
    </Canvas>
  );
};

export default Auth;
