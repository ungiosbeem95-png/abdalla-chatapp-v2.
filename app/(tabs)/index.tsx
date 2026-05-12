import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { socket } from '../../services/socket.service';

export default function ChatListScreen() {
  const router = useRouter();
  
  // Xogta tijaabada ah (Halkan ayaad ku dari kartaa Fadumo Mohamed dhowaan)
  const [chats, setChats] = useState([
    { id: '1', name: '亗 X.𝑩𝒆𝒓𝒕 亗', lastMsg: 'Ma dhammaday code-kii?', time: '12:30' },
    { id: '2', name: 'Fadumo Mohamed', lastMsg: 'Waan ku sugayaa...', time: '11:45' },
  ]);

  useEffect(() => {
    socket.on('new_message', (message) => {
      console.log('Fariin cusub:', message);
    });

    return () => {
      socket.off('new_message');
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header-ka sare */}
      <View style={styles.header}>
        <Text style={styles.title}>Chats</Text>
        <TouchableOpacity onPress={() => router.push('/profile')}>
          <View style={styles.avatarMini}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>AK</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Liiska Chat-yada */}
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.chatItem} 
            // Halkan waa xiriiriyihii muhiimka ahaa:
            onPress={() => router.push({ 
              pathname: '/chat/[id]', 
              params: { id: item.id, name: item.name } 
            })}
          >
            <View style={styles.avatarSmall}>
               <Text style={{color: '#94a3b8', fontSize: 10}}>IMG</Text>
            </View>
            <View style={styles.chatInfo}>
              <Text style={styles.chatName}>{item.name}</Text>
              <Text style={styles.chatMsg} numberOfLines={1}>{item.lastMsg}</Text>
            </View>
            <Text style={styles.chatTime}>{item.time}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  header: { flexDirection: 'row', justifyContent: 'space-between', padding: 20, alignItems: 'center', paddingTop: 40 },
  title: { color: Colors.text, fontSize: 32, fontWeight: 'bold' },
  avatarMini: { width: 45, height: 45, borderRadius: 22.5, backgroundColor: Colors.primary, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: Colors.card },
  chatItem: { flexDirection: 'row', padding: 18, alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#1e293b' },
  avatarSmall: { width: 55, height: 55, borderRadius: 27.5, backgroundColor: Colors.card, justifyContent: 'center', alignItems: 'center' },
  chatInfo: { marginLeft: 15, flex: 1 },
  chatName: { color: Colors.text, fontWeight: 'bold', fontSize: 17, marginBottom: 4 },
  chatMsg: { color: Colors.subtext, fontSize: 14 },
  chatTime: { color: Colors.subtext, fontSize: 12 },
});
