import { StyleSheet } from 'react-native'
import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'
import Spacer from '../components/Spacer'
import { useUser } from '../hooks/useUser'
import ThemedButton from '../components/ThemedButton'

const Home = () => {
  const { user, logout } = useUser()
  console.log('Current user:', user)

  const handleLogout = async () => {
    logout()
  }

  return (
    <ThemedView style={styles.container} safe={true}>
      <ThemedText title={true}>HOME</ThemedText>
      <Spacer />
      <ThemedText>Salut tout le monde</ThemedText>

      { user === null ? 
        <Link href="/login" style={styles.link}>Login Page</Link>
        : 
        <ThemedButton width='40%'>
          <ThemedText onPress={handleLogout}>Logout</ThemedText>
        </ThemedButton>
      }

    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    color: '#F2F2F2' 
  }
})
