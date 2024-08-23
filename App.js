import React from 'react';
import { Provider } from "react-redux";
import { store } from "./State/store";
import AuthenticationScreen from "./Screens/authenticationScreen";
import MainScreen from "./Screens/mainscreen";
import AvatarSelection from "./Screens/avatarSelectionScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProgressScreen from './Screens/progressScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen name="Authentication" component={AuthenticationScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="AvatarSelection" component={AvatarSelection} options={{ headerShown: false }}/>
          <Stack.Screen name="ProgressScreen" component={ProgressScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
