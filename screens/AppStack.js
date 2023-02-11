import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AdminLogin from "./AdminLogin";
import ProviderLogin from "./ProviderLogin";
import CustomerLogin from "./CustomerLogin";
import AdminRegister from "./AdminRegsiter";
import CustomerRegister from "./CustomerRegister";
import ProviderRegister from "./ProviderRegister";
import HomeScreen from "./HomeScreen";
import FirstScreen from "./FirstScreen";
const Stack = createNativeStackNavigator();
const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="First" component={FirstScreen} />
        <Stack.Screen name="ALogin" component={AdminLogin} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PLogin" component={ProviderLogin} />
        <Stack.Screen name="CLogin" component={CustomerLogin} />
        <Stack.Screen name="Areg" component={AdminRegister} />
        <Stack.Screen name="Creg" component={CustomerRegister} />
        <Stack.Screen name="Preg" component={ProviderRegister} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;