import ThemedView from "../ThemedView"
import ThemedText from "../ThemedText"
import Status from "./Status"
import { Ionicons } from "@expo/vector-icons"
import { Colors } from "../../constants/Colors"
import { useTheme } from "../../contexts/ThemeContext"

const ThemedCard = ({ style, ...props }) => {
    const { theme } = useTheme()
    const colorTheme = Colors[theme] ?? Colors.light
    
    return (
        <ThemedView style={{ marginHorizontal: 30 }}>
            <ThemedView style={{ 
                flexDirection: 'row', 
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 10
            }}>
                <ThemedText title={true} style={{ fontSize: 16, fontWeight: 'semi-bold' }}>Aspirin</ThemedText>
                <Status />
            </ThemedView>

            <ThemedView style={{ 
                flexDirection: 'row', 
                alignItems: 'center',
                marginTop: 10,
                gap: 10
            }}>
                <ThemedText style={{ fontSize: 12 }}>81mg</ThemedText>
                
                <ThemedText style={{ fontSize: 12 }}
                >
                <Ionicons
                    size={12}
                    name={'time-outline'}
                    color={colorTheme.text}
                />
                81mg
                </ThemedText>
                
                <ThemedText style={{ fontSize: 12 }}>81mg</ThemedText>
            </ThemedView>
        </ThemedView>
    )
}

export default ThemedCard
