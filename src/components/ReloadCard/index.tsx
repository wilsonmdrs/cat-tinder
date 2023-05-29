import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useCatContext } from '../../contexts/useCatContext';
import { useSwiperContext } from '../../contexts/useSwiperContext';

export const ReloadCard = () => {
  const { reloadCatList } = useCatContext();
  const { setCardIndex } = useSwiperContext();

  const handleLoadMoreCats = () => {
    reloadCatList();
    setCardIndex(0);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleLoadMoreCats}>
        <Text style={styles.textButton}>Click to Load More Cats</Text>
      </TouchableOpacity>
    </View>
  );
};
