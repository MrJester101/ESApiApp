import React from "react";
import {
  ImageBackground,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;
const ProfileDetail = ({navigation}) => {
  return (
    <ScrollView
      style={{
        backgroundColor: "#FFF",
      }}
    >
      <ImageBackground
        source={{ uri: "https://bitbucket.org/MInte-grace/social_meet_up/raw/efa701b487b69ee8b71e0bd5bb526d7c10f8806e/src/screens/assets/photo2.png" }}
        style={{
          height: 0.5 * h,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            marginTop: 60,
            alignItems: "center",
          }}
        >
            <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Image source={{ uri: "https://bitbucket.org/MInte-grace/social_meet_up/raw/efa701b487b69ee8b71e0bd5bb526d7c10f8806e/src/screens/assets/icons-back-light.png" }} />
          </TouchableOpacity>
          <Image source={{ uri: "https://bitbucket.org/MInte-grace/social_meet_up/raw/efa701b487b69ee8b71e0bd5bb526d7c10f8806e/src/screens/assets/filter.png" }} />
        </View>
        <View
          style={{
            alignSelf: "center",
            alignItems: "center",
            marginTop: 0.17 * h,
          }}
        >
          <Image
            source={{ uri: "https://bitbucket.org/MInte-grace/social_meet_up/raw/efa701b487b69ee8b71e0bd5bb526d7c10f8806e/src/screens/assets/avtar.png" }}
            style={{ width: 50, height: 50 }}
          />
          <Text
            style={{
              fontSize: 26,
              fontFamily: "Bold",
              color: "#FFF",
              marginTop: 20,
            }}
          >
            Alexio Morales
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Regular",
              color: "#FFF",
            }}
          >
            128k followers
          </Text>
        </View>
      </ImageBackground>
      <View
        style={{
          backgroundColor: "#FFF",
          marginTop: -50,
          borderRadius: 50,
          flex: 1,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#000",
            fontSize: 18,
            fontFamily: "Bold",
            marginTop: 30,
          }}
        >
          Photos & Videos
        </Text>
        <Text
          style={{
            color: "#998FA2",
            fontSize: 18,
            fontFamily: "Regular",
          }}
        >
          269 shots
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginTop:20
          }}
        >
          <Image
            source={{ uri: "https://bitbucket.org/MInte-grace/social_meet_up/raw/efa701b487b69ee8b71e0bd5bb526d7c10f8806e/src/screens/assets/photo3.png" }}
            style={{
              borderTopLeftRadius: 40,
              marginRight: 16,
              borderBottomLeftRadius: 40,
            }}
          />
          <View>
            <Image
              source={{ uri: "https://bitbucket.org/MInte-grace/social_meet_up/raw/efa701b487b69ee8b71e0bd5bb526d7c10f8806e/src/screens/assets/photo5.png" }}
              style={{ borderTopRightRadius: 40 }}
            />
            <Image
              source={{ uri: "https://bitbucket.org/MInte-grace/social_meet_up/raw/efa701b487b69ee8b71e0bd5bb526d7c10f8806e/src/screens/assets/photo6.png" }}
              style={{ marginTop: 16, borderBottomRightRadius: 40 }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileDetail;

const styles = StyleSheet.create({});
