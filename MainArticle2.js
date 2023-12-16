import React from "react";
import { View } from "react-native";
import ClickableArticle from "./ClickableArticle"; // Import the reusable component

const MainArticle2 = () => {
  return (
    <View>
      {/* Use the ClickableArticle component with title and content */}
      <ClickableArticle
        title="Becoming Oppressors"
        content="English settlers in the New World sought religious freedom but often imposed oppression on non-Protestants. Despite leaving England to escape religious persecution, some colonists, particularly Puritans, established their own strict religious practices and persecuted dissenters, such as Quakers and Catholics, reinforcing a cycle of intolerance in the pursuit of their vision of a religiously homogeneous society."
      />
    </View>
  );
};

export default MainArticle2;
