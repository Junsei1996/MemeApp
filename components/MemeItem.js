import { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

function MemeItem({ meme, on_click }) {
  const [imageHeight, setImageHeight] = useState(200); // fallback height
  const screenWidth = Dimensions.get("window").width;
  const horizontalPadding = 16 * 2;
  const containerWidth = screenWidth - horizontalPadding;

  useEffect(() => {
    if (meme.imageLink) {
      Image.getSize(meme.imageLink, (width, height) => {
        const scaleFactor = containerWidth / width;
        const imageHeight = height * scaleFactor;
        setImageHeight(imageHeight);
      });
    }
  }, [meme.imageLink]);

  return (
    <TouchableOpacity style={styles.container} onPress={on_click}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleStyle}>{meme.title}</Text>
        <View style={styles.userImageContainer}>
          <Image
            source={
              meme.account.profileImage
                ? { uri: meme.account.profileImage }
                : require("../assets/images/user.png")
            }
            style={styles.userImageStyle}
          />
        </View>
      </View>

      <View>
        <Image
          source={{
            uri: meme.imageLink,
          }}
          style={{
            width: containerWidth, // full width
            height: imageHeight,
            resizeMode: "contain", // show full image without cropping
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </View>

      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.actionsContainer}>
          <Image
            source={
              meme.reaction === 0
                ? require("../assets/images/heart_filled.png")
                : require("../assets/images/heart.png")
            }
            style={[
              styles.iconStyle,
              { tintColor: meme.reaction === 0 ? "red" : "black" },
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../assets/images/like.png")}
            style={[
              styles.iconStyle,
              { tintColor: meme.reaction === 1 ? "red" : "black" },
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../assets/images/dont_like.png")}
            style={[
              styles.iconStyle,
              { tintColor: meme.reaction === 2 ? "red" : "black" },
            ]}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={require("../assets/images/share.png")}
            style={styles.iconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../assets/images/chat.png")}
            style={styles.iconStyle}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 5,
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 16,
  },
  titleContainer: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleStyle: {
    fontFamily: "poppins_semibold",
    fontSize: 18,
  },
  userImageContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: "gray",
    borderWidth: 1,
    overflow: "hidden",
  },
  userImageStyle: {
    width: 30,
    height: 30,
  },
  imageStyle: {
    width: "100%",
    height: 300,
  },
  iconStyle: {
    width: 25,
    height: 25,
    marginEnd: 10,
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
    paddingHorizontal: 16,
    paddingBottom: 14,
  },
  actionsContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MemeItem;
