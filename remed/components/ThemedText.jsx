import { Text } from "react-native"
import { Colors } from "../constants/Colors"
import { useTheme } from "../contexts/ThemeContext"

const ThemedText = ({ style, title = false, ...props }) => {
    const { theme } = useTheme()
    const colorTheme = Colors[theme] ?? Colors.light
    const textColor = title ? colorTheme.title : colorTheme.text

    return (
        <Text 
            style={[{ color: textColor }, style ]}
            { ...props }
        />
    )
}

export default ThemedText
