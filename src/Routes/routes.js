import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Profile from '../screens/Profile/Profile';
import Activity from '../screens/Activity/Activity';
import SearchComp from '../screens/Search/SearchComp';
import Home from '../screens/Home/Home';
import User from '../components/User';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const AppContext = React.createContext();

export default function routes() {
  return (
    <AppContext.Provider value={('Test', 'TEST')}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="Search" component={SearchComp} />
          <Tab.Screen name="Activity" component={Activity} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
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
      <Stack.Screen name="User">
        {(props)=>(
      <User fullname={props.fullname} profilePic={props.profilePic}/>)}
      </Stack.Screen>
       
      
    </Stack.Navigator>
  );
};
