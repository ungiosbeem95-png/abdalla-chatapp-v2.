import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>AK</Text>
        </View>
        <Text style={styles.name}>Abdalla Keynan</Text>
        <Text style={styles.tag}>亗 X.𝑩𝒆𝒓𝒕 亗</Text>
      </View>

      <View style={styles.menu}>
        <Text style={styles.sectionTitle}>Account Info</Text>
        <Text style={styles.info}>abdallasaciid95@gmail.com</Text>
        <Text style={styles.info}>+252907244310</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Back to Chat</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background, padding: 20, alignItems: 'center' },
  profileHeader: { alignItems: 'center', marginTop: 40 },
  avatar: { width: 100, height: 100, borderRadius: 50, backgroundColor: Colors.primary, justifyContent: 'center', alignItems: 'center' },
  avatarText: { color: Colors.text, fontSize: 35, fontWeight: 'bold' },
  name: { color: Colors.text, fontSize: 24, fontWeight: 'bold', marginTop: 15 },
  tag: { color: Colors.subtext, fontSize: 16 },
  menu: { marginTop: 40, width: '100%', padding: 20, backgroundColor: Colors.card, borderRadius: 15 },
  sectionTitle: { color: Colors.subtext, marginBottom: 15, fontWeight: '600' },
  info: { color: Colors.text, fontSize: 16, marginBottom: 10 },
  button: { backgroundColor: Colors.primary, padding: 15, borderRadius: 25, width: '80%', alignItems: 'center', marginTop: 40 },
  buttonText: { color: Colors.text, fontWeight: 'bold' }
});
