import { Platform } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeSvg from '@assets/home.svg';
import { useTheme } from 'native-base';

import { Home } from '@screens/Home'

const { Navigator, Screen } = createBottomTabNavigator()


export function AppRoutes() {
  const { colors, sizes } = useTheme()
  
  const iconSize = sizes[6];
  return(
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.gray['200'],
        tabBarInactiveTintColor: colors.gray['400'],
        tabBarStyle: {
          backgroundColor: colors.gray['700'],
          borderTopWidth: 0,
          height: Platform.OS === "android" ? 72 : 96,
          paddingBottom: sizes[10],
          paddingTop: sizes[6]

        }
      }}
    >
      <Screen 
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg fill={color} width={iconSize} height={iconSize} />
          )
        }}
      />
    </Navigator>
  )
}