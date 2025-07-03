import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import { StyleSheet } from 'react-native'
import { useTheme } from '../../contexts/ThemeContext'
import DarkModeButton from '../../components/DarkModeButton'

const Settings = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <ThemedView safe={true} style={styles.container}>
        <ThemedText title={true}>Settings page</ThemedText>
        <DarkModeButton />
    </ThemedView>
  )
}

export default Settings

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
    button: {
    backgroundColor: '#333',
    padding: 16,
    borderRadius: 8
  },
  text: {
    color: '#fff',
    fontSize: 16
  }
})
