import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { MessageCard } from './index';

describe('MessageCard', () => {
  it('renders the message text', () => {
    render(<MessageCard />);

    const messageText = screen.getByText(
      'Something went wrong! Please, try again later.'
    );

    expect(messageText).toBeTruthy();
  });
});
