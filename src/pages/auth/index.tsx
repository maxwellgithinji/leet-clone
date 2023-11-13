import Button from '@/components/Button/Button';
import Canvas from '@/components/Canvas/Canvas';
import Container from '@/components/Container/Container';
import Login from '@/components/Form/Login/Login';
import Modal from '@/components/Modal/Modal';
import Navbar from '@/components/NavBar/Navbar';

type AuthProps = {};

const Auth: React.FC<AuthProps> = () => {
  const button = <Button buttonClass="primary" text="Sign In" />;
  const loginForm = <Login />;

  return (
    <Canvas>
      <Navbar button={button} />
      <Container tailwindClasses="pointer-events-none flex select-none items-center justify-center">
        <img
          src="/assets/images/hero.png"
          alt="Hero"
          width={700}
          height={700}
        />
      </Container>
      <Modal modalBody={loginForm} />
    </Canvas>
  );
};

export default Auth;
