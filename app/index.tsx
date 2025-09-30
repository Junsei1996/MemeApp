import { useRouter } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace("/UserProfile")
    }, 3000); // 3000ms = 3 seconds
  }, []);

  return <View></View>;
}
