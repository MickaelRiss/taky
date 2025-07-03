import { ActivityIndicator } from "react-native"
import { Colors } from "../constants/Colors"
import ThemedView from "./ThemedView"
import { useTheme } from "../contexts/ThemeContext"

const ThemedLoader = () => {
    const { theme } = useTheme()
    const colorTheme = Colors[theme] ?? Colors.light
    return (
        <ThemedView style={{ 
            flex: 1, 
            justifyContent: 'center', 
            alignItems: 'center' 
        }}>
            <ActivityIndicator size="large" color={colorTheme.text} />
        </ThemedView>
    )
}

export default ThemedLoader