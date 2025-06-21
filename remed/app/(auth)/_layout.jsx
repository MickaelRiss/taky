import { useColorScheme } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Stack } from 'expo-router'
import { Colors } from '../../constants/Colors'

const RootLayout = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

    return (
        <>
            <StatusBar value='auto' />
            <Stack
                screenOptions={{
                    headerShown: false,
                    animation: 'none'
                }}
            >
                <Stack.Screen name='login' options={{ title: 'Login', headerShown: false }} />
                <Stack.Screen name='register' options={{ title: 'Register', headerShown: false }} />    
            </Stack>
        </>
    )
}

export default RootLayout
