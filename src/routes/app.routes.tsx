import { Platform } from 'react-native'
import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { useTheme } from "native-base";

import { Home } from '@screens/Home'

const { Navigator, Screen } = createBottomTabNavigator()

export function AppRoutes() {
  const { colors, sizes } = useTheme()
  
  return(
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.gray['200'],
        tabBarInactiveTintColor: colors.gray['400'],
        tabBarStyle: {
          backgroundColor: colors.red['700'],
          borderTopWidth: 0,
          // height: Platform.OS === 'android' ? 'auto' : 96,
          // paddingBottom: sizes[10],
          // paddingTop: sizes[6]

        }
      }}
    >
      <Screen 
        name="home"
        component={Home}
        
      />
    </Navigator>
  )
}