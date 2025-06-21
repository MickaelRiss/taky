import { StyleSheet } from "react-native"

import ThemedView from "../../components/ThemedView"
import ThemedText from "../../components/ThemedText"
import Spacer from "../../components/Spacer"

const Login = () => {
    
    return (
    <ThemedView safe={true} style={styles.container}>
        <ThemedText title={true}>Login</ThemedText>
    </ThemedView>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
    }
})