import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Image, Pressable, View } from "react-native";

export default function CustomHeader() {
  const navigation = useNavigation<any>();
  const route = useRoute();

  const canGoBack = navigation.canGoBack();

  return (
    <View
      style={{
        height: 56,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
        backgroundColor: "white",
      }}
    >
      <View style={{ width: 40 }}>
        {canGoBack ? (
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              source={require("../assets/images/like.png")}
              style={{ width: 24, height: 24 }}
            />
          </Pressable>
        ) : (
          <Pressable onPress={() => navigation.openDrawer()}>
            <Image
              source={require("../assets/images/menus.png")}
              style={{ width: 24, height: 24 }}
            />
          </Pressable>
        )}
      </View>

      <View style={{ width: 40, alignItems: "flex-end" }}>
        <Pressable onPress={() => navigation.navigate("UserProfile")}>
          <Image
            source={require("../assets/images/user.png")}
            style={{ width: 28, height: 28, borderRadius: 14 }}
          />
        </Pressable>
      </View>
    </View>
  );
}
