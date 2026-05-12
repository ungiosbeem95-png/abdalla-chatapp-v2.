import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    if (username.length > 2) {
      // Halkan waxaan u gudbi doonaa bogga Chat-ka (index)
      router.replace('/');
    } else {
      alert("Fadlan qor magac sax ah!");
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={styles.container}
    >
      <View style={styles.card}>
        <Text style={styles.title}>Ku soo dhawaada</Text>
        <Text style={styles.subtitle}>Geli magacaaga si aad u bilowdo chat-ka</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Magacaaga..."
          placeholderTextColor="#94a3b8"
          value={username}
          onChangeText={setUsername}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Soo gal</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a', justifyContent: 'center', alignItems: 'center', padding: 20 },
  card: { width: '100%', backgroundColor: '#1e293b', padding: 30, borderRadius: 20, alignItems: 'center' },
  title: { color: '#fff', fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { color: '#94a3b8', fontSize: 14, marginBottom: 25, textAlign: 'center' },
  input: { width: '100%', backgroundColor: '#0f172a', color: '#fff', padding: 15, borderRadius: 12, marginBottom: 20, borderWidth: 1, borderColor: '#334155' },
  button: { backgroundColor: '#2563eb', width: '100%', padding: 15, borderRadius: 12, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

