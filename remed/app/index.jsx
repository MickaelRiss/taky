import { StyleSheet } from 'react-native'
import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'
import Spacer from '../components/Spacer'

const Home = () => {
  return (
    <ThemedView style={styles.container} safe={true}>
      <ThemedText title={true}>HOME</ThemedText>
      <Spacer />
      <ThemedText>Salut tout le monde</ThemedText>
      <Link href="/login" style={styles.link}>Login Page</Link>
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
