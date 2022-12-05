import { NativeBaseProvider, StatusBar } from 'native-base'

import { useFonts, Karla_400Regular, Karla_700Bold } from '@expo-google-fonts/karla'

import { theme } from './src/theme';
import { Loading } from '@components/Loading';
import { Signin } from '@screens/Signin';

export default function App() {

  const [fontsLoaded] = useFonts({ Karla_400Regular, Karla_700Bold })

  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar 
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      { fontsLoaded ? <Signin /> : <Loading /> }

    </NativeBaseProvider>
  );
}
