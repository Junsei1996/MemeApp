import {
    DrawerContentScrollView,
    DrawerItem,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function CustomDrawer(props: any) {
  const navigation = useNavigation<any>();

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ flex: 1, backgroundColor: "#fff" }}
    >
      {/* 🔹 Profile Header */}
      <View
        style={{
          padding: 20,
          borderBottomWidth: 1,
          borderBottomColor: "#eee",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/images/user.png")}
          style={{
            width: 80,
            height: 80,
            borderRadius: 40,
            marginBottom: 10,
          }}
        />
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Athar Changezi</Text>
        <Text style={{ fontSize: 14, color: "#888" }}>Software Engineer</Text>
      </View>

      {/* 🔹 Main Section */}
      <View style={{ paddingVertical: 10 }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "600",
            marginLeft: 20,
            marginBottom: 4,
            color: "#999",
          }}
        >
          Main
        </Text>

        <DrawerItem
          label="Home"
          onPress={() => navigation.navigate("HomeScreen")}
          icon={() => (
            <Image
              source={require("../assets/images/menus.png")}
              style={{ width: 20, height: 20 }}
            />
          )}
        />
        <DrawerItem
          label="Meme Detail"
          onPress={() => navigation.navigate("MemeDetail")}
        />
      </View>

      {/* 🔹 Account Section */}
      <View style={{ paddingVertical: 10 }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "600",
            marginLeft: 20,
            marginBottom: 4,
            color: "#999",
          }}
        >
          Account
        </Text>

        <DrawerItem
          label="Profile"
          onPress={() => navigation.navigate("UserProfile")}
        />
        <DrawerItem
          label="Logout"
          onPress={() => alert("Logout pressed")}
        />
      </View>

      {/* 🔹 Footer */}
      <View
        style={{
          marginTop: "auto",
          borderTopWidth: 1,
          borderTopColor: "#eee",
          padding: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => alert("App version 1.0.0")}
          style={{ alignItems: "center" }}
        >
          <Text style={{ color: "#888", fontSize: 12 }}>Version 1.0.0</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}
