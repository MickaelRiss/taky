import { useState } from 'react'
import { View, Pressable, StyleSheet } from 'react-native'
import ThemedText from '../ThemedText'

const FrequencySelector = ({ options, onChange }) => {
  const [selected, setSelected] = useState(null)

  const handlePress = (value) => {
    setSelected(value)
    onChange?.(value)
  }

  return (
    <View style={styles.container}>
      {options.map((option) => (
        <Pressable
          key={option}
          onPress={() => handlePress(option)}
          style={({ pressed }) => [
            styles.button,
            selected === option && styles.focused,
            pressed && styles.pressed,
          ]}
        >
          <ThemedText style={[{ textAlign: 'center', color: '#45A075' }, selected === option && styles.focusedText ]}>
            {option}
          </ThemedText>
        </Pressable>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    flex: 1,
    borderWidth: 1,
    borderColor: '#45A075'
  },
  focused: {
    backgroundColor: '#45A075',
  },
  focusedText: {
    color: '#F2F2F2',
  },
  pressed: {
    opacity: 0.8,
  },
})

export default FrequencySelector
