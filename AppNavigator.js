// AppNavigator.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Screen1 from "./Screen1"; // Import your screen components
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Screen1" component={Screen1} />
    <Stack.Screen name="Screen2" component={Screen2} />
    <Stack.Screen name="Screen3" component={Screen3} />
    {/* Add more screens as needed */}
  </Stack.Navigator>
);

export default AppNavigator;
