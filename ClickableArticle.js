// ClickableArticle.js

import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ClickableArticle = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handlePress = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {isExpanded && <Text style={styles.content}>{content}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "lightgray",
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default ClickableArticle;
