import { StatusBar } from 'expo-status-bar'
import { Stack } from 'expo-router'
import { UserProvider } from '../contexts/UserContext'
import { ThemeProvider, useTheme } from '../contexts/ThemeContext'
import { Colors } from '../constants/Colors'

const InnerLayout = () => {
  const { theme } = useTheme()
  const colorTheme = Colors[theme] ?? Colors.light

  return (
    <>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
            headerStyle: {
            backgroundColor: colorTheme.background,
            },
            headerTintColor: colorTheme.title,
            headerTitleStyle: {
            fontWeight: 'bold',
            color: colorTheme.title,
            },
            headerBackTitleVisible: false,
            headerShadowVisible: false,
        }}
      >
        <Stack.Screen name='index' options={{ title: 'Index', headerShown: false }} />
        <Stack.Screen name='test' options={{ title: 'Test', headerShown: false }} />
        <Stack.Screen name='(auth)' options={{ headerShown: false }} />
        <Stack.Screen name='(dashboard)' options={{ headerShown: false }} />
        <Stack.Screen
          name='meds'
          options={{
            title: 'Add New Medication',
            headerShown: true,
            headerBackTitleVisible: false,
          }}
        />
      </Stack>
    </>
  )
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <UserProvider>
        <InnerLayout />
      </UserProvider>
    </ThemeProvider>
  )
}