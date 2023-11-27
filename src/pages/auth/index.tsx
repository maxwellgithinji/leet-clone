import { authModalState } from '@atoms/authModalAtoms';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import Button from '@/components/Button/Button';
import Canvas from '@/components/Canvas/Canvas';
import Container from '@/components/Container/Container';
import Navbar from '@/components/NavBar/Navbar';
import { auth } from '@/firebase/firebase';

import LoginModal from './_LoginModal';
import ResetPasswordModal from './_ResetPasswordModal';
import SignUpModal from './_SignUpModal';

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
        <LoginModal
          closeModal={closeModal}
          openResetPasswordForm={openResetPasswordForm}
          openSignUpForm={openSignUpForm}
          loading
        />
      );
      break;

    case 'signUp':
      currentAuthModal = (
        <SignUpModal
          closeModal={closeModal}
          openLoginForm={openLoginForm}
          loading
        />
      );
      break;

    case 'resetPassword':
      currentAuthModal = <ResetPasswordModal closeModal={closeModal} loading />;
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
          <Button
            buttonClass="primary"
            text="Login"
            onClick={openModal}
            buttonName="navbaropenloginmodal-button"
          />
        }
      />
      <Container tailwindClasses="pointer-events-none flex select-none items-center justify-center">
        <Image
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
