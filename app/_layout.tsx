import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { ActivityIndicator, StatusBar, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {

  const [fontsLoaded] = useFonts({
    "poppins_bold": require("../assets/fonts/poppins_bold.ttf"),
    "poppins_extrabold": require("../assets/fonts/poppins_extrabold.ttf"),
    "poppins_italic": require("../assets/fonts/poppins_italic.ttf"),
    "poppins_light": require("../assets/fonts/poppins_light.ttf"),
    "poppins_medium": require("../assets/fonts/poppins_medium.ttf"),
    "poppins_regular": require("../assets/fonts/poppins_regular.ttf"),
    "poppins_semibold": require("../assets/fonts/poppins_semibold.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }


  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <StatusBar
          barStyle="dark-content" // dark icons (good for light backgrounds)
          backgroundColor="white" // make status bar background white
        />
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="HomeScreen" />
          <Stack.Screen name="UserProfile" />
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
