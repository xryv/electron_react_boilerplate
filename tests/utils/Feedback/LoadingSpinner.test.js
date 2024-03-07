import React from 'react';
import { render } from '@testing-library/react';
import LoadingSpinner from '../../components/utility/Feedback/LoadingSpinner';

describe('LoadingSpinner Component', () => {
  test('renders loading spinner', () => {
    const { getByTestId } = render(<LoadingSpinner />);
    const spinner = getByTestId('loading-spinner');
    
    expect(spinner).toBeInTheDocument();
  });
});
