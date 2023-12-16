import React from "react";
import { View } from "react-native";
import ClickableArticle from "./ClickableArticle"; // Import the reusable component

const MainArticle3 = () => {
  return (
    <View>
      {/* Use the ClickableArticle component with title and content */}
      <ClickableArticle
        title="Rags To Riches"
        content="In American narratives, self-made women diverge from the male version, often focusing on physical appearance and conforming to beauty standards. The Miss America pageant exemplifies culturally accepted practices in female self-making, intertwining economic gain and objectification. Women's upward mobility is depicted as reliant on relationships with men, aligning with a patriarchal notion that emphasizes their role in highlighting male success through conformity to ideals, sometimes framed within marriage."
      />
    </View>
  );
};

export default MainArticle3;
