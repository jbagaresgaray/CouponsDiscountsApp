import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "./Screens/Home";
import WelcomeScreen from "./Screens/Welcome";
import OnboardingScreen from "./Screens/Onboarding";
import LoginScreen from "./Screens/Login";
import OfferScreen from "./Screens/Offer";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerBackTitle: "",
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Offer" component={OfferScreen} />
    </Stack.Navigator>
  );
};

export default Navigator;
