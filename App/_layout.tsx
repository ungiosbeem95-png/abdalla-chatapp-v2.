import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#0f172a' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        headerShown: false, // Waxaan ka saarnay header-ka si uu app-ku u noqdo mid casri ah
      }}
    >
      {/* Bogga Login-ka ayaa ugu horreyn doona */}
      <Stack.Screen name="(auth)/login" options={{ title: 'Soo Gal' }} />
      <Stack.Screen name="index" options={{ title: 'Chat' }} />
      <Stack.Screen name="profile" options={{ title: 'Profile' }} />
    </Stack>
  );
}
