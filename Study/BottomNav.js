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
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useIsDrawerOpen} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
import FirstScreen from './FirstScreen';
import DrawerPage from './DrawerPage';
import SettingScreen from './SettingScreeen';
import UserData from './UserData';
import Category from './Category';
import DetailCategory from './DetailCategory';
import DetailsUserData from './DetailsUserData';
// import TabScreen from './TabScreen';

import PasswordRecov from './PasswordRecov';
// import BottomNav from './Study/BottomNav';
// import SplashScreen from './SplashScreen';

import LogoutScreen from './LogoutScreen';
import UpdateUserProfile from './UpdateUserProfile';
const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function DrawerNav() {
  return (
    <NavigationContainer independent={true} headerShown={false}>
      <DrawerPage headerShown={false} />
    </NavigationContainer>
    // <DrawerItem
    //   label={item.label}
    //   labelStyle={{
    //     color: '#fff',
    //     fontSize: Scale(18),
    //     fontFamily: Font.AirBCBold,
    //     marginLeft: item.icon === true ? Scale(-65) : Scale(-45),
    //     height: Scale(24),
    //   }}
    //   onPress={item.onPress}
    //   icon={() => (
    //     <Icon
    //       name="chevron-right"
    //       size={30}
    //       color={item.icon === true ? '#fff' : 'transparent'}
    //       style={{left: 230, alignSelf: 'center', top: 3}}
    //     />
    //   )}
    // />
    // {/* </NavigationContainer> */}
    // <Drawer.Navigator
    //   drawerContentOptions={{
    //     activeTintColor: '#e91e63',
    //     itemStyle: {marginVertical: 5},
    //     headerShown: false,
    //   }}>
    //   <Drawer.Screen
    //     name="Dashboard"
    //     component={HomeScreen}
    //     options={{
    //       title: 'Dashboard',

    //       drawerIcon: ({focused, size}) => (
    //         <Image
    //           source={require('./dashboard.jpeg')}
    //           style={{width: 30, height: 30}}
    //         />
    //       ),
    //     }}
    //   />

    //   <Drawer.Screen
    //     name="About"
    //     component={AboutScreen}
    //     options={{
    //       title: 'About',
    //       drawerIcon: ({focused, size}) => (
    //         <Image
    //           source={require('./about.jpeg')}
    //           style={{width: 30, height: 30}}
    //         />
    //       ),
    //     }}
    //   />
    //   <Drawer.Screen
    //     name="Setting"
    //     component={SettingScreen}
    //     options={{
    //       title: 'Setting',
    //       drawerIcon: ({focused, size}) => (
    //         <Image
    //           source={require('./setting.jpeg')}
    //           style={{width: 30, height: 30}}
    //         />
    //       ),
    //     }}
    //   />
    //   <Drawer.Screen
    //     name="Logout"
    //     component={LogoutScreen}
    //     options={{
    //       title: 'Logout',
    //       drawerIcon: ({focused, size}) => (
    //         <Image
    //           source={require('./logout.jpeg')}
    //           style={{width: 30, height: 30}}
    //         />
    //       ),
    //     }}
    //   />
    // </Drawer.Navigator>
  );
}

function TabNav() {
  return (
    // {/* </NavigationContainer> */}
    <Tab.Navigator options={{headerShown: false}}>
      <Tab.Screen
        name="DashBoard"
        component={DrawerNav}
        style={{borderBottomWidth: 2, borderColor: 'black'}}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require('./dashboard.jpeg')}
              style={{
                width: 20,
                height: 20,
                borderTopWidth: 2,
                borderColor: 'black',
              }}
            />
          ),
          tabBarButton: CustomMapButton,
        }}
      />
      <Tab.Screen
        screenOptions={{headerShown: false}}
        name="AboutScreen"
        component={AboutScreen}
        style={{borderTopWidth: 2}}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require('./about.jpeg')}
              style={{width: 20, height: 20}}
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
        name="Category"
        component={Category}
        style={{borderTopWidth: 2}}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK9S998XMJgz_IeuPt8gdMw7wx9aQzk57eTLcTODvnk0zd2u_sqmIkJbDD295a-iZwUKc&usqp=CAU',
              }}
              // source={require('./about.jpeg')}
              style={{width: 20, height: 20}}
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

function BottomNav() {
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
          component={BottomNav}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Nav"
          component={DrawerNav}
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

export default BottomNav;

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
