// Screen2.js
import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MainArticle from "./MainArticle"; // Import the reusable component
import MainArticle2 from "./MainArticle2"; // Import the reusable component
import MainArticle3 from "./MainArticle3"; // Import the reusable component
const Screen2 = () => {
  const navigation = useNavigation();

  const goToScreen1 = () => {
    navigation.navigate("Screen1");
  };

  const goToScreen3 = () => {
    navigation.navigate("Screen3");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.Title}>Read</Text>
        <View style={styles.textContainer}>
          <Text style={styles.subTitle}>
            Here, you can read articles about common myths and stories within
            american culture and history. If you wish to test your knowledge,
            press the study button below!
          </Text>
        </View>
        <MainArticle style={styles.article}></MainArticle>
        <MainArticle2 style={styles.article}></MainArticle2>
        <MainArticle3 style={styles.article}></MainArticle3>

        <View style={styles.navFooter}>
          <Pressable onPress={goToScreen3} style={styles.study}>
            <Text style={styles.buttonText}>Study</Text>
          </Pressable>
          <Pressable onPress={goToScreen1} style={styles.home}>
            <Text style={styles.buttonText}>Home</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -80,
  },
  article: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
  },
  Title: {
    fontFamily: "Lato-Bold",
    fontSize: 30,
    color: "orange",
    textAlign: "center",
    justifyContent: "center",
    paddingTop: 90,
  },
  subTitle: {
    color: "black",
    fontFamily: "Lato-Bold",
    textAlign: "center",
    width: 150,
  },
  textContainer: {
    backgroundColor: "white",
    paddingHorizontal: 40,
    paddingVertical: 50,
    margin: 30,
    borderRadius: 10,
  },
  navFooter: {
    flexDirection: "row",
    margin: 10,
  },
  study: {
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

export default Screen2;
