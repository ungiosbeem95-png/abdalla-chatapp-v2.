import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { CustomButton } from '../../components/CustomButton';

export default function LoginScreen() {
  const router = useRouter();
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    if (username.length > 2) {
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
          placeholderTextColor={Colors.subtext}
          value={username}
          onChangeText={setUsername}
        />

        {/* Halkan waxaan ku isticmaalaynaa Component-ka cusub */}
        <CustomButton title="Soo gal" onPress={handleLogin} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background, justifyContent: 'center', alignItems: 'center', padding: 20 },
  card: { width: '100%', backgroundColor: Colors.card, padding: 30, borderRadius: 20, alignItems: 'center' },
  title: { color: Colors.text, fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { color: Colors.subtext, fontSize: 14, marginBottom: 25, textAlign: 'center' },
  input: { width: '100%', backgroundColor: Colors.background, color: Colors.text, padding: 15, borderRadius: 12, marginBottom: 20, borderWidth: 1, borderColor: '#334155' },
});
