import { useEffect, useState } from "react";
import {
    Dimensions,
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import CommentItem from "../components/CommentItem";

function MemeDetail() {
  const [comment, setComment] = useState("");

  const meme = {
    id: "2",
    title: "Distracted Boyfriend",
    imageLink:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRAog7zdocxTFwahWDIGYNDmsiMprZ0Am8_Q&s",
    link: "",
    likes: "1231",
    loves: "232",
    dislikes: "23",
    reaction: 1,
    account: {
      id: "123124",
      userName: "ShantuLover",
      profileImage:
        "https://i.pinimg.com/736x/4e/0d/7e/4e0d7e9b5e0f542fd4f68715554f1c98.jpg",
    },
    comments: [
      {
        id: "c1",
        comment: "This is hilarious! 😂",
        user: {
          userId: "u1",
          userName: "FunnyGuy",
          profileImage: "https://i.pravatar.cc/150?img=1",
        },
        likes: 12,
        liked: false,
      },
      {
        id: "c2",
        comment: "This is hilarious! 😂",
        user: {
          userId: "u1",
          userName: "FunnyGuy",
          profileImage: "https://i.pravatar.cc/150?img=1",
        },
        likes: 12,
        liked: false,
      },
      {
        id: "c3",
        comment: "This is hilarious! 😂",
        user: {
          userId: "u1",
          userName: "FunnyGuy",
          profileImage: "https://i.pravatar.cc/150?img=1",
        },
        likes: 12,
        liked: false,
      },
      {
        id: "c4",
        comment: "This is hilarious! 😂",
        user: {
          userId: "u1",
          userName: "FunnyGuy",
          profileImage: "https://i.pravatar.cc/150?img=1",
        },
        likes: 12,
        liked: false,
      },
      {
        id: "c5",
        comment: "This is hilarious! 😂",
        user: {
          userId: "u1",
          userName: "FunnyGuy",
          profileImage: "https://i.pravatar.cc/150?img=1",
        },
        likes: 12,
        liked: false,
      },
    ],
  };

  const imageLink =
    "https://i.pinimg.com/736x/4e/0d/7e/4e0d7e9b5e0f542fd4f68715554f1c98.jpg";
  const [imageHeight, setImageHeight] = useState(200); // fallback height
  const screenWidth = Dimensions.get("window").width;
  const horizontalPadding = 16 * 2;
  const containerWidth = screenWidth - horizontalPadding;

  useEffect(() => {
    if (imageLink) {
      Image.getSize(imageLink, (width, height) => {
        const scaleFactor = containerWidth / width;
        const imageHeight = height * scaleFactor;
        setImageHeight(imageHeight);
      });
    }
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ paddingVertical: 5, paddingHorizontal: 12 }}>
          <View style={{ flexDirection: "row", paddingVertical: 12 }}>
            <Image
              style={{
                width: 25,
                height: 25,
                borderRadius: 12,
                resizeMode: "contain",
              }}
              source={require("../assets/images/user.png")}
            />
            <Text
              style={{
                fontFamily: "poppins_medium",
                fontSize: 14,
                marginHorizontal: 12,
              }}
            >
              User Name
            </Text>
          </View>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{
              fontFamily: "poppins_medium",
              fontSize: 22,
            }}
          >
            Meme Detail Screen
          </Text>
        </View>
        <View
          style={{
            height: imageHeight,
            width: "100%",
          }}
        >
          <Image
            source={{
              uri: "https://i.pinimg.com/736x/4e/0d/7e/4e0d7e9b5e0f542fd4f68715554f1c98.jpg",
            }}
            style={{ width: "100%", height: imageHeight }}
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
            <Text
              style={{
                fontFamily: "poppins_regular",
                fontSize: 16,
                marginHorizontal:5
              }}
            >
              2K
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionsContainer}>
            <Image
              source={require("../assets/images/like.png")}
              style={[
                styles.iconStyle,
                { tintColor: meme.reaction === 1 ? "red" : "black" },
              ]}
            />
            <Text
              style={{
                fontFamily: "poppins_regular",
                fontSize: 16,
                marginHorizontal:5
              }}
            >
              2K
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionsContainer}>
            <Image
              source={require("../assets/images/dont_like.png")}
              style={[
                styles.iconStyle,
                { tintColor: meme.reaction === 2 ? "red" : "black" },
              ]}
            />
            <Text
              style={{
                fontFamily: "poppins_regular",
                fontSize: 16,
                marginHorizontal:5
              }}
            >
              2K
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionsContainer}>
            <Image
              source={require("../assets/images/share.png")}
              style={styles.iconStyle}
            />
          </TouchableOpacity>

        </View>

        <View>
          <Text
            style={{
              fontFamily: "poppins_medium",
              fontSize: 16,
              marginHorizontal: 16,
              marginVertical: 8,
            }}
          >
            Comments
          </Text>

          <View
            style={{
              paddingHorizontal: 16,
              paddingVertical: 8,
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderColor: "#ccc",
              flexDirection: "row",
            }}
          >
            <TextInput
              value={comment}
              onChangeText={setComment}
              placeholder="Add a comment..."
              multiline
              style={{
                borderWidth: 1,
                borderColor: "#ccc",
                borderRadius: 25,
                width: "90%",
                paddingHorizontal: 15,
                fontFamily: "poppins_regular",
              }}
            />

            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "10%",
              }}
            >
              <Image
                source={require("../assets/images/add.png")}
                style={{
                  width: 25,
                  height: 25,
                }}
              />
            </TouchableOpacity>
          </View>

          <FlatList
            data={meme.comments}
            renderItem={({ item }) => <CommentItem comment={item} />}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconStyle: {
    width: 25,
    height: 25,
    margin: 5,
  },
  actionsContainer: {
    alignItems: "center",
    flexDirection:'row',
    justifyContent: "center",
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 26,
    paddingVertical: 14,
    elevation: 5,
    backgroundColor: "#fff",
  },
});

export default MemeDetail;
