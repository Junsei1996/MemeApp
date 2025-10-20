import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function CommentItem({ comment }) {
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderColor: "#ccc",
        paddingBottom: 5,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          marginVertical: 10,
        }}
      >
        <View
          style={{
            width: 60,
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 20,
            }}
          >
            <Image
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                overflow: "hidden",
              }}
              source={{ uri: comment.user.profileImage }}
            />
          </View>
        </View>
        <View style={{ width: "90%" }}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{
              fontFamily: "poppins_medium",
              fontSize: 14,
              marginBottom: 3,
            }}
          >
            UserName
          </Text>

          <Text
            style={{
              fontFamily: "poppins_regular",
              fontSize: 14,
              marginBottom: 3,
            }}
          >
            Comment: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>
      </View>

      <View style={styles.iconsContainer}>
        <TouchableOpacity
          style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
        >
          <Image
            source={require("../assets/images/up_arrow.png")}
            style={styles.iconStyle}
          />
          <Text
            style={{
              fontFamily: "poppins_regular",
              fontSize: 14,
            }}
          >
            1234
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
        >
          <Image
            source={require("../assets/images/down_arrow.png")}
            style={styles.iconStyle}
          />
          <Text
            style={{
              fontFamily: "poppins_regular",
              fontSize: 14,
            }}
          >
            1234
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
        >
          <Image
            source={require("../assets/images/error.png")}
            style={styles.iconStyle}
          />
        </TouchableOpacity>
      </View>
    </View>
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
    width: 20,
    height: 20,
    marginEnd: 10,
  },
  iconsContainer: {
    flexDirection: "row",
    marginTop: 8,
    paddingHorizontal: 16,
    paddingBottom: 14,
  },
  actionsContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
export default CommentItem;
