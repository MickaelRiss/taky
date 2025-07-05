import { useState } from 'react';
import { Modal, View, FlatList, Pressable, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import ThemedText from '../ThemedText';
import { useTheme } from '../../contexts/ThemeContext';
import { Colors } from '../../constants/Colors';

const generateTimes = () => {
    const times = [];
    for (let hour = 0; hour < 24; hour++) {
    times.push(`${hour.toString().padStart(2, '0')}:00`);
    times.push(`${hour.toString().padStart(2, '0')}:30`);
    }
    return times;
};

const TimeSelector = ({ selectedTime, onChange, style }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { theme } = useTheme();
  const colorTheme = Colors[theme] ?? Colors.light;

  const times = generateTimes();

  const handleSelect = (time) => {
    onChange(time);
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: colorTheme.inputBackground }]}
        onPress={() => setModalVisible(true)}
      >
        <ThemedText>{selectedTime || 'Choose a time'}</ThemedText>
        <Ionicons name="chevron-down" size={18} color={colorTheme.icon} />
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <BlurView
            intensity={40}
            style={[
                {
                backgroundColor:
                    theme === 'dark'
                    ? 'rgba(0, 0, 0, 0.2)'
                    : 'rgba(69, 160, 117, 0.2)',
                },
                styles.overlay,
            ]}
        >          
            <View style={[styles.modalContainer, { backgroundColor: colorTheme.backgroundColor }]}>
            <Text style={[styles.modalTitle, { color: colorTheme.title }]}>Select a time</Text>
            <FlatList
              data={times}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <Pressable
                  style={({ pressed }) => [
                    styles.timeOption,
                    pressed && { backgroundColor: colorTheme.inputBackground }
                  ]}
                  onPress={() => handleSelect(item)}
                >
                  <Text style={{ color: colorTheme.title }}>{item}</Text>
                </Pressable>
              )}
              contentContainerStyle={{ paddingBottom: 20 }}
            />
            <Pressable 
                onPress={() => setModalVisible(false)} 
                style={({ pressed }) => [ styles.closeBtn, pressed && styles.pressed, style]}>
              <Text style={{ color: '#F2F2F2' }}>Cancel</Text>
            </Pressable>
          </View>
        </BlurView>
      </Modal>
    </View>
  );
};

export default TimeSelector;

const styles = StyleSheet.create({
  button: {
    padding: 14,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  modalContainer: {
    maxHeight: '60%',
    borderRadius: 14,
    padding: 20,
  },
  modalTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  timeOption: {
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderBottomWidth: 0.5,
    borderColor: '#F2F2F2',
  },
  closeBtn: {
    marginTop: 10,
    alignItems: 'center',
    padding: 10,
    borderRadius: 12,
    backgroundColor: '#FF6B6B'
  },
  pressed: {
    opacity: 0.8
  }
});
