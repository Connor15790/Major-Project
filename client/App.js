import * as React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/Home';
import Auth from './components/Auth';
import Casualties from './components/Casualties';
import Casualties2 from './components/Casualties2';
import Casualties3 from './components/Casualties3';
import Records from './components/Records';
import Register from './components/Register';
import Discarded from './components/Discarded';
import DisplayModal from './components/common/DisplayModal';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Home" 
                component={Home}
                options={{
                    headerShown: false
                }} 
            />
            <Stack.Screen
                name="Auth" 
                component={Auth}
                options={{
                    headerShown: false
                }} 
            />
            <Stack.Screen
                name="Register" 
                component={Register}
                options={{
                    headerShown: false
                }} 
            />
            <Stack.Screen
                name="Casualties" 
                component={Casualties}
                options={{
                    headerShown: false
                }} 
            />
            <Stack.Screen
                name="Casualties2" 
                component={Casualties2}
                options={{
                    headerShown: false
                }} 
            />
            <Stack.Screen
                name="Casualties3" 
                component={Casualties3}
                options={{
                    headerShown: false
                }} 
            />
            <Stack.Screen
                name="Records" 
                component={Records}
                options={{
                    headerShown: false
                }} 
            />
            <Stack.Screen
                name="DisplayModal" 
                component={DisplayModal}
                options={{
                    headerShown: false
                }} 
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

