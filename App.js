import React, { useState } from 'react';
import { 
  StyleSheet, Text, View, TextInput, TouchableOpacity, 
  FlatList, KeyboardAvoidingView, Platform, SafeAreaView, StatusBar, Image 
} from 'react-native';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('chat'); // Maamulidda boggaga
  const [messages, setMessages] = useState([
    { id: '1', text: 'Kusoo dhawaada Messenger-ka cusub! 🌟', sender: 'bot', time: '11:15 PM' },
  ]);
  const [inputText, setInputText] = useState('');

  const sendMessage = (text = inputText) => {
    if (!text || text.trim().length === 0) return;
    const now = new Date();
    const simpleTime = now.getHours() + ":" + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
    const newMessage = {
      id: Date.now().toString(),
      text: text,
      sender: 'user',
      time: simpleTime,
    };
    setMessages([newMessage, ...messages]);
    setInputText('');
  };

  // --- BOGGA PROFILE-KA ---
  const ProfileScreen = () => (
    <View style={styles.profileContainer}>
      <View style={styles.profileHeader}>
        <View style={styles.avatarPlaceholder}>
          <Text style={styles.avatarText}>AK</Text>
        </View>
        <Text style={styles.profileName}>Abdalla Keynan</Text>
        <Text style={styles.profileTag}>亗 X.𝑩𝒆𝒓𝒕 亗</Text>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statBox}><Text style={styles.statNum}>1.2K</Text><Text style={styles.statLab}>Followers</Text></View>
        <View style={styles.statBox}><Text style={styles.statNum}>450</Text><Text style={styles.statLab}>Following</Text></View>
        <View style={styles.statBox}><Text style={styles.statNum}>89</Text><Text style={styles.statLab}>Posts</Text></View>
      </View>

      <View style={styles.menuList}>
        <TouchableOpacity style={styles.menuItem}><Text style={styles.menuText}>⚙️ Settings</Text></TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}><Text style={styles.menuText}>🔔 Notifications</Text></TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}><Text style={styles.menuText}>🛡️ Privacy & Security</Text></TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.backButton} onPress={() => setCurrentScreen('chat')}>
        <Text style={styles.backButtonText}>Ku noqo Chat-ka</Text>
      </TouchableOpacity>
    </View>
  );

  // --- BOGGA CHAT-KA ---
  const ChatScreen = () => (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setCurrentScreen('profile')}>
           <View style={styles.smallAvatar}><Text style={{color: '#fff', fontSize: 10}}>AK</Text></View>
        </TouchableOpacity>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.headerTitle}>亗 X.𝑩𝒆𝒓𝒕 亗</Text>
          <Text style={styles.subTitle}>Active Now</Text>
        </View>
        <View style={styles.onlineStatus} />
      </View>

      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View style={[styles.messageWrapper, item.sender === 'user' ? {alignItems: 'flex-end'} : {alignItems: 'flex-start'}]}>
            <View style={[styles.messageBubble, item.sender === 'user' ? styles.userBubble : styles.botBubble]}>
              <Text style={styles.messageText}>{item.text}</Text>
              <View style={styles.msgFooter}>
                <Text style={styles.timeText}>{item.time}</Text>
                {item.sender === 'user' && <Text style={styles.checkMark}> ✓✓</Text>}
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
        inverted
        contentContainerStyle={styles.messageList}
      />

      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Qor fariin..."
            placeholderTextColor="#999"
            value={inputText}
            onChangeText={setInputText}
          />
          <TouchableOpacity style={styles.sendButton} onPress={() => sendMessage()}>
            <Text style={styles.sendButtonText}>Dir</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      {currentScreen === 'chat' ? <ChatScreen /> : <ProfileScreen />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a' },
  // Header Styles
  header: { padding: 15, borderBottomWidth: 1, borderBottomColor: '#1e293b', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  headerTitle: { color: '#f8fafc', fontSize: 18, fontWeight: 'bold' },
  subTitle: { color: '#22c55e', fontSize: 12 },
  smallAvatar: { width: 35, height: 35, borderRadius: 17.5, backgroundColor: '#3b82f6', justifyContent: 'center', alignItems: 'center' },
  onlineStatus: { width: 10, height: 10, backgroundColor: '#22c55e', borderRadius: 5 },
  // Chat Styles
  messageList: { paddingHorizontal: 15, paddingVertical: 10 },
  messageWrapper: { marginBottom: 10 },
  messageBubble: { padding: 12, borderRadius: 18, maxWidth: '85%' },
  userBubble: { backgroundColor: '#2563eb', borderBottomRightRadius: 2 },
  botBubble: { backgroundColor: '#1e293b', borderBottomLeftRadius: 2 },
  messageText: { color: '#f8fafc', fontSize: 16 },
  msgFooter: { flexDirection: 'row', alignSelf: 'flex-end', marginTop: 4, alignItems: 'center' },
  timeText: { color: '#94a3b8', fontSize: 10 },
  checkMark: { color: '#94a3b8', fontSize: 10 },
  inputContainer: { flexDirection: 'row', padding: 12, backgroundColor: '#1e293b', alignItems: 'center' },
  input: { flex: 1, backgroundColor: '#0f172a', borderRadius: 25, paddingHorizontal: 15, paddingVertical: 8, color: '#f8fafc', marginRight: 10 },
  sendButton: { backgroundColor: '#2563eb', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 20 },
  sendButtonText: { color: '#fff', fontWeight: 'bold' },
  // Profile Styles
  profileContainer: { flex: 1, padding: 20, alignItems: 'center' },
  profileHeader: { alignItems: 'center', marginTop: 40, marginBottom: 30 },
  avatarPlaceholder: { width: 120, height: 120, borderRadius: 60, backgroundColor: '#3b82f6', justifyContent: 'center', alignItems: 'center', marginBottom: 15 },
  avatarText: { color: '#fff', fontSize: 40, fontWeight: 'bold' },
  profileName: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
  profileTag: { color: '#94a3b8', fontSize: 16, marginTop: 5 },
  statsRow: { flexDirection: 'row', width: '100%', justifyContent: 'space-around', marginBottom: 30 },
  statBox: { alignItems: 'center' },
  statNum: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  statLab: { color: '#94a3b8', fontSize: 12 },
  menuList: { width: '100%', marginBottom: 30 },
  menuItem: { backgroundColor: '#1e293b', padding: 15, borderRadius: 12, marginBottom: 10 },
  menuText: { color: '#fff', fontSize: 16 },
  backButton: { backgroundColor: '#3b82f6', padding: 15, borderRadius: 25, width: '100%', alignItems: 'center' },
  backButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
  
