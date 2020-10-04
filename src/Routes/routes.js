import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';


import {createSwitchNavigator} from 'react-navigation'
import React from 'react';
import Profile from '../screens/Profile/Profile';
import Activity from '../screens/Activity/Activity';
import SearchComp from '../screens/Search/SearchComp';
import Home from '../screens/Home/Home';
import User from '../components/User';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login and Registeration/Login';
import Registeration from '../screens/Login and Registeration/Registeration';
import * as firebase from 'firebase';
import LoadingScreen from '../screens/Login and Registeration/LoadingScreen';


var firebaseConfig = {
    apiKey: "AIzaSyAc1B-LPjyFXvroVzHB2J4PyC3xnnWXhkE",
    authDomain: "instagram-rn-clone.firebaseapp.com",
    databaseURL: "https://instagram-rn-clone.firebaseio.com",
    projectId: "instagram-rn-clone",
    storageBucket: "instagram-rn-clone.appspot.com",
    messagingSenderId: "866454095418",
    appId: "1:866454095418:web:1518f389e4125bb4629703"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function route(){
    return(
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
            <Stack.Screen name="Registeration" component={Registeration}/>
            <Stack.Screen name="Home" component={TabStack} options={{headerShown:false}}/>
        </Stack.Navigator>
    </NavigationContainer>
    )
}




const TabStack = () =>{
    return(
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
    )
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
