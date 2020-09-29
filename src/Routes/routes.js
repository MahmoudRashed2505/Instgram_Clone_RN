import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Profile from '../screens/Profile/Profile';
import Activity from '../screens/Activity/Activity';
import SearchComp from '../screens/Search/SearchComp';

const Tab = createBottomTabNavigator();

export default function routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Search" component={SearchComp} />
        <Tab.Screen name="Activity" component={Activity} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
