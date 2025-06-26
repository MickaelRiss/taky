import { useColorScheme } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Stack } from 'expo-router'
import { Colors } from '../../constants/Colors'
import GuestOnly from '../../components/auth/GuestOnly'
import { useUser } from '../../hooks/useUser'

const AuthLayout = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
    
    return (
        <GuestOnly>
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
        </GuestOnly>
    )
}

export default AuthLayout
