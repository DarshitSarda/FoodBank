import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen'
import EditProvider from './EditProvider';

const Tab= createBottomTabNavigator();

const ProvideFirst = () => {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
      
              if (route.name === 'Add') {
                iconName = focused
                  ? 'home'
                  : 'home';
              } 
                else if (route.name === 'Edit') {
                    iconName = focused ? 'home' : 'home';}
      
              // You can return any component that you like here!
              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#eb1c15',
            tabBarInactiveTintColor: 'gray',
            headerShown:false,
          })}>
            
            <Tab.Screen name="Add" component={HomeScreen}/>
            <Tab.Screen name="Edit" component={EditProvider}/>
            
        </Tab.Navigator>
  )
}

export default ProvideFirst

const styles = StyleSheet.create({})