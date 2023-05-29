import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flexDirection: 'row',
    width: 120,
    backgroundColor: '#E3E3E4',
    borderRadius: 28,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },

  //Icon
  iconContainer: {
    flexDirection: 'row',
    width: '100%',
    zIndex: 4,
    padding: 2,
  },
  icon: {
    width: '50%',
    height: 40,
    borderRadius: 28,
    zIndex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  //Slide
  slideContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    padding: 2,
  },
  slide: {
    left: 1,
    top: 0,
  },
  slideOn: {
    opacity: 1,
    height: '100%',
    width: '50%',
    backgroundColor: '#fff',
    borderRadius: 28,
  },
});
