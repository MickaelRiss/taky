import { StyleSheet, TouchableWithoutFeedback, Keyboard, Text, View, useColorScheme, Alert } from "react-native"
import { useState } from "react"
import { Link, useRouter } from "expo-router"
import { Colors } from '../../constants/Colors'
import { useUser } from '../../hooks/useUser'
import ThemedLogo from "../../components/ThemedLogo"
import ThemedView from "../../components/ThemedView"
import ThemedText from "../../components/ThemedText"
import Spacer from "../../components/Spacer"
import ThemedInput from "../../components/ThemedInput"
import ThemedButton from "../../components/ThemedButton"

const Login = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
    const themePrimary = Colors.primary
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const { user, login } = useUser()
    const router = useRouter()

        const handleLogin = async () => {
        setError(null)

        try {
            await login(email, password)
            router.replace('/home')
        } catch (error) {
            console.log('Login error:', error.message)
            setError(error.message)
        }
    }

    return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ThemedView safe={true} style={styles.container}>
            <ThemedLogo style={{ alignSelf: 'center', marginTop: 30 }} />
            <Spacer height={14}/>

            <ThemedText title={true} style={styles.title}>Welcome back to Remed</ThemedText>
            <Spacer height={12}/>
            
            <ThemedText style={{ alignSelf: 'center' }}>Track your medications and stay healthy</ThemedText>
            <Spacer height={50}/>
            
            <ThemedInput 
                placeholder='Email'
                style={{}} 
                keyboardType='email-address'
                onChangeText={setEmail}
                value={email}
            />
            <Spacer height={14}/>

            <ThemedInput 
                placeholder='Password'
                style={{}}
                onChangeText={setPassword}
                value={password}
                secureTextEntry 
            />
            <Spacer height={14}/>

            <ThemedButton onPress={handleLogin}>
                <Text style={{ color: '#F2F2F2', textAlign: 'center', fontWeight: 'semi-bold'}}>
                    Login
                </Text>
            </ThemedButton>
            <Spacer height={14}/>
            
            <Text style={{ color: themePrimary, textAlign: 'center', fontWeight: 'semi-bold'}}>
                Forgot Password?
            </Text>
            <Spacer height={30}/>

            <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 16,
            }}>
                <View style={{
                    flex: 1,
                    height: 1,
                    backgroundColor: theme.title,
                    opacity: 0.2,
                    marginRight: 24
                }} />
                <Text style={{ color: theme.title }}>or</Text>
                <View style={{
                    flex: 1,
                    height: 1,
                    backgroundColor: theme.title,
                    opacity: 0.2,
                    marginLeft: 24
                }} />
            </View>
            <Spacer height={30}/>

            <Link href='/register' asChild>
                <ThemedButton style={{ 
                        backgroundColor: theme.background,
                        borderWidth: 1,
                        borderColor: themePrimary,
                    }}
                >
                    <Text style={{ color: themePrimary, textAlign: 'center', fontWeight: 'semi-bold'}}>
                        Register
                    </Text>
                </ThemedButton>
            </Link>
        </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center'
    }
})