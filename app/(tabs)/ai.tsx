import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { Colors } from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function AIScreen() {
  const [messages, setMessages] = useState([
    { id: '1', text: 'Asc Abdalla! Sideen kuu caawin karaa maanta?', sender: 'ai' }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim().length === 0) return;
    
    // Fariintaada
    const userMsg = { id: Date.now().toString(), text: input, sender: 'user' };
    setMessages(prev => [userMsg, ...prev]);
    setInput('');

    // Jawaabta AI-ga (Mock response)
    setTimeout(() => {
      const aiMsg = { id: (Date.now() + 1).toString(), text: 'Waan ku maqlayaa, hadda ayaan kaaga shaqaynayaa...', sender: 'ai' };
      setMessages(prev => [aiMsg, ...prev]);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        inverted
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={[styles.bubble, item.sender === 'user' ? styles.userBubble : styles.aiBubble]}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
        contentContainerStyle={styles.listContent}
      />

      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={100}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Weydii AI-ga wax kasta..."
            placeholderTextColor={Colors.subtext}
            value={input}
            onChangeText={setInput}
          />
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Ionicons name="send" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  listContent: { padding: 20 },
  bubble: { padding: 12, borderRadius: 18, marginBottom: 10, maxWidth: '85%' },
  userBubble: { alignSelf: 'flex-end', backgroundColor: Colors.primary },
  aiBubble: { alignSelf: 'flex-start', backgroundColor: Colors.card },
  messageText: { color: Colors.text, fontSize: 16 },
  inputContainer: { flexDirection: 'row', padding: 15, backgroundColor: Colors.card, alignItems: 'center' },
  input: { flex: 1, backgroundColor: Colors.background, color: Colors.text, borderRadius: 25, paddingHorizontal: 20, height: 45 },
  sendButton: { marginLeft: 10, backgroundColor: Colors.primary, width: 45, height: 45, borderRadius: 22.5, justifyContent: 'center', alignItems: 'center' }
});
