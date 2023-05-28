import React from "react";
import { View, ActivityIndicator } from "react-native";
import { styles } from "./styles";

export const LoadingCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <ActivityIndicator size={"large"} color={"#FD267D"} />
      </View>
    </View>
  );
};
