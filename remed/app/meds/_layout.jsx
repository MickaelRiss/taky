import { Stack } from 'expo-router'
import { MedicationsProvider } from '../../contexts/MedicationsContext'

const MedsStackLayout = () => {
  return (
    <MedicationsProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          title: 'Ajouter un médicament',
        }}
      />
    </MedicationsProvider>
  )
}

export default MedsStackLayout
