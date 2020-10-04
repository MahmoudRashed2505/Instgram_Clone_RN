import React from 'react';
import 'react-native-gesture-handler';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createStackNavigator} from '@react-navigation/stack';
import * as firebase from 'firebase'
import route from './src/Routes/routes';
import LoadingScreen from './src/screens/Login and Registeration/LoadingScreen'
import Login from './src/screens/Login and Registeration/Login'
import Registeration from './src/screens/Login and Registeration/Registeration'


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


export default createAppContainer(
    
  createSwitchNavigator(
     { 
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack,
  },
  {
      initialRouteName:"Loading"
  }
  )

);

const AuthStack = createStackNavigator({
  Login:Login,
  Register: Registeration
})


const AppStack = createStackNavigator({
  Home:route
})


