import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const image = {
  uri: "https://webgradients.com/public/webgradients_png/069%20Purple%20Division.png",
};

const Splashscreen = () => (
  <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
      <Text style={styles.text}>take a deep breath</Text>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  image: {
    width: "100%",
    flex: 100,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
});

export default Splashscreen;
