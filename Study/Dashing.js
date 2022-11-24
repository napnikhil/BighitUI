import React from 'react';
// import * as React from 'react';

import {
  Image,
  ImageBackgroundComponent,
  useColorScheme,
  TouchableOpacity,
  Alert,
  StatusBar,
  Text,
} from 'react-native';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useIsDrawerOpen} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
import Notification from './Notification';
import FirstScreen from './FirstScreen';
import DrawerPage from './DrawerPage';
import SettingScreen from './SettingScreeen';
import UserData from './UserData';
import Category from './Category';
import DetailCategory from './DetailCategory';
import DetailsUserData from './DetailsUserData';
// import TabScreen from './TabScreen';
import Taj from './Taj';
import PasswordRecov from './PasswordRecov';


// import SplashScreen from './SplashScreen';

import LogoutScreen from './LogoutScreen';
import UpdateUserProfile from './UpdateUserProfile';



const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();



function TabNav() {
  return (
    // {/* </NavigationContainer> */}
    <Tab.Navigator options={{headerShown: false}}>
     
      <Tab.Screen
        screenOptions={{headerShown: false}}
        name="-"
        component={AboutScreen}
        style={{borderTopWidth: 2}}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require('./images/homee.png')}
              style={{width: 50, height: 50}}
            />
          ),
          tabBarButton: CustomAbouButton,
        }}
      />





    <Tab.Screen
    screenOptions={{headerShown: false}}
    name="~"
    component={Taj}
    style={{borderTopWidth: 2}}
    options={{
      headerShown: false,
      tabBarIcon: () => (
        <Image
          source={require('./images/youtube.png')}
          style={{width: 50, height: 50,margin:10}}
        />
      ),
      tabBarButton: CustomAbouButton,
    }}
  />



  
  <Tab.Screen
  screenOptions={{headerShown: false}}
  name="'"
  component={Notification}
  style={{borderTopWidth: 2}}
  options={{
    headerShown: false,
    tabBarIcon: () => (
      <Image
        source={require('./images/person.png')}
        style={{width: 50, height: 50,margin:10}}
      />
    ),
    tabBarButton: CustomAbouButton,
  }}
/>


      <Tab.Screen
      screenOptions={{headerShown: false}}
      name="_"
      component={Notification}
      style={{borderTopWidth: 2}}
      options={{
        headerShown: false,
        tabBarIcon: () => (
          <Image
            source={require('./images/notification.jpg')}
            style={{width: 50, height: 50,margin:10}}
          />
        ),
        tabBarButton: CustomAbouButton,
      }}
    />

      
      {/* <Tab.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{
          headerShown: false,
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
      /> */}

      <Tab.Screen
        screenOptions={{headerShown: false}}
        name=" "
        component={Category}
        style={{borderTopWidth: 2}}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              // source={{
              //   uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK9S998XMJgz_IeuPt8gdMw7wx9aQzk57eTLcTODvnk0zd2u_sqmIkJbDD295a-iZwUKc&usqp=CAU',
              // }}
              source={require('./images/person.png')}
              style={{width: 40, height: 40}}
            />
          ),
          tabBarButton: CustomAbouButton,
        }}
      />

      {/* <Tab.Screen
        name="UsetData"
        component={UserData}
        options={{
           headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require('./download.jpeg')}
              style={{width: 30, height: 30}}
            />
          ),
          tabBarButton: CustomLogoutButton,
        }}
        tabBarOptions={{showLabel: false}}
      /> */}

  
    </Tab.Navigator>
  );
}

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


const CustomNotiButton = props => (
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

function Dashing() {
  return (
    <NavigationContainer independent={true} initialRouteName="HomeScreen">
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#FFF"
        translucent={true}
      />

      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Dashboard" component={TabNav} />
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen
          name="Dash"
          component={Dashing}
          options={{headerShown: false}}
        />
      
        <Stack.Screen
          name="UserData"
          component={UserData}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PasswordRecov"
          component={PasswordRecov}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DrawerPage"
          component={DrawerPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dashing"
          component={Dashing}
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
          name="DetailsUserData"
          component={DetailsUserData}
          // options={{headerShown: false}}
        />
        <Stack.Screen
          name="UpdateUserProfile"
          component={UpdateUserProfile}
          // options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Dashing;

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
