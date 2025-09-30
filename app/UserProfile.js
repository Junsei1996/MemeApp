import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

function UserProfile() {
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* First View with profile pic and name */}
        <View
          style={{
            height: 250,
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <View style={{ width: 100, height: 100, borderRadius: 50 }}>
            <Image
              source={{
                uri: "https://i.pinimg.com/736x/4e/0d/7e/4e0d7e9b5e0f542fd4f68715554f1c98.jpg",
              }}
              style={{ width: 100, height: 100, borderRadius: 50 }}
            />
          </View>
          <Text style={{ fontFamily: "poppins_medium", fontSize: 22 }}>
            UserName
          </Text>
        </View>

        <View style={styles.mid_container}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text
              style={{
                fontFamily: "poppins_regular",
                fontSize: 16,
                textAlign: "center",
              }}
            >
              12
            </Text>
            <Text style={{ fontFamily: "poppins_medium", fontSize: 18 }}>
              Posts
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              borderLeftWidth: 1,
              borderRightWidth: 1,
              borderColor: "#ccc",
            }}
          >
            <Text
              style={{
                fontFamily: "poppins_medium",
                fontSize: 16,
                textAlign: "center",
              }}
            >
              23
            </Text>
            <Text style={{ fontFamily: "poppins_medium", fontSize: 18 }}>
              Following
            </Text>
          </View>

          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text
              style={{
                fontFamily: "poppins_medium",
                fontSize: 16,
                textAlign: "center",
              }}
            >
              200K
            </Text>
            <Text style={{ fontFamily: "poppins_medium", fontSize: 18 }}>
              Followers
            </Text>
          </View>
        </View>

        <View>
          <TouchableOpacity
            style={{
              padding: 16,
              backgroundColor: "#ccc",
              marginTop: 10,
              marginHorizontal: 16,
              borderRadius: 8,
              flexDirection: "row",
                justifyContent: "space-between",    
                alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "poppins_medium",
                fontSize: 16,
                color: "#000",
              }}
            >
              Posts
            </Text>
            <Image style={{ width: 40, height: 20, resizeMode: "contain" }}
            source={require("../assets/images/right_arrow.png")} />
          </TouchableOpacity>


<TouchableOpacity
            style={{
              padding: 16,
              backgroundColor: "#ccc",
              marginTop: 10,
              marginHorizontal: 16,
              borderRadius: 8,
              flexDirection: "row",
                justifyContent: "space-between",    
                alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "poppins_medium",
                fontSize: 16,
                color: "#000",
              }}
            >
              Logout
            </Text>
            <Image style={{ width: 40, height: 20, resizeMode: "contain" }}
            source={require("../assets/images/right_arrow.png")} />
          </TouchableOpacity>

        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  mid_container: {
    padding: 16,
    elevation: 5,
    backgroundColor: "#fff",
    margin: 16,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-evenly",
    flex: 1,
  },
});
export default UserProfile;
