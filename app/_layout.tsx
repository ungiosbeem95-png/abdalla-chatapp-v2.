import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export {
  // Qaladaadka dhaca inta app-ku load-ka yahay halkan ayaa laga maamulaa
  ErrorBoundary,
} from 'expo-router';

export const prev_render_config = {
  initialRouteName: '(tabs)',
};

// Hubi in SplashScreen uusan iska xirmin ilaa wax kasta diyaar ka noqdaan
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    // Halkan waxaad dhowaan ku dari kartaa Font-gaaga gaarka ah
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="chat/[id]" options={{ presentation: 'modal', headerShown: false }} />
    </Stack>
  );
}

