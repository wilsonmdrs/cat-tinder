import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles'

export const MessageCard = () => {
  return (
    <View style={styles.container}>
      <Text>Something went wrong! Please, try again later.</Text>
  </View>
  );
};