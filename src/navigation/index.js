import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import DestinationScreen from '../screens/DestinationScreen';
import AllDestinations from '../components/AllDestinations';
import ContactForm from '../components/ContactForm'; 
import LoginPage from '../screens/LoginPage'; 
import SignupPage from '../screens/SignupPage'; 
import UserProfilePage from '../screens/UserProfilePage'; 
const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Destination" component={DestinationScreen} />
        <Stack.Screen name="AllDestinations" component={AllDestinations} />
        <Stack.Screen name="ContactForm" component={ContactForm} /> 
        <Stack.Screen name="LoginPage" component={LoginPage} /> 
        <Stack.Screen name="SignupPage" component={SignupPage} /> 
        <Stack.Screen name="UserProfile" component={UserProfilePage} /> 
      </Stack.Navigator>      
      
    </NavigationContainer>
  );
}

export default AppNavigation;
