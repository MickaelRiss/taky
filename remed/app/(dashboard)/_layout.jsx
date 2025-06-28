import UserOnly from "../../components/auth/UserOnly"
import { Tabs } from "expo-router"
import { useColorScheme } from "react-native"
import { Colors } from '../../constants/Colors'
import { Ionicons } from "@expo/vector-icons"

const DashboardLayout = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <UserOnly>
      <Tabs 
          screenOptions= {{ 
              headerShown: false,
              tabBarStyle: { 
                  backgroundColor: theme.navBackground,
                  paddingTop: 10,
                  height: 90,
              },
              tabBarActiveTintColor: theme.iconColorFocused,
              tabBarInactiveTintColor: theme.iconColorFocused
          }}
      >
          <Tabs.Screen name='home' options={{ title: 'Home', tabBarIcon: ({ focused }) => (
              <Ionicons 
                  size={24}
                  name={focused ? 'calendar-number' : 'calendar-number-outline' }
                  color={focused ? theme.iconColorFocused : theme.iconColor}
              />
          )}}/>
          <Tabs.Screen name='meds' options={{ title: 'Meds', tabBarIcon: ({ focused }) => (
              <Ionicons 
                  size={24}
                  name={focused ? 'medical' : 'medical-outline'}
                  color={focused ? theme.iconColorFocused : theme.iconColor}
              />
          )}}/>
          <Tabs.Screen name='referent' options={{ title: 'Referent', tabBarIcon: ({ focused }) => (
              <Ionicons 
                  size={24}
                  name={focused ? 'person' : 'person-outline'}
                  color={focused ? theme.iconColorFocused : theme.iconColor}
              />
          )}}/>
          <Tabs.Screen name='settings' options={{ title: 'Settings', tabBarIcon: ({ focused }) => (
              <Ionicons 
                  size={24}
                  name={focused ? 'settings' : 'settings-outline'}
                  color={focused ? theme.iconColorFocused : theme.iconColor}
              />
          )}}/>
      </Tabs>
    </UserOnly>
  )
}

export default DashboardLayout
