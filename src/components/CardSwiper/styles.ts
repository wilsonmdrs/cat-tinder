import { StyleSheet } from "react-native";

const shadow = {
  shadowColor: "#00000050",
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.4,
  shadowRadius: 5,
  elevation: 3,
};

export const styles = StyleSheet.create({
  container: {
    flex: .6,
    padding: 2
  },
  swiperContainer:{
    position: 'relative',
    backgroundColor:'#fff'
  },
  card:{
    top:0,
    maxHeight:'60%',
    backgroundColor:'#fff',
    borderRadius: 10,
    ...shadow
  }
})