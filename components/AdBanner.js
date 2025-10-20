import { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import AdDialog from "./AdDialog";

function AdBanner({ onPress }) {
  const [showDialog, setShowDialog] = useState(false);

  const handlePress = () => {
    setShowDialog(true);
  };
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={handlePress}>
        <Image
          source={{
            uri: "https://thumbs.dreamstime.com/b/advertisement-banner-design-template-modern-yellow-black-colorful-advertisement-banner-design-template-modern-yellow-black-174888659.jpg",
          }}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
        />
      </TouchableOpacity>

      <AdDialog visible={showDialog} onClose={() => setShowDialog(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 80,
  },
});

export default AdBanner;
