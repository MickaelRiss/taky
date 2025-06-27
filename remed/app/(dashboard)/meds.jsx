import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedInput from '../../components/ThemedInput'
import Spacer from '../../components/Spacer'
import ThemedStatus from '../../components/ThemedStatus'
import { StyleSheet, useColorScheme, Pressable, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '../../constants/Colors'
import { useState } from 'react'

const Meds = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  const [pressed, setPressed] = useState(false)
  const [med, setMed] = useState(null)

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView safe={true} style={styles.container}>
          <ThemedView style={{ 
              flexDirection: 'row', 
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
            <ThemedText title={true} style={{ fontSize: 24, fontWeight: 'bold' }}>
              Medications
            </ThemedText>
            <Pressable
              onPress={() => {
                setPressed(true)
                console.log('PRESSED')
              }}
              style={({ pressed }) => [
                pressed && { opacity: 0.8 }
              ]}
            >
              <Ionicons
                size={50}
                name={'add-circle'}
                color={Colors.primary}
              />
            </Pressable>

          </ThemedView>
          <Spacer height={32}/>

          <ThemedView style={styles.inputWrapper}>
            <Ionicons 
                size={20}
                name={'search'}
                color='#BDBDBD'
            />
            <ThemedInput 
                placeholder='Search medications...'
                style={styles.input} 
                onChangeText={setMed}
                value={med}
            />
          </ThemedView>
          <Spacer height={40} />

          <ThemedText title={true} style={{ fontSize: 18 }}>
            Current medications
          </ThemedText>
          <Spacer height={20} />

          <ThemedView style={{ marginHorizontal: 30 }}>
            <ThemedView style={{ 
              flexDirection: 'row', 
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 10
            }}>
              <ThemedText title={true} style={{ fontSize: 16 }}>Aspirin</ThemedText>
              <ThemedStatus />
            </ThemedView>

            <ThemedView style={{ 
              flexDirection: 'row', 
              alignItems: 'center',
              marginTop: 10,
              gap: 10
            }}>
              <ThemedText style={{ fontSize: 12 }}>81mg</ThemedText>
              
              <ThemedText style={{ fontSize: 12 }}
              >
                <Ionicons
                  size={12}
                  name={'time-outline'}
                  color={theme.text}
                />
                81mg
              </ThemedText>
              
              <ThemedText style={{ fontSize: 12 }}>81mg</ThemedText>
            </ThemedView>
          </ThemedView>

      </ThemedView> 
    </TouchableWithoutFeedback>
  )
}

export default Meds

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    padding: 16
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
    fontSize: 16
  }
})
