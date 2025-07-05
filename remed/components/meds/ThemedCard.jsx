import ThemedView from "../ThemedView"
import ThemedText from "../ThemedText"
import Status from "./Status"
import { Ionicons } from "@expo/vector-icons"
import { Colors } from "../../constants/Colors"
import { useTheme } from "../../contexts/ThemeContext"
import { StyleSheet } from "react-native"


const ThemedCard = ({ style, med, ...props }) => {
    const { theme } = useTheme()
    const colorTheme = Colors[theme] ?? Colors.light
    if (!med) return null
    console.log(med)

    return (
        <ThemedView style={[ styles.card, theme === 'dark' ? styles.darkShadow : styles.lightShadow ]}>
            <ThemedView style={{ 
                flexDirection: 'row', 
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 10
            }}>
                <ThemedText title={true} style={{ fontSize: 16, fontWeight: 'semi-bold' }}>{med.name}</ThemedText>
                <Status />
            </ThemedView>

            <ThemedView style={{ 
                flexDirection: 'row', 
                alignItems: 'center',
                marginTop: 10,
                gap: 10
            }}>
                <ThemedText style={{ fontSize: 12 }}>
                    <Ionicons size={12} name={'bag-add-outline'} color={colorTheme.text} />
                    Quantity: {med.unit}
                </ThemedText>
                
                <ThemedText style={{ fontSize: 12 }}
                >
                    <Ionicons size={12} name={'calendar-outline'} color={colorTheme.text} />
                    {med.frequency}
                </ThemedText>
                
                <ThemedText style={{ fontSize: 12 }}
                >
                    <Ionicons size={12} name={'time-outline'} color={colorTheme.text} />
                    {med.time_of_day}
                </ThemedText>
            </ThemedView>
        </ThemedView>
    )
}

export default ThemedCard

const styles = StyleSheet.create({
    card: {
        padding: 18,
        borderRadius: 16, 
        marginBottom: 20,
    },
    lightShadow: {
        shadowColor: '#959da5',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4
    },
    darkShadow: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4
    }
})