import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { LoadingCard } from './index';

describe('LoadingCard', () => {
  it('renders the activity indicator', () => {
    render(<LoadingCard />);

    const activityIndicator = screen.getByTestId('activity-indicator');

    expect(activityIndicator).toBeTruthy();
  });
});
