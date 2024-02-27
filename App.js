import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { store } from './src/app/store';
import { fonts } from './src/global/fonts'
import MainNavigator from './src/navigation/MainNavigator';
import { useFonts } from "expo-font"


const App = () => {

  const [fontLoaded] = useFonts(fonts)
  if(!fontLoaded) return null //no va a renderizar a menos que las fuentes esten cargadas.
  return (
    <>
    {/*si esta la statusbar ves la info del telefono, bateria y demas. */}
      <StatusBar /> 
       {/*proviene de redux y tiene estados/funciones */}
      <Provider store={store} >
      {/*define la estructura de navegacion entre pantallas */}
        <MainNavigator /> 
      </Provider>
    </>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1, //el componente ocupa todo el espacio disponible dentro de su contenedor
    backgroundColor: '#fff', //color de fondo
    alignItems: 'center', //centrar horizontalmente dentro del componente
    justifyContent: 'center', //centrar verticalmente dentro del componente
  },
});
