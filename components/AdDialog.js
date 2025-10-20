import { Ionicons } from "@expo/vector-icons";
import { Video } from "expo-av";
import * as Sharing from "expo-sharing";
import { useState } from "react";
import {
    Dimensions,
    Image,
    Modal,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";

const { width } = Dimensions.get("window");

function AdDialog({ visible, onClose }){

  const [ad] = useState({
    type: "video", // "image" or "video"
    title: "Super Sale – 50% OFF!",
    imageUrl: "https://via.placeholder.com/300x200.png?text=Ad+Image",
    videoUrl: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  });

  const handleShare = async () => {
    try {
      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(ad.type === "image" ? ad.imageUrl : ad.videoUrl);
      } else {
        alert("Sharing is not available on this device.");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleSave = () => {
    alert("Save functionality can be added later.");
  };

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.card}>
          {/* Close button */}
          <Pressable style={styles.closeBtn} onPress={onClose}>
            <Ionicons name="close" size={22} color="#333" />
          </Pressable>

          <Text style={styles.title}>{ad.title}</Text>

          {/* Ad media */}
          {ad.type === "image" ? (
            <Image
              source={{ uri: ad.imageUrl }}
              style={styles.media}
              resizeMode="cover"
            />
          ) : (
            <Video
              source={{ uri: ad.videoUrl }}
              style={styles.media}
              resizeMode="cover"
              shouldPlay
              isLooping
              useNativeControls
            />
          )}

          {/* Action buttons */}
          <View style={styles.buttonRow}>
            <Pressable style={[styles.btn, styles.shareBtn]} onPress={handleShare}>
              <Ionicons name="share-social-outline" size={18} color="#fff" />
              <Text style={styles.btnText}>Share</Text>
            </Pressable>

            <Pressable style={[styles.btn, styles.saveBtn]} onPress={handleSave}>
              <Ionicons name="download-outline" size={18} color="#fff" />
              <Text style={styles.btnText}>Save</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );

}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: width * 0.85,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    position: "relative",
    alignItems: "center",
  },
  closeBtn: {
    position: "absolute",
    top: 12,
    right: 12,
    padding: 6,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
  },
  media: {
    width: "100%",
    height: 220,
    borderRadius: 12,
    backgroundColor: "#eee",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 16,
  },
  btn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  shareBtn: {
    backgroundColor: "#007bff",
  },
  saveBtn: {
    backgroundColor: "#28a745",
  },
  btnText: {
    color: "#fff",
    fontWeight: "600",
    marginLeft: 6,
  },
});

export default AdDialog;