import { StatusBar } from 'react-native'
import theme from './src/theme'
import { ThemeProvider } from 'styled-components'
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans'

import { Home } from '@screens/Home'
import { Loading } from '@components/Loading'

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  })

  return (
    <ThemeProvider theme={theme}>
      <>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ? <Home /> : <Loading />}
      </>
    </ThemeProvider>
  )
}
