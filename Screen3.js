// Screen3.js
import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Button,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import Slides from "./Slides";

const Screen3 = () => {
  const navigation = useNavigation();

  const goToScreen1 = () => {
    navigation.navigate("Screen1");
  };

  const goToScreen2 = () => {
    navigation.navigate("Screen2");
  };
  const [fontsLoaded] = useFonts({
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
    // Add other font weights and styles as needed
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.Title}>Study</Text>

        <Slides></Slides>
        <View style={styles.navFooter}>
          <Pressable onPress={goToScreen1} style={styles.home}>
            <Text style={styles.buttonText}>Home</Text>
          </Pressable>
          <Pressable onPress={goToScreen2} style={styles.read}>
            <Text style={styles.buttonText}>Read</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
  },
  Title: {
    fontFamily: "Lato-Bold",
    fontSize: 25,
    color: "orange",
    textAlign: "center",
    padding: 20,
  },
  navFooter: {
    flexDirection: "row",
    margin: 10,
  },
  read: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    backgroundColor: "black",
    margin: 2,
  },
  home: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    backgroundColor: "black",
    margin: 2,
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    fontFamily: "Lato-Bold",
  },
});

export default Screen3;
