// App.js
import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  ScrollView
} from 'react-native';

import { AsyncStorage } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Amplify from 'aws-amplify'
import config from './src/aws-exports'
Amplify.configure(config)
 
// imports from Amplify library
import { withAuthenticator } from 'aws-amplify-react-native'
import { API, graphqlOperation } from 'aws-amplify'

import LessonsSchedule from './src/components/Screens/LessonsSchedule/index.js'
import CallsSchedule from './src/components/Screens/CallsSchedule';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function School() {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Text> School </Text>
    </View>
  )
}

const Tab = createBottomTabNavigator();


function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
			tabBarOptions={{
				activeTintColor: "#39f",
				inactiveTintColor: "gray",
				labelStyle: {
					fontSize: 14,
				},
			}}
		>
    {/* <Tab.Navigator> */}
      <Tab.Screen name="Расписание уроков" component={LessonsSchedule} />
      <Tab.Screen name="Расписание звонков" component={CallsSchedule} />
    </Tab.Navigator>
  </NavigationContainer>
  )
}

export default App;

