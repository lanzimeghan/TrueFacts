import React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./AppNavigator.js";

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  myText: {
    fontFamily: "Lato-Regular",
    fontSize: 30,
  },
  subtitle: {
    color: "orange",
    fontSize: 15,
    padding: 10,
  },
  button: {
    backgroundColor: "red",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    margin: 10,
  },
});

export default App;
