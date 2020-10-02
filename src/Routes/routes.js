import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';


import React from 'react';
import Profile from '../screens/Profile/Profile';
import Activity from '../screens/Activity/Activity';
import SearchComp from '../screens/Search/SearchComp';
import Home from '../screens/Home/Home';
import User from '../components/User';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function routes() {
    return (
        <NavigationContainer  >
            <Tab.Navigator 
                tabBarOptions={{
                    showLabel:false
                }}
            >
                <Tab.Screen name="Home" component={HomeStack}
                    options={{   
                        tabBarIcon: ({focused}) => (
                            <Icon name={focused ? name = "home" :"home-outline" } color={"black"} size={28}  />
                        ),
                     
                    }}
                    
                    />
                <Tab.Screen name="Search" component={SearchComp} 
                    options={{
                        tabBarIcon: ({focused}) => (
                            <Icon name={focused ? name = "md-search" : "md-search-outline"} color={"black"} size={28} />
                        ),
                    }}
                   />
                <Tab.Screen name="Activity" component={Activity} 
                    options={{
                        tabBarIcon: ({focused}) => (
                            <Icon name={focused ? name = "heart" : "heart-outline"} color={"black"} size={28} />
                        ),
                    }}
                    />
                <Tab.Screen name="Profile" component={Profile} 
                    options={{
                        tabBarIcon: ({focused}) => (
                            <Icon name={focused ? name = "person-circle" : "person-circle-outline"} color={"black"} size={28} />
                        ),
                    }} 
                   />
            </Tab.Navigator>
        </NavigationContainer>
    );
}


const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name="User" component={User}
      />
       
      
    </Stack.Navigator>
  );
};

