import { FlatList, View } from "react-native";
import MemeItem from "../components/MemeItem";

function HomeScreen() {    

const memesList = [
    {
      id: "1",
      title: "Khan Sahab",
      imageLink:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhPmIpwe-OtE5ZLt5WnEbgXsJgMnA-Oecb-XbJaw6y3cCvXUV1foXRj3vFjfpUN3I5KHNxnL2OJgr_IMdV-qaj7IXbXWsX1FoHhhokSxfOjhmczrO7TulgdWaZllt_43UZqfsac8NmnfxZm/s574/1655954206849921028.png",
      link: "",
      likes: "120",
      loves: "50",
      dislikes: "200",
      reaction:0,
      account: {
        id: "1234",
        userName: "DummyBoy123",
        profileImage:
          "https://i.pinimg.com/736x/4e/0d/7e/4e0d7e9b5e0f542fd4f68715554f1c98.jpg",
      },
    },
    {
      id: "2",
      title: "Distracted Boyfriend",
      imageLink:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRAog7zdocxTFwahWDIGYNDmsiMprZ0Am8_Q&s",
      link: "",
      likes: "1231",
      loves: "232",
      dislikes: "23",
      reaction:1,
      account: {
        id: "123124",
        userName: "ShantuLover",
        profileImage:
          "https://i.pinimg.com/736x/4e/0d/7e/4e0d7e9b5e0f542fd4f68715554f1c98.jpg",
      },
    },
    {
      id: "3",
      title: "Copy Cat",
      imageLink:
        "https://i.pinimg.com/originals/5a/53/60/5a5360b61df9cd2ff6345c999b8413df.jpg",
      link: "",
      likes: "123",
      loves: "23",
      dislikes: "213",
      reaction:0,
      account: {
        id: "4321",
        userName: "Shantu",
        profileImage:
          "https://i.pinimg.com/736x/4e/0d/7e/4e0d7e9b5e0f542fd4f68715554f1c98.jpg",
      },
    },
  ];

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <FlatList
        data={memesList}
        renderItem={({ item }) => <MemeItem meme={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );

 }
export default HomeScreen;  