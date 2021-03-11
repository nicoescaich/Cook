import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'native-base';
import Home from './components/Home';
import Meal from './components/Meal';
import MealAdd from './components/MealAdd';
import DescriptionMeal from './components/DescriptionMeal';


const App = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  const HomeScreens = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Meal" component={Meal} />
        <Stack.Screen name="DescriptionMeal" component={DescriptionMeal} />

      </Stack.Navigator>
    )
  }
  const SettingsScreens = () =>{
    return (
      <Stack.Navigator>
        <Stack.Screen name="Meal" component={Meal} />
        <Stack.Screen name="MealAdd" component={MealAdd} />
        <Stack.Screen name="DescriptionMeal" component={DescriptionMeal} />
      </Stack.Navigator>
    )

  }
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={HomeScreens}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" type='Ionicons' />
            ),
          }} />
        <Tab.Screen
          name="Settings"
          component={SettingsScreens}  
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <Icon name="settings" type='Ionicons' />
            ),
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;


