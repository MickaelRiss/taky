import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import { StyleSheet } from 'react-native'

const Home = () => {
  return (
    <ThemedView safe={true} style={styles.container}>
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
