import { Colors } from '../constants/Colors'
import { TextInput } from 'react-native'
import { useTheme } from '../contexts/ThemeContext'

const ThemedInput = ({ style, ...props }) => {
    const { theme } = useTheme()
    const colorTheme = Colors[theme] ?? Colors.light
    
    return (
        <TextInput 
            style={[{
                backgroundColor: colorTheme.inputBackground,
                color: colorTheme.placeholder,
                padding: 20,
                borderRadius: 12
            }, style]}
            {...props}
        />
    )   
}

export default ThemedInput