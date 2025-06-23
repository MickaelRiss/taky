import { Colors } from '../constants/Colors'
import { TextInput, useColorScheme } from 'react-native'

const ThemedInput = ({ style, ...props }) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
    
    return (
        <TextInput 
            style={[{
                backgroundColor: theme.inputBackground,
                color: theme.placeholder,
                padding: 20,
                borderRadius: 12
            }, style]}
            {...props}
        />
    )   
}

export default ThemedInput