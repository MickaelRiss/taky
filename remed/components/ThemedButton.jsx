import { useState } from 'react'
import { Colors } from '../constants/Colors'
import { Pressable, StyleSheet, useColorScheme } from 'react-native'

const ThemedButton = ({ width = '20%', style, ...props}) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
    const [pressed, setPressed] = useState(false)
    
    return (
        <Pressable 
            onPress={() => {
                console.log('je suis pressed')
                setPressed(true)
            }}
            style={({ pressed }) => [
                width,
                styles.btn,
                pressed && styles.pressed,
                style 
            ]}
            {...props}
        />
    )   
}

export default ThemedButton

const styles = StyleSheet.create({
    btn: {
        backgroundColor: Colors.primary,
        padding: 15,
        borderRadius: 12,
    },
    pressed: {
        opacity: 0.8
    }
})