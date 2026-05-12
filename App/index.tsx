import React, { useState } from 'react';
import { View, FlatList, TextInput, TouchableOpacity, Text, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';

export default function ChatScreen() {
  const router = useRouter();
  const [messages, setMessages] = useState([{ id: '1', text: 'Kusoo dhawaada Pro Chat!', sender: 'bot' }]);
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View style={[styles.bubble, item.sender === 'user' ? styles.user : styles.bot]}>
            <Text style={{ color: '#fff' }}>{item.text}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
        inverted
      />
      
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.inputArea}>
          <TextInput 
            style={styles.input} 
            value={text} 
            onChangeText={setText} 
            placeholder="Qor fariin..." 
            placeholderTextColor="#999"
          />
          <TouchableOpacity onPress={() => router.push('/profile')} style={styles.profileBtn}>
            <Text style={{color: '#fff'}}>👤</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a' },
  bubble: { padding: 12, margin: 10, borderRadius: 15, maxWidth: '80%' },
  user: { alignSelf: 'flex-end', backgroundColor: '#2563eb' },
  bot: { alignSelf: 'flex-start', backgroundColor: '#1e293b' },
  inputArea: { flexDirection: 'row', padding: 15, backgroundColor: '#1e293b' },
  input: { flex: 1, color: '#fff', backgroundColor: '#0f172a', borderRadius: 20, paddingHorizontal: 15 },
  profileBtn: { marginLeft: 10, justifyContent: 'center' }
});
