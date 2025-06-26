import { StyleSheet, TouchableWithoutFeedback, Keyboard, Text, View, useColorScheme } from "react-native"
import { useState } from "react"
import { Link } from 'expo-router'

import { Colors } from '../../constants/Colors'
import ThemedLogo from "../../components/ThemedLogo"
import ThemedView from "../../components/ThemedView"
import ThemedText from "../../components/ThemedText"
import Spacer from "../../components/Spacer"
import ThemedInput from "../../components/ThemedInput"
import ThemedButton from "../../components/ThemedButton"
import { useUser } from "../../hooks/useUser"

const Register = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
    const themePrimary = Colors.primary
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const { user, register } = useUser()

    const handleSubmit = async () => {
        setError(null)

        try {
            console.log('Hello from submit')
            await register(email, password)
            console.log('Current user is: ', user)
        } catch (error) {
            console.log('My error message: ', error.message)
            setError(error.message)
        }

    }

    return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ThemedView safe={true} style={styles.container}>
            <ThemedLogo style={{ alignSelf: 'center', marginTop: 30 }} />
            <Spacer height={14}/>

            <ThemedText title={true} style={styles.title}>Register to Remed</ThemedText>
            <Spacer height={12}/>
            
            <ThemedText style={{ alignSelf: 'center' }}>Track your medications and stay healthy</ThemedText>
            <Spacer height={50}/>
            
            <View style={{
              flexDirection: 'row',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
            }}>
              <ThemedInput 
                placeholder='John'
                style={{flex: 1 }} 
                onChangeText={setFirstName}
                value={firstName}
              />
              <ThemedInput 
                placeholder='Doe'
                style={{flex: 1 }} 
                onChangeText={setLastName}
                value={lastName}
              />
            </View>
            <Spacer height={14}/>

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

            <ThemedButton onPress={handleSubmit}>
                <Text style={{ color: '#F2F2F2', textAlign: 'center', fontWeight: 'semi-bold'}}>
                    Sign up
                </Text>
            </ThemedButton>
            <Spacer height={14}/>
            
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
            <Link href='/login' asChild>
              <ThemedButton style={{ 
                  backgroundColor: theme.background,
                  borderWidth: 1,
                  borderColor: themePrimary,
              }}>
                  <Text style={{ color: themePrimary, textAlign: 'center', fontWeight: 'semi-bold'}}>
                      Login
                  </Text>
              </ThemedButton>
            </Link>      
        </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default Register

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