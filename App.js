import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView, StatusBar} from 'react-native';

import {View, Image, Text} from 'react-native';
import FirstScreen from './Study/FirstScreen';
import Secondscn from './Study/Secondscn';
import PasswordRecov from './Study/PasswordRecov';
import BottomNav from './Study/BottomNav';
import SplashScreen from './Study/SplashScreen';

import AboutScreen from './Study/AboutScreen';

import LogoutScreen from './Study/LogoutScreen';
import SettingScreen from './Study/SettingScreeen';
import HomeScreen from './Study/HomeScreen';
import DrawerPage from './Study/DrawerPage';
import UserData from './Study/UserData';
import Category from './Study/Category';
import DetailCategory from './Study/DetailCategory';
import DetailsUserData from './Study/DetailsUserData';
import UpdateUserProfile from './Study/UpdateUserProfile';
import Dashing from './Study/Dashing';
import LoginOTP from './Study/LoginOTP';
import CallAPI from './Study/CallAPI';
import Notification from './Study/Notification';
import Youtube from './Study/Youtube';
import Taj from './Study/Taj';
const Stack = createNativeStackNavigator();
console.disableYellowBox = true;
const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        overflow: 'hidden',
      }}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
         

          <Stack.Screen
          name="LoginOTP"
          component={LoginOTP}
          options={{headerShown: false}}
        />
        <Stack.Screen
        name="Dashing"
        component={Dashing}
        options={{headerShown: false}}
      />

      <Stack.Screen
      name="Notification"
      component={Notification}
      options={{headerShown: false}}
    />

        
          <Stack.Screen
            name="FirstScreen"
            component={FirstScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Secondscn"
            component={Secondscn}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PasswordRecov"
            component={PasswordRecov}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="BottomNav"
            component={BottomNav}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AboutScreen"
            component={AboutScreen}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="SettingScreen"
            component={SettingScreen}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="LogoutScreen"
            component={LogoutScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="DrawerPage"
            component={DrawerPage}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="UserData"
            component={UserData}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="DetailsUserData"
            component={DetailsUserData}
            options={{headerShown: true}}
          />

          <Stack.Screen
            name="Category"
            component={Category}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="DetailCategory"
            component={DetailCategory}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="UpdateUserProfile"
            component={UpdateUserProfile}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="CallAPI"
            component={CallAPI}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
export default App;
