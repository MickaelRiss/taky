import ThemedView from "../ThemedView"
import ThemedText from "../ThemedText"
import { StyleSheet, View, Pressable } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { Colors } from "../../constants/Colors"
import { useState } from "react"
import { useTheme } from "../../contexts/ThemeContext"

const ThemedReferent = ({ style, ...props }) => {
    const { theme } = useTheme()
    const themeColor = Colors[theme] ?? Colors.light
    const [pressed, setPressed] = useState(false)    

    const handleDelete = () => {
        setPressed(true)
        console.log('Delete User')
    }

    return (
        <ThemedView style={[styles.card, theme === 'dark' ? styles.darkShadow : styles.lightShadow ]}>
            <View style={{ 
                flexDirection: 'row', 
                alignItems: 'center',
                gap: 24,
                marginBottom: 20
            }}>
                <Ionicons
                    size={32}
                    name={'person-outline'}
                    style={styles.icon}
                />
                <View>
                    <ThemedText title={true} style={{ fontSize: 20, fontWeight: 'semi-bold', marginBottom: 4 }}>Sarah Johnson</ThemedText>
                    <ThemedText style={{ fontSize: 14 }}>sarah.johnson@gmail.com</ThemedText>
                </View>
            </View>

            <View style={{ 
                flexDirection: 'row', 
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <ThemedText style={{ fontSize: 14 }}>Active since Jan 15, 2024</ThemedText>
                <Pressable onPress={handleDelete} style={({ pressed }) => pressed && styles.pressed}>
                    <Ionicons
                        size={24}
                        name={'trash-outline'}
                        color={Colors.error}
                    />
                </Pressable>
            </View>
        </ThemedView>
    )
}

export default ThemedReferent

const styles = StyleSheet.create({
    card: {
        padding: 18,
        borderRadius: 16
    },
    icon: {
        color: '#F2F2F2',
        backgroundColor: Colors.primary,
        padding: 12,
        borderRadius: 50
    },
    pressed: {
        opacity: 0.6
    },
    lightShadow: {
        shadowColor: '#959da5',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.2,
        shadowRadius: 24,
        elevation: 4
    },
    darkShadow: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.1,
        shadowRadius: 24,
        elevation: 4
    }
})