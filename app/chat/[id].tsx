import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function PersonalChatScreen() {
  const { id, name } = useLocalSearchParams();
  const router = useRouter();
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { id: '1', text: 'Meeyey code-kii?', sender: 'other' },
    { id: '2', text: 'Hadda ayaan soo dirayaa', sender: 'me' },
  ]);

  const sendMsg = () => {
    if (message.trim()) {
      setChatHistory([...chatHistory, { id: Date.now().toString(), text: message, sender: 'me' }]);
      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
      {/* Header-ka sare */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color={Colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{name || 'Chat'}</Text>
      </View>

      <FlatList
        data={chatHistory}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.bubble, item.sender === 'me' ? styles.myBubble : styles.otherBubble]}>
            <Text style={styles.chatText}>{item.text}</Text>
          </View>
        )}
        contentContainerStyle={{ padding: 20 }}
      />

      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={90}>
        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            placeholder="Qor fariin..."
            placeholderTextColor={Colors.subtext}
            value={message}
            onChangeText={setMessage}
          />
          <TouchableOpacity onPress={sendMsg} style={styles.sendBtn}>
            <Ionicons name="send" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  header: { flexDirection: 'row', alignItems: 'center', padding: 20, paddingTop: 50, backgroundColor: Colors.card },
  headerTitle: { color: Colors.text, fontSize: 18, fontWeight: 'bold', marginLeft: 15 },
  bubble: { padding: 12, borderRadius: 15, marginBottom: 10, maxWidth: '80%' },
  myBubble: { alignSelf: 'flex-end', backgroundColor: Colors.primary },
  otherBubble: { alignSelf: 'flex-start', backgroundColor: Colors.card },
  chatText: { color: Colors.text },
  inputArea: { flexDirection: 'row', padding: 15, backgroundColor: Colors.card, alignItems: 'center' },
  input: { flex: 1, backgroundColor: Colors.background, color: Colors.text, borderRadius: 20, paddingHorizontal: 15, height: 40 },
  sendBtn: { marginLeft: 10, backgroundColor: Colors.primary, padding: 10, borderRadius: 20 }
});
    
