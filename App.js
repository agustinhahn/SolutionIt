import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigator from './src/navigation/TabNavigator';
import { Provider } from 'react-redux'
import { store } from './src/app/store';

const App = () => {
  return (
    <>
      <StatusBar />
      <Provider store={store} >
        <TabNavigator />
      </Provider>
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
