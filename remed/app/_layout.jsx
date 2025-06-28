import { useColorScheme } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Stack } from 'expo-router'
import { Colors } from '../constants/Colors'
import { UserProvider } from '../contexts/UserContext'
import { ThemeProvider } from '../contexts/ThemeContext'

const RootLayout = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

    return (
        <UserProvider>
            <ThemeProvider>
                <StatusBar value='auto' />
                <Stack
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: '#FF6B6B'
                        },
                        headerTintColor: '#FFF',
                        headerTitleStyle: {
                            fontWeight: 'bold'
                        },
                    }}
                >
                    <Stack.Screen name='index' options={{ title: 'Index', headerShown: false }} />
                    <Stack.Screen name='test' options={{ title: 'Test', headerShown: false }} />
                    <Stack.Screen name='(auth)' options={{ headerShown: false }} />  
                    <Stack.Screen name='(dashboard)' options={{ headerShown: false }} />  
                </Stack>
            </ThemeProvider>
        </UserProvider>
    )
}

export default RootLayout
