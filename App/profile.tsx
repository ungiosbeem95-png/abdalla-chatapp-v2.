import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.avatar}><Text style={styles.avatarText}>AK</Text></View>
        <Text style={styles.name}>Abdalla Keynan</Text>
        <Text style={styles.tag}>亗 X.𝑩𝒆𝒓𝒕 亗</Text>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.infoText}>📧 Email: abdallasaciid95@gmail.com</Text>
        <Text style={styles.infoText}>📱 Phone: +252907244310</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Back to Chat</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a', padding: 20, alignItems: 'center' },
  profileHeader: { alignItems: 'center', marginTop: 50 },
  avatar: { width: 100, height: 100, borderRadius: 50, backgroundColor: '#2563eb', justifyContent: 'center', alignItems: 'center' },
  avatarText: { color: '#fff', fontSize: 35, fontWeight: 'bold' },
  name: { color: '#fff', fontSize: 24, fontWeight: 'bold', marginTop: 15 },
  tag: { color: '#94a3b8', fontSize: 16 },
  infoSection: { marginTop: 30, width: '100%', paddingHorizontal: 20 },
  infoText: { color: '#cbd5e1', fontSize: 16, marginBottom: 10 },
  button: { backgroundColor: '#2563eb', padding: 15, borderRadius: 25, width: '80%', alignItems: 'center', marginTop: 50 },
  buttonText: { color: '#fff', fontWeight: 'bold' }
});
