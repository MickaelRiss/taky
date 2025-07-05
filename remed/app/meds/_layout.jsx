import { Stack } from 'expo-router'

const MedsStackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        title: 'Ajouter un médicament',
      }}
    />
  )
}

export default MedsStackLayout
