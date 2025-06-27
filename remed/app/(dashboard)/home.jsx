import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'
import { StyleSheet } from 'react-native'
import { useUser } from '../../hooks/useUser'

const Home = () => {
  const { user, logout } = useUser()

  const handleLogout = async () => {
    logout()
  }

  return (
    <ThemedView safe={true} style={styles.container}>
        <ThemedButton width='40%' onPress={handleLogout}>
          <ThemedText>Logout</ThemedText>
        </ThemedButton>
        <ThemedText title={true}>Home page</ThemedText>
    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
})
