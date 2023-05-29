import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { VoteButtons } from './index';
import {
  SwipeContextType,
  SwiperProvider,
  useSwiperContext,
} from '../../contexts/useSwiperContext';
import {
  CatContextType,
  CatProvider,
  useCatContext,
} from '../../contexts/useCatContext';
import { View } from 'react-native';

jest.mock('../../contexts/useSwiperContext');
jest.mock('../../contexts/useCatContext');
jest.mock('react-native-svg', () => {
  const { View } = require('react-native');
  return {
    Svg: View,
    Circle: View,
    Path: View,
  };
});
describe('VoteButtons', () => {
  beforeEach(() => {
    (
      useSwiperContext as jest.MockedFunction<typeof useSwiperContext>
    ).mockReturnValue({
      onSwipeLeft: jest.fn(),
      onSwipeRight: jest.fn(),
      cardIndex: 0,
      setCardIndex: () => {},
      ref: null,
    } as SwipeContextType);

    (
      useCatContext as jest.MockedFunction<typeof useCatContext>
    ).mockReturnValue({
      catList: [
        {
          id: '001',
          url: 'http://example/cat1',
          age: '12',
          origin: 'Egypt',
          name: 'Abysis',
        },
        {
          id: '002',
          url: 'http://example/cat2',
          age: '16',
          origin: 'England',
          name: 'Furry',
        },
      ],
      favouriteList: [],
      isLoading: false,
      onVoteUp: jest.fn(),
      onAddFavourite: jest.fn(),
      onDeleteFavourite: jest.fn(),
      reloadCatList: jest.fn(),
    } as CatContextType);
  });

  it.only('should call onSwipeLeft when X button is pressed', async () => {
    render(
      <View style={{ flex: 1 }}>
        <VoteButtons />
      </View>
    );
    const xButton = screen.getByTestId('x-button')

    fireEvent.press(xButton);

    expect(useSwiperContext().onSwipeLeft).toHaveBeenCalledTimes(1);
  });

  it.only('should call onSwipeRight when Heart button is pressed', async () => {
    render(
      <View style={{ flex: 1 }}>
        <VoteButtons />
      </View>
    );
    const heartButton = screen.getByTestId('heart-button')

    fireEvent.press(heartButton);

    expect(useSwiperContext().onSwipeRight).toHaveBeenCalledTimes(1);
  });
});
