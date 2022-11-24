import React from 'react';
// import * as React from 'react';

import {
  Image,
  ImageBackgroundComponent,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';

// import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';

import LogoutScreen from './LogoutScreen';
import SettingScreen from './SettingScreeen';
import DrawerPage from './DrawerPage';
const Tab = createBottomTabNavigator();

const CustomMapButton = props => (
  <TouchableOpacity
    {...props}
    style={
      props.accessibilityState.selected
        ? [props.style, {borderBottomColor: 'grey', borderBottomWidth: 4}]
        : props.style
    }
  />
);

const CustomAbouButton = props => (
  <TouchableOpacity
    {...props}
    style={
      props.accessibilityState.selected
        ? [props.style, {borderBottomColor: 'grey', borderBottomWidth: 4}]
        : props.style
    }
  />
);
const CustomSettingButton = props => (
  <TouchableOpacity
    {...props}
    style={
      props.accessibilityState.selected
        ? [props.style, {borderBottomColor: 'grey', borderBottomWidth: 4}]
        : props.style
    }
  />
);

const CustomLogoutButton = props => (
  <TouchableOpacity
    {...props}
    style={
      props.accessibilityState.selected
        ? [props.style, {borderBottomColor: 'grey', borderBottomWidth: 4}]
        : props.style
    }
  />
);
// const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();
function TabScreen() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="HomeScreen">
        <Tab.Screen
          name="DashBoard"
          component={DrawerPage}
          style={{borderBottomWidth: 2, borderColor: 'black'}}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('./dashboard.jpeg')}
                style={{
                  width: 20,
                  height: 20,
                  borderTopWidth: 2,
                  borderColor: 'black',
                }}
                screenOptions={{headerShown: false}}
              />
            ),
            tabBarButton: CustomMapButton,
          }}
        />
        <Tab.Screen
          name="AboutScreen"
          headerShown="false"
          component={AboutScreen}
          style={{borderTopWidth: 2}}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('./about.jpeg')}
                style={{width: 20, height: 20}}
              />
            ),
            tabBarButton: CustomAbouButton,
          }}
        />
        <Tab.Screen
          name="SettingScreen"
          component={SettingScreen}
          options={{
            activeTintColor: 'red',
            tabBarIcon: () => (
              <Image
                source={require('./setting.jpeg')}
                style={{width: 20, height: 20}}
              />
            ),
            tabBarButton: CustomSettingButton,
          }}
          tabBarOptions={{showLabel: false}}
        />
        <Tab.Screen
          name="LogoutScreen"
          component={LogoutScreen}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('./download.jpeg')}
                style={{width: 30, height: 30}}
              />
            ),
            tabBarButton: CustomLogoutButton,
          }}
          tabBarOptions={{showLabel: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabScreen;

const tabOptions = {
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: '#D3D3D3',
    style: {
      backgroundColor: 'green',
      borderTopWidth: 1,
      borderTopColor: '#D3D3D3',
    },
    indicatorStyle: {
      backgroundColor: 'red',
    },
  },
};
