import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../constants/Colors';

const MOCK_CHATS = [
  { id: '1', name: 'X.𝑩𝒆𝒓𝒕', lastMsg: 'Sidee tahay?', time: '12:30' },
  { id: '2', name: 'Kooxda Coding', lastMsg: 'Code-ka ma dhamaystirnay?', time: '10:15' },
];

export default function ChatListScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Chats</Text>
        <TouchableOpacity onPress={() => router.push('/profile')}>
          <View style={styles.avatarMini}><Text style={{color: '#fff'}}>AK</Text></View>
        </TouchableOpacity>
      </View>

      <FlatList
        data={MOCK_CHATS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.chatItem}>
            <View style={styles.avatarSmall} />
            <View style={styles.chatInfo}>
              <Text style={styles.chatName}>{item.name}</Text>
              <Text style={styles.chatMsg}>{item.lastMsg}</Text>
            </View>
            <Text style={styles.chatTime}>{item.time}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  header: { flexDirection: 'row', justifyContent: 'space-between', padding: 20, alignItems: 'center' },
  title: { color: Colors.text, fontSize: 32, fontWeight: 'bold' },
  avatarMini: { width: 40, height: 40, borderRadius: 20, backgroundColor: Colors.primary, justifyContent: 'center', alignItems: 'center' },
  chatItem: { flexDirection: 'row', padding: 15, alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#1e293b' },
  avatarSmall: { width: 50, height: 50, borderRadius: 25, backgroundColor: Colors.subtext },
  chatInfo: { marginLeft: 15, flex: 1 },
  chatName: { color: Colors.text, fontWeight: 'bold', fontSize: 16 },
  chatMsg: { color: Colors.subtext },
  chatTime: { color: Colors.subtext, fontSize: 12 },
});
