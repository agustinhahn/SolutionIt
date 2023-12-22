import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigator from './src/navigation/TabNavigator';
import Home from './src/screens/Home';

const App = () => {
  return (
    <>
      <StatusBar />
      <TabNavigator />
    </>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
