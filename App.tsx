import { NativeBaseProvider, StatusBar } from 'native-base'

import { useFonts, Karla_400Regular, Karla_700Bold } from '@expo-google-fonts/karla'

import { theme } from './src/theme'
import { Loading } from '@components/Loading'
import { Routes } from '@routes/index'
import { Home } from '@screens/Home'

export default function App() {

  const [fontsLoaded] = useFonts({ Karla_400Regular, Karla_700Bold })

  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar 
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      { fontsLoaded ? <Routes /> : <Loading /> }

    </NativeBaseProvider>
  );
}
