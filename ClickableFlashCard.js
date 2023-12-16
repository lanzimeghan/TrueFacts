// FlashCard.js

import React, { useState } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const ClickableFlashCard = ({ question, answer }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handlePress = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    setIsFlipped(false);
    // Add logic for moving to the next card if needed
  };

  const handlePrev = () => {
    setIsFlipped(false);
    // Add logic for moving to the previous card if needed
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.card}>
          <Text style={styles.text}>{isFlipped ? answer : question}</Text>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.buttonContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20,
  },
  card: {
    width: 210,
    height: 150,
    backgroundColor: "white",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
  },
  text: {
    color: "black",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  button: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: "white",
  },
});

export default ClickableFlashCard;
