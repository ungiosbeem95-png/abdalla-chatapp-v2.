import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Colors } from '../../constants/Colors';

const MOCK_STATUS = [
  { id: '1', name: 'My Status', time: 'Tap to add status update' },
  { id: '2', name: 'X.𝑩𝒆𝒓𝒕', time: '10 minutes ago' },
  { id: '3', name: 'Fadumo Mohamed', time: '2 hours ago' },
];

export default function StatusScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={MOCK_STATUS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.statusItem}>
            <View style={[styles.avatarCircle, item.id !== '1' && styles.statusActive]}>
               <Text style={{color: '#fff', fontSize: 10}}>IMG</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  statusItem: { flexDirection: 'row', padding: 15, alignItems: 'center' },
  avatarCircle: { width: 55, height: 55, borderRadius: 27.5, backgroundColor: Colors.card, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: 'transparent' },
  statusActive: { borderColor: Colors.online }, // Midabka cagaarka ah ee xariiqda wareegsan
  info: { marginLeft: 15 },
  name: { color: Colors.text, fontWeight: 'bold', fontSize: 16 },
  time: { color: Colors.subtext, fontSize: 14 },
});
