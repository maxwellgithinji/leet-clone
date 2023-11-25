import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

import Index from '@/pages/index';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

describe('Index page', () => {
  describe('Render method', () => {
    it('should have a top bar with the specified header text', () => {
      render(
        <RecoilRoot>
          <Index />
        </RecoilRoot>,
      );

      const headerText = screen.getByText(/QUALITY OVER QUANTITY/i);
      expect(headerText).toBeInTheDocument();
    });
  });
});
