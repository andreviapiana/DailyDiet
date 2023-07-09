import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Details } from '@screens/Details'
import { Feedback } from '@screens/Feedback'

import { Home } from '@screens/Home'
import { NewAndEdit } from '@screens/NewAndEdit'
import { Statistics } from '@screens/Statistics'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />

      <Screen name="statistics" component={Statistics} />

      <Screen name="newandedit" component={NewAndEdit} />

      <Screen name="feedback" component={Feedback} />

      <Screen name="details" component={Details} />
    </Navigator>
  )
}
