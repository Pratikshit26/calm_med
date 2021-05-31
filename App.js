import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import Splashscreen from "./components/splashscreen";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [splash, setSplash] = React.useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 2000);
  });
  return (
    <View style={styles.container}>
      {splash === true ? <Splashscreen /> : <Text>fsdfds</Text>}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
