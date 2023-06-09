import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { FavoriteSwitch } from '../../components/FavoriteSwitch';
import { VoteButtons } from '../../components/VoteButtons';
import { CardSwiper } from '../../components/CardSwiper';
import { SwiperProvider } from '../../contexts/useSwiperContext';
import { CatProvider } from '../../contexts/useCatContext';

export const CatVotes: React.FC = () => {
  return (
    <View style={styles.container}>
      <CatProvider>
        <SwiperProvider>
          <FavoriteSwitch />
          <CardSwiper />
          <VoteButtons />
        </SwiperProvider>
      </CatProvider>
    </View>
  );
};
