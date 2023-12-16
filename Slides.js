// YourMainComponent.js

// YourMainComponent.js

import React from "react";
import { View } from "react-native";
import ClickableFlashCard from "./ClickableFlashCard";

const Slides = () => {
  const flashCards = [
    {
      question: "America was settled purely for religous freedom",
      answer:
        "False! While New England settlers were attempting to escape from the Church of England, they oppressed and all non-Protestants in the New World. ",
    },
    {
      question:
        'A "Self-Made" women and her upward mobility have no difference to that of a man',
      answer:
        "False! For many years, and perhaps still, the a women's potential for upward mobility was dependent on realtionships or appeal to men; whether that be marriage or beauty.",
    },
    {
      question: "Pochahontas did NOT marry John Smith",
      answer:
        "True! While it is supported the John Smith and Pochahontas did ecounter one another, Pochahontas was captured by Captain Samuel Argall, taken to JamesTown, and converted to Christianity. She later married John Rolfe, a colonist.",
    },
    // Add more flashcards as needed
  ];

  return (
    <View>
      {flashCards.map((card, index) => (
        <ClickableFlashCard
          key={index}
          question={card.question}
          answer={card.answer}
        />
      ))}
    </View>
  );
};

export default Slides;
