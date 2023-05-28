import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width

export const styles = StyleSheet.create({
    optionsContainer:{
      flex:.1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    options:{
      flexDirection:'row',
      width: 156,
      borderRadius: 40,
      backgroundColor: '#FFFFFF',
      shadowColor: '#00000050',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 3,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonIcon:{
      padding:10,
      justifyContent: 'center',
      alignItems: 'center',
    },
})