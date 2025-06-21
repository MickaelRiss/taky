import { useColorScheme } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Stack } from 'expo-router'
import { Colors } from '../constants/Colors'

const RootLayout = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

    return (
        <>
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
                <Stack.Screen name='index' options={{ title: 'Home', headerShown: false }} />
                <Stack.Screen name='(auth)' options={{ headerShown: false }} />    
            </Stack>
        </>
    )
}

export default RootLayout
