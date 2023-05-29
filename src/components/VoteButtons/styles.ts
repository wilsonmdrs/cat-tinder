import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  voteContainer: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  circleButton: {
    width: width * 0.14,
    height: width * 0.14,
    margin: 24,
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
});
