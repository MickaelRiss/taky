import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedInput from '../../components/ThemedInput'
import ThemedButton from '../../components/ThemedButton'
import Spacer from '../../components/Spacer'
import { StyleSheet, Pressable, TouchableWithoutFeedback, Keyboard, Text, View } from 'react-native'
import { useState } from 'react'
import ThemedReferent from '../../components/referent/ThemedReferent'
import { useTheme } from '../../contexts/ThemeContext'
import { Colors } from '../../constants/Colors'

const Referent = () => {
  const [pressed, setPressed] = useState(false)
  const [med, setMed] = useState(null)
  const [referentCode, setreferentCode] = useState('')
  const { theme } = useTheme()
  const themeColor = Colors[theme] ?? Colors.light

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView safe={true} style={styles.container}>
          <ThemedView style={{ 
              flexDirection: 'row', 
              alignItems: 'center',
            }}>
            <ThemedText title={true} style={{ fontSize: 24, fontWeight: 'bold' }}>
              Referent
            </ThemedText>
          </ThemedView>
          <Spacer height={32}/>

          <ThemedReferent />
          <Spacer height={20}/>
          
          <ThemedButton>
            <Text style={{ color: '#F2F2F2', textAlign: 'center', fontSize: 16, fontWeight: 'semibold'}}>Add New Referent</Text>
          </ThemedButton>
          
          <Spacer height={36}/>

          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <View style={{
                flex: 1,
                height: 1,
                backgroundColor: themeColor.title,
                opacity: 0.2,
                marginRight: 24
            }} />
              <Text style={{ color: themeColor.title }}>or</Text>
              <View style={{
                  flex: 1,
                  height: 1,
                  backgroundColor: themeColor.title,
                  opacity: 0.2,
                  marginLeft: 24
              }} />
          </View>
          <Spacer height={36}/>
          
          <ThemedInput 
            placeholder='Enter referent code'
            placeholderTextColor='#6B7A89'
            onChangeText={console.log('referentCode')}
            value={referentCode}
          />

          <Spacer height={20}/>
          <ThemedButton style={styles.btn}>
            <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 'semibold', color: '#45A075'}}>Connect</Text>
          </ThemedButton>
          
          <Spacer height={40}/>
          <ThemedView style={{ gap: 10 }}>
            <ThemedText title={true}>
              * Your referent will receive notifications about your medication progress and any missed doses.
            </ThemedText>
            <ThemedText  style={{ fontSize: 12 }}>
              Your privacy is protected. Only medication progress information will be shared.
            </ThemedText>
          </ThemedView>

      </ThemedView> 
    </TouchableWithoutFeedback>
  )
}

export default Referent

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    paddingHorizontal: 20
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    paddingHorizontal: 18
  },
  input: {
    flex: 1,
    fontSize: 16,
    backgroundColor: '#f2f2f2'
  },
  btn: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#45A075',
    color: '#45A075',
  }
})
