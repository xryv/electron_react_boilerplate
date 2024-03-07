// tests/components/utility/Accessibility/A11ySkipLink.test.js

import React from 'react';
import { render } from '@testing-library/react';
import A11ySkipLink from '../../../src/components/utility/Accessibility/A11ySkipLink';

describe('A11ySkipLink Component', () => {
  test('renders without crashing', () => {
    render(<A11ySkipLink contentId="mainContent" />);
    // If no errors are thrown during rendering, the test will pass
  });
});
