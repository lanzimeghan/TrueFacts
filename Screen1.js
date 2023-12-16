// Screen1.js
import React from "react";
import { Text, StyleSheet, View, Pressable, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const Screen1 = () => {
  const navigation = useNavigation();

  const goToScreen2 = () => {
    navigation.navigate("Screen2");
  };

  const goToScreen3 = () => {
    navigation.navigate("Screen3");
  };

  const [fontsLoaded] = useFonts({
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    // Add other font weights and styles as needed
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.Title}>TrueFacts</Text>
      <Text style={styles.subTitle}>American History Version</Text>
      <Pressable onPress={goToScreen2} style={styles.read}>
        <Text style={styles.buttonText}>Read</Text>
      </Pressable>
      <Pressable onPress={goToScreen3} style={styles.study}>
        <Text style={styles.buttonText}>Study</Text>
      </Pressable>
    </View>
  );
};

//make sure to reload when you add a new font
//container feature is also important
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -80,
  },
  Title: {
    fontFamily: "Lato-Bold",
    fontSize: 30,
    color: "orange",
    textAlign: "center",
    justifyContent: "center",
    paddingTop: 60,
    padding: 5,
  },
  subTitle: {
    color: "black",
    fontFamily: "Lato-Bold",
    textAlign: "center",
  },
  read: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    backgroundColor: "black",
    margin: 10,
  },
  study: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    backgroundColor: "black",
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    fontFamily: "Lato-Bold",
  },
});

export default Screen1;

/*const [fontsLoaded] = useFonts({
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
    // Add other font weights and styles as needed
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.myText}>TrueFacts</Text>
      <Text style={styles.subtitle}>American History Version</Text>
      <Pressable style={styles.button}>
        <Text>hey</Text>
      </Pressable>

      <Pressable style={styles.button}>
        <Text>hey</Text>
      </Pressable>

      <Pressable style={styles.button}>
        <Text>hey</Text>
      </Pressable>
    </View>
  );
};*/
