import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ActivityIndicator, View } from 'react-native';
import { useFonts } from 'expo-font';
import StartScreen from './ChatMateApp/screens/StartScreen'; //path to StartScreen
import SignIn from './ChatMateApp/screens/SignIn'; //path to SignIn screen
import SignUp from './ChatMateApp/screens/SignUp'; //path to SignUp
import Home from  './ChatMateApp/screens/Home';//path to homepage

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Regular': require('./ChatMateApp/assets/fonts/Inter-Regular.otf'),
    'Inter-Bold': require('./ChatMateApp/assets/fonts/Inter-Bold.otf'),
    'Roboto-Regular': require('./ChatMateApp/assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./ChatMateApp/assets/fonts/Roboto-Bold.ttf'),
    'Poppins-Regular':  require('./ChatMateApp/assets/fonts/Poppins-Regular.ttf')
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
        <ActivityIndicator size="large" color="#6CFF9A" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartScreen" screenOptions={{
          headerShown: false, // Hide the header for all screens
        }}>
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
