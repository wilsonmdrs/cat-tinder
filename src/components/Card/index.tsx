import React from 'react';
import { View, Image, Text } from 'react-native';
import { styles } from './styles';

interface CardProps {
  imageUrl: string;
  name: string;
  origin: string;
  age: string;
}

export const Card = ({ imageUrl, name, origin, age }: CardProps) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={{ uri: imageUrl }}
        style={styles.cardImage}
        testID="card-image"
      />
      <View style={styles.details}>
        <View>
          <Text style={styles.textName}>{name}</Text>
          <Text style={styles.textCountry}>{origin}</Text>
        </View>
        <Text style={styles.textAge}>{age}</Text>
      </View>
    </View>
  );
};
