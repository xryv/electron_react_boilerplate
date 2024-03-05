import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoadingSpinner from '../../../src/components/utility/Feedback/LoadingSpinner';

describe('LoadingSpinner Component', () => {
  test('it renders correctly', () => {
    const { getByTestId } = render(<LoadingSpinner data-testid="loadingSpinner" />);
    expect(getByTestId('loadingSpinner')).toBeInTheDocument();
  });
});
