import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { store } from './src/app/store';
import { fonts } from './src/global/fonts'
import MainNavigator from './src/navigation/MainNavigator';
import { useFonts } from "expo-font"


const App = () => {

  const [fontLoaded] = useFonts(fonts)
  if(!fontLoaded) return null
  return (
    <>
      <StatusBar />
      <Provider store={store} >
        <MainNavigator />
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
