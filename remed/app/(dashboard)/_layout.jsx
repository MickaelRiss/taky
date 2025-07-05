import UserOnly from "../../components/auth/UserOnly"
import { Tabs } from "expo-router"
import { Colors } from '../../constants/Colors'
import { Ionicons } from "@expo/vector-icons"
import { useTheme } from "../../contexts/ThemeContext"
import { MedicationsProvider } from "../../contexts/MedicationsContext"

const DashboardLayout = () => {
    const { theme } = useTheme()
    const colorTheme = Colors[theme] ?? Colors.light

    return (
        <UserOnly>
            <MedicationsProvider>
                <Tabs 
                    screenOptions= {{ 
                        headerShown: false,
                        tabBarStyle: { 
                            backgroundColor: colorTheme.navBackground,
                            paddingTop: 10,
                            height: 90,
                        },
                        tabBarActiveTintColor: colorTheme.iconColorFocused,
                        tabBarInactiveTintColor: colorTheme.iconColorFocused
                    }}
                >
                    <Tabs.Screen name='home' options={{ title: 'Home', tabBarIcon: ({ focused }) => (
                        <Ionicons 
                            size={24}
                            name={focused ? 'calendar-number' : 'calendar-number-outline' }
                            color={focused ? colorTheme.iconColorFocused : colorTheme.iconColor}
                        />
                    )}}/>
                    <Tabs.Screen name='meds' options={{ title: 'Meds', tabBarIcon: ({ focused }) => (
                        <Ionicons 
                            size={24}
                            name={focused ? 'medical' : 'medical-outline'}
                            color={focused ? colorTheme.iconColorFocused : colorTheme.iconColor}
                        />
                    )}}/>
                    <Tabs.Screen name='referent' options={{ title: 'Referent', tabBarIcon: ({ focused }) => (
                        <Ionicons 
                            size={24}
                            name={focused ? 'person' : 'person-outline'}
                            color={focused ? colorTheme.iconColorFocused : colorTheme.iconColor}
                        />
                    )}}/>
                    <Tabs.Screen name='settings' options={{ title: 'Settings', tabBarIcon: ({ focused }) => (
                        <Ionicons 
                            size={24}
                            name={focused ? 'settings' : 'settings-outline'}
                            color={focused ? colorTheme.iconColorFocused : colorTheme.iconColor}
                        />
                    )}}/>
                </Tabs>
            </MedicationsProvider>
        </UserOnly>
    )
}

export default DashboardLayout
