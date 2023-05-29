import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export const Message: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.pageNumber}>02</Text>
    </View>
  );
};
