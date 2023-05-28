import React from "react";
import { View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import {
  HeartIcon,
  XIcon
} from "../../../assets";
import { useSwiperContext } from "../../context/useSwiperContext";
import { catApi } from "../../api/catApi";
import { useCatContext } from "../../context/useCatContext";

export const VoteButtons:React.FC = () => {

  const {onSwipeLeft, onSwipeRight, cardIndex} = useSwiperContext()
  const { catList } = useCatContext()

  const handleSwipedRight = async () => {
    onSwipeRight()
    await catApi.voteUp(catList[cardIndex].id)
  }

  const handleSwipedLeft = async () => {
    onSwipeLeft()
  }

  return (
      <View style={styles.voteContainer}>
        <TouchableOpacity style={styles.circleButton} onPress={handleSwipedLeft} testID="x-button">
          <XIcon width={35} height={35} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.circleButton} onPress={handleSwipedRight} testID="heart-button">
          <HeartIcon width={35} height={35} />
        </TouchableOpacity>
      </View>
  );
};