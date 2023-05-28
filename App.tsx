import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import { BottomMenuNavigation } from './src/navigation/BottomMenuNavigation';



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <BottomMenuNavigation />
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});
