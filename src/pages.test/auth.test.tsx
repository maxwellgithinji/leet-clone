import { render, screen } from '@testing-library/react';

import Auth from '@/pages/auth/index';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

describe('Auth page', () => {
  describe('Render method', () => {
    it('should have h1 tag', () => {
      render(<Auth />);

      const heading = screen.getByRole('heading', {
        name: 'Auth',
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
