import { StyleSheet, Pressable, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import { useMedications } from '../../hooks/useMedications'
import { useRouter } from 'expo-router'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedInput from '../../components/ThemedInput'
import Spacer from '../../components/Spacer'
import ThemedCard from '../../components/meds/ThemedCard'
import ThemedLoader from '../../components/ThemedLoader'

const Meds = () => {
  const router = useRouter()
  const [pressed, setPressed] = useState(false)
  const { medications, loading, fetchMedications } = useMedications()
  const [med, setMed] = useState(null)

  useEffect(() => {
    const load = async () => {
      await fetchMedications()
      console.log('Voici medications:', medications)
      console.log('First med: ', medications[0])
    }
    load()
  }, [])

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView safe={true} style={styles.container}>
        <ScrollView           
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
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
                router.push('/meds/add')
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
                placeholderTextColor="#BDBDBD"
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

          <ThemedCard />
          <Spacer height={20} />

          <ThemedCard />
          <Spacer height={20} />

          <ThemedCard />
          <Spacer height={20} />

          <ThemedCard />
          <Spacer height={20} />
        </ScrollView>       
      </ThemedView> 
    </TouchableWithoutFeedback>
  )
}

export default Meds

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
  }
})
