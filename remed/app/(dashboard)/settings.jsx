import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import { StyleSheet, Pressable } from 'react-native'
import { useTheme } from '../../contexts/ThemeContext'

const Settings = () => {
  const { theme, toggleTheme } = useTheme()
  console.log(theme)

  return (
    <ThemedView safe={true} style={styles.container}>
        <ThemedText title={true}>Settings page</ThemedText>
        <Pressable onPress={toggleTheme} style={styles.button}>
          <ThemedText style={styles.text}>
            Switch to {theme === 'light' ? 'Dark' : 'Light' } Mode
          </ThemedText>
        </Pressable>
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
