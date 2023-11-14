import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RecoilRoot } from 'recoil';

import Auth from '@/pages/auth/index';

describe('Auth page', () => {
  it('renders Auth page correctly', () => {
    render(
      <RecoilRoot>
        <Auth />
      </RecoilRoot>,
    );

    // Add your assertions based on the structure of your Auth component
    const loginButton = screen.getByRole('button', { name: 'Login' });
    expect(loginButton).toBeInTheDocument();

    // You can add more assertions based on your component structure
  });

  it('renders Login modal when Login button is clicked', async () => {
    render(
      <RecoilRoot>
        <Auth />
      </RecoilRoot>,
    );

    // Click on the Login button to open the modal
    const loginButton = screen.getByRole('button', { name: 'Login' });
    await userEvent.click(loginButton);

    // Add assertions to check if the Login modal title is rendered
    const loginModalTitle = screen.getByText('Login to LeetClone');
    expect(loginModalTitle).toBeInTheDocument();

    // You can add more assertions based on your modal structure
  });

  it('navigates to SignUp modal when "Sign Up Today', async () => {
    render(
      <RecoilRoot>
        <Auth />
      </RecoilRoot>,
    );

    // Click on the Login button to open the modal
    const loginButton = screen.getByRole('button', { name: 'Login' });
    await userEvent.click(loginButton);

    // Click on "Create Account" to navigate to the SignUp modal
    const createAccountButton = screen.getByText('Sign Up Today');
    await userEvent.click(createAccountButton);

    // Add assertions to check if the SignUp modal is rendered
    const signUpModalTitle = screen.getByText('Sign Up for LeetClone');
    expect(signUpModalTitle).toBeInTheDocument();

    // You can add more assertions based on your SignUp modal structure
  });

  it('navigates to Reset Password modal when "Forgot Password?" is clicked', async () => {
    render(
      <RecoilRoot>
        <Auth />
      </RecoilRoot>,
    );

    // Click on the Login button to open the modal
    const loginButton = screen.getByRole('button', { name: 'Login' });
    await userEvent.click(loginButton);

    // Click on "Forgot Password?" to navigate to the Reset Password modal
    const forgotPasswordButton = screen.getByText('Forgot Password?');
    await userEvent.click(forgotPasswordButton);

    // Add assertions to check if the Reset Password modal is rendered
    const resetPasswordModalTitle = screen.getByText('Reset Your Password');
    expect(resetPasswordModalTitle).toBeInTheDocument();

    // You can add more assertions based on your Reset Password modal structure
  });
});
