import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WishList from '../Pages/WishList';
import Items from '../Pages/Items';
import AddItems from '../Pages/AddItems';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      // @ts-ignore
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: 'grey',
      }}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: 60,
          backgroundColor: 'rgba(34,36,40,1)',
          borderTopWidth: 0,
          paddingBottom: 10,
        },
      })}
    >
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="plus-circle" color={color} size={size} /> // Example icon: plus-circle
          ),
        }}
        name="AddItems"
        component={AddItems}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="list" color={color} size={size} /> // Example icon: list
          ),
        }}
        name="Items"
        component={Items}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="heart" color={color} size={size} /> // Example icon: heart
          ),
        }}
        name="WishList"
        component={WishList}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
