// Import the necessary dependencies from testing-library
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RecoilRoot } from 'recoil';

// Import your Auth component
import Auth from '@/pages/auth/index';

describe('Auth page', () => {
  it('renders Auth page correctly', async () => {
    render(
      <RecoilRoot>
        <Auth />
      </RecoilRoot>,
    );

    // Wait for the page to load (handle the null case)
    await waitFor(() => {
      const loginButton = screen.getByRole('button', { name: 'Login' });
      expect(loginButton).toBeInTheDocument();
    });
  });

  it('renders Login modal when Login button is clicked', async () => {
    render(
      <RecoilRoot>
        <Auth />
      </RecoilRoot>,
    );

    // Wait for the page to load (handle the null case)
    await waitFor(() => {
      const loginButton = screen.getByRole('button', { name: 'Login' });
      expect(loginButton).toBeInTheDocument();
    });

    // Click on the Login button to open the modal
    const loginButton = screen.getByRole('button', { name: 'Login' });
    await userEvent.click(loginButton);

    // Add assertions to check if the Login modal title is rendered
    const loginModalTitle = screen.getByText('Login to LeetClone');
    expect(loginModalTitle).toBeInTheDocument();
  });

  it('navigates to SignUp modal when "Sign Up Today" is clicked', async () => {
    render(
      <RecoilRoot>
        <Auth />
      </RecoilRoot>,
    );

    // Wait for the page to load (handle the null case)
    await waitFor(() => {
      const loginButton = screen.getByRole('button', { name: 'Login' });
      expect(loginButton).toBeInTheDocument();
    });

    // Click on the Login button to open the modal
    const loginButton = screen.getByRole('button', { name: 'Login' });
    await userEvent.click(loginButton);

    // Click on "Create Account" to navigate to the SignUp modal
    const createAccountButton = screen.getByText('Sign Up Today');
    await userEvent.click(createAccountButton);

    // Add assertions to check if the SignUp modal is rendered
    const signUpModalTitle = screen.getByText('Sign Up for LeetClone');
    expect(signUpModalTitle).toBeInTheDocument();
  });

  it('navigates to Reset Password modal when "Forgot Password?" is clicked', async () => {
    render(
      <RecoilRoot>
        <Auth />
      </RecoilRoot>,
    );

    // Wait for the page to load (handle the null case)
    await waitFor(() => {
      const loginButton = screen.getByRole('button', { name: 'Login' });
      expect(loginButton).toBeInTheDocument();
    });

    // Click on the Login button to open the modal
    const loginButton = screen.getByRole('button', { name: 'Login' });
    await userEvent.click(loginButton);

    // Click on "Forgot Password?" to navigate to the Reset Password modal
    const forgotPasswordButton = screen.getByText('Forgot Password?');
    await userEvent.click(forgotPasswordButton);

    // Add assertions to check if the Reset Password modal is rendered
    const resetPasswordModalTitle = screen.getByText('Reset Your Password');
    expect(resetPasswordModalTitle).toBeInTheDocument();
  });
});
