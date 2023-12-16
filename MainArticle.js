// YourMainComponent.js

import React from "react";
import { View } from "react-native";
import ClickableArticle from "./ClickableArticle"; // Import the reusable component

const MainArticle = () => {
  return (
    <View>
      {/* Use the ClickableArticle component with title and content */}
      <ClickableArticle
        title="The First Love Story of The New World"
        content="Pocahontas, a Native American woman, is often mythologized for her connection to the English settlers at Jamestown. The popular narrative includes her saving Captain John Smith's life and a romantic relationship with him. However, historical evidence challenges this myth. Pocahontas was likely a political captive, and her supposed rescue of Smith is contested. She married John Rolfe, and their union had diplomatic motivations, contributing to a brief period of peace between the Powhatan Confederacy and the English settlers. The Pocahontas myth reflects the complexities of early interactions between Native Americans and European colonizers."
      />
    </View>
  );
};

export default MainArticle;
