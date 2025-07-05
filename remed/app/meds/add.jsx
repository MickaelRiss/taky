import { useRouter } from 'expo-router'
import { StyleSheet, Pressable, TouchableWithoutFeedback, Keyboard, View, Text, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '../../constants/Colors'
import { useMedications } from '../../hooks/useMedications'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedInput from '../../components/ThemedInput'
import Spacer from '../../components/Spacer'
import ThemedCard from '../../components/meds/ThemedCard'
import ThemedLoader from '../../components/ThemedLoader'
import ThemedButton from '../../components/ThemedButton'
import FrequencySelector from '../../components/meds/FrequencySelector'
import TimeSelector from '../../components/meds/TimeSelector'
import { useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'

const AddMedication = () => {
  const { theme } = useTheme()
  const colorTheme = Colors[theme] ?? Colors.light
  const [med, setMed] = useState({})
  const [frequency, setFrequency] = useState(null)

  const handleSubmit = () => {
    console.log('hello de subnit')
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ThemedView style={{ flex: 1 }}>
          <ScrollView
            contentContainerStyle={{ padding: 20, paddingBottom: 60 }}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >

            <View style={{ gap: 14 }}>
              <ThemedText title={true} style={{ fontWeight: 600 }}>Medication Name</ThemedText>
              <ThemedInput 
                placeholder='Enter medication name'
                placeholderTextColor="#6B7A89" 
                onChangeText={setMed}
                value={med.name} 
              />
            </View>
            <Spacer height={30}/>

            <View style={{ gap: 14 }}>
              <ThemedText title={true} style={{ fontWeight: 600 }}>Dosage</ThemedText>
              <View style={{ flexDirection: 'row', gap: 20 }}>
                <ThemedInput 
                  placeholder='Amount'
                  placeholderTextColor="#6B7A89" 
                  style={{ flex: 1 }}
                  onChangeText={setMed}
                  value={med.dose} 
                />
                <View style={{ 
                  backgroundColor: 'red',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 14, 
                  borderRadius: 12,
                  backgroundColor: colorTheme.inputBackground, 
                }}>
                  <ThemedText title={true}>
                    mg
                  </ThemedText>
                </View>
              </View>
            </View>
            <Spacer height={30}/>

            <View style={{ gap: 14 }}>
              <ThemedText title={true} style={{ fontWeight: 600 }}>Frequency</ThemedText>
              <FrequencySelector
                options={['Daily', 'Weekly', 'Monthly']}
                onChange={(value) => setMed(value)}
              />
            </View>
            <Spacer height={30}/>

            <View style={{ gap: 14 }}>
              <ThemedText title={true} style={{ fontWeight: 600 }}>Dosage</ThemedText>
              <View style={{ flexDirection: 'row', gap: 20 }}>
                <ThemedInput 
                  placeholder='Amount'
                  placeholderTextColor="#6B7A89" 
                  style={{ flex: 1 }}
                  onChangeText={setMed}
                  value={med.dose} 
                />
                <View style={{ 
                  backgroundColor: 'red',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 14, 
                  borderRadius: 12,
                  backgroundColor: colorTheme.inputBackground, 
                }}>
                  <ThemedText title={true}>
                    mg
                  </ThemedText>
                </View>
              </View>
            </View>
            <Spacer height={30}/>

            <View style={{ gap: 14 }}>
              <ThemedText title={true} style={{ fontWeight: 600 }}>Time of Day</ThemedText>
              <TimeSelector 
                selectedTime={med.timeOfDay}
                onChange={(value) => setMed({ ...med, timeOfDay: value })}
              />
            </View>
            <Spacer height={30}/>

            <View style={{ gap: 14 }}>
              <ThemedText title={true} style={{ fontWeight: 600 }}>Notes (Optional)</ThemedText>
              <ThemedInput 
                placeholder='Add any special instructions'
                placeholderTextColor="#6B7A89" 
                multiline
                numberOfLines={4}
                onChangeText={setMed}
                value={med.name} 
                style={styles.note}
              />
            </View>
            <Spacer height={30}/>

            <ThemedButton onPress={handleSubmit}>
                <Text style={{ color: '#F2F2F2', textAlign: 'center', fontWeight: 400 }}>
                    Save Medication
                </Text>
            </ThemedButton>
          
          </ScrollView>
        </ThemedView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}

export default AddMedication

const styles = StyleSheet.create({
  button: {
    borderColor: '#45A075',
    color: '#45A075',
    padding: 16
  },
  pressed: {
    opacity: 0.8
  },
  focused: {
    backgroundColor: '#45A075',
    color: '#F2F2F2'
  },
  note: {
    textAlignVertical: 'top',
    height: 100
  }
})
