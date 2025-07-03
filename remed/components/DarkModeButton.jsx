import { Pressable, StyleSheet } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { Colors } from "../constants/Colors"
import { useTheme } from "../contexts/ThemeContext"

const DarkModeButton = () => {
    const { theme, toggleTheme } = useTheme()
    const colorTheme = Colors[theme] ?? Colors.light

    return (
        <Pressable onPress={toggleTheme} style={[{ borderColor: colorTheme.text }, styles.btn]}>
            <Ionicons 
                size={20}
                name={theme === 'light' ? 'sunny-outline' : 'moon-outline' }
                color={colorTheme.text}
            />
        </Pressable>
    )
}

export default DarkModeButton

const styles = StyleSheet.create({
    btn: {
        padding: 10,
        borderRadius: 12,
        borderWidth: 1,
        alignSelf: 'flex-start' 
    }
})
