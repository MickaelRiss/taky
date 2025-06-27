import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import { StyleSheet } from 'react-native'

const Referent = () => {
  return (
    <ThemedView safe={true} style={styles.container}>
        <ThemedText title={true}>Referent page</ThemedText>
    </ThemedView>
  )
}

export default Referent

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
})
