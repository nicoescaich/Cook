import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'native-base';
import Home from './components/Home';
import Meal from './components/Meal';


function HomeScreen() {
  return (
    <View>
      <Home />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View>
      <Meal />
    </View>
  );
}

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
       initialRouteName="Home"
       tabBarOptions={{
         activeTintColor: '#e91e63',
       }}>
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Icon name="home"type='Ionicons' />
            ),
          }} />
        <Tab.Screen 
          name="Settings" 
            component={SettingsScreen}
            options={{
              tabBarLabel: 'Settings',
              tabBarIcon: ({ color, size }) => (
                <Icon name="settings"type='Ionicons' />
              ),
            }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


