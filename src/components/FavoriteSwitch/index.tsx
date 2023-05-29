import React, { useEffect, useState } from 'react';
import { View, Pressable, Animated } from 'react-native';
import { styles } from './styles';
import { FireIcon, StarIcon } from '../../../assets';
import CustomIcon from '../CustomIcon';
import { FavouriteCat, useCatContext } from '../../contexts/useCatContext';
import { useSwiperContext } from '../../contexts/useSwiperContext';

const AnimatedIcon = Animated.createAnimatedComponent(CustomIcon);

export const FavoriteSwitch = () => {
  const [isFavourite, setIsFavourite] = useState(false);
  const { cardIndex } = useSwiperContext();
  const {
    onAddFavourite,
    onDeleteFavourite,
    isLoading,
    favouriteList,
    catList,
  } = useCatContext();
  const slideAnimation = useState(new Animated.Value(0))[0];
  const colorAnimation = useState(new Animated.Value(0))[0];

  const handleToggle = () => {
    if (catList.length && cardIndex < catList.length) {
      const catId = catList[cardIndex].id;
      if (!isFavourite) {
        onAddFavourite(catId);
      } else {
        onDeleteFavourite(catId);
      }
      setIsFavourite(!isFavourite);
    }
  };

  useEffect(() => {
    if (catList.length) {
      setIsFavourite(
        favouriteList.some(
          (favourite: FavouriteCat) =>
            favourite.image_id === catList[cardIndex].id
        )
      );
    }
  }, []);

  useEffect(() => {
    if (catList.length && favouriteList.length) {
      setIsFavourite(
        favouriteList.some(
          (favourite: FavouriteCat) =>
            favourite.image_id === catList[cardIndex]?.id
        )
      );
    }
  }, [cardIndex]);

  useEffect(() => {
    Animated.timing(slideAnimation, {
      toValue: isFavourite ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
    Animated.timing(colorAnimation, {
      toValue: isFavourite ? 0 : 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [isFavourite]);

  const slideAnimationStyle = {
    transform: [
      {
        translateX: slideAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 56],
        }),
      },
    ],
  };

  const iconStarColor = colorAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['#FFDF00', '#BFBFC0'],
  });

  const iconFireColor = colorAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['#BFBFC0', '#FD267D'],
  });

  return (
    <View style={styles.container}>
      <Pressable
        onPress={handleToggle}
        style={styles.button}
        disabled={isLoading}
      >
        <View style={styles.iconContainer}>
          <View style={styles.icon}>
            <AnimatedIcon size={20} color={iconFireColor} icon={<FireIcon />} />
          </View>
          <View style={styles.icon}>
            <AnimatedIcon size={20} color={iconStarColor} icon={<StarIcon />} />
          </View>
        </View>
        <View style={styles.slideContainer}>
          <Animated.View
            style={[styles.slide, slideAnimationStyle]}
          ></Animated.View>
          <Animated.View
            style={[styles.slide, styles.slideOn, slideAnimationStyle]}
          ></Animated.View>
        </View>
      </Pressable>
    </View>
  );
};
