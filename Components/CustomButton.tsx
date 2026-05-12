import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';

export const CustomButton = ({ title, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: { backgroundColor: Colors.primary, padding: 15, borderRadius: 12, alignItems: 'center', width: '100%' },
  text: { color: Colors.text, fontWeight: 'bold', fontSize: 16 }
});
