import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { HeartIcon, XIcon } from '../../../assets';
import { useSwiperContext } from '../../contexts/useSwiperContext';
import { catApi } from '../../api/catApi';
import { useCatContext } from '../../contexts/useCatContext';

export const VoteButtons: React.FC = () => {
  const { onSwipeLeft, onSwipeRight, cardIndex } = useSwiperContext();
  const { catList, isLoading } = useCatContext();

  const isDisabled = isLoading || cardIndex >= catList.length;

  const handleSwipedRight = async () => {
    onSwipeRight();
    await catApi.voteUp(catList[cardIndex].id);
  };

  const handleSwipedLeft = async () => {
    onSwipeLeft();
  };

  return (
    <View style={styles.voteContainer}>
      <TouchableOpacity
        disabled={isDisabled}
        style={styles.circleButton}
        onPress={handleSwipedLeft}
        testID="x-button"
      >
        <XIcon width={35} height={35} />
      </TouchableOpacity>
      <TouchableOpacity
        disabled={isDisabled}
        style={styles.circleButton}
        onPress={handleSwipedRight}
        testID="heart-button"
      >
        <HeartIcon width={35} height={35} />
      </TouchableOpacity>
    </View>
  );
};
