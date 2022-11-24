import React from 'react';
// import * as React from 'react';

import {
  Image,
  ImageBackgroundComponent,
  useColorScheme,
  TouchableOpacity,
  Alert,
  StatusBar,
  View,
  Text,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomDrawer from './CustomDrawer';
import UpdateUserProfile from './UpdateUserProfile';

import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
import Category from './Category';
import SettingScreen from './SettingScreeen';
// import DetailCategory from './DetailCategory';
import DetailsUserData from './DetailsUserData';
// import LogoutScreen from './LogoutScreen';
// import Header from '../Shared/Header';
// import FirstScreen from './FirstScreen';
// import BottomNav from './BottomNav';
import UserData from './UserData';
// import DetailsUserData from './DetailsUserData';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Drawer = createDrawerNavigator();
// const Stack = createNativeStackNavigator();

const DrawerPage = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Dashboard"
        component={HomeScreen}
        options={{
          title: 'Dashboard',

          headerShown: false,
          drawerIcon: ({focused, size}) => (
            <Image
              source={require('./dashboard.jpeg')}
              style={{width: 30, height: 30}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          headerShown: false,
          drawerIcon: ({focused, size}) => (
            <Image
              source={require('./setting.jpeg')}
              style={{width: 30, height: 30}}
            />
          ),
          title: 'Setting',
          headerTitle: () => (
            <Text
              style={{
                width: '100%',
                color: 'Red',
                textAlign: 'center',
                fontSize: 22,
                fontWeight: 'bold',
                alignItems: 'center',
                marginLeft: '30%',
              }}>
              Setting
            </Text>
          ),
        }}

        // options={{
        //   title: 'Setting',

        //   drawerIcon: ({focused, size}) => (
        //     <Image
        //       source={require('./setting.jpeg')}
        //       style={{width: 30, height: 30}}
        //     />
        //   ),
        // }}
      />
      <Drawer.Screen
        name="About"
        component={AboutScreen}
        options={{
          headerShown: false,
          drawerIcon: ({focused, size}) => (
            <Image
              source={require('./about.jpeg')}
              style={{width: 30, height: 30}}
            />
          ),
          title: 'About',

          headerTitle: () => (
            <Text
              style={{
                width: '100%',
                color: 'Red',
                textAlign: 'center',
                fontSize: 22,
                fontWeight: 'bold',
                alignItems: 'center',
                marginLeft: '35%',
              }}>
              About
            </Text>
          ),
        }}

        // options={{
        //   title: 'About',

        //   drawerIcon: ({focused, size}) => (
        //     <Image
        //       source={require('./about.jpeg')}
        //       style={{width: 30, height: 30}}
        //     />
        //   ),
        // }}
      />

      <Drawer.Screen
        name="UserData"
        component={UserData}
        options={{
          headerShown: false,
          drawerIcon: ({focused, size}) => (
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPQ53Esibh-O6ebk0B4OBfulUoQDlQBUPQ3Q&usqp=CAU',
              }}
              style={{width: 30, height: 30}}
            />
          ),
          title: 'UserData',

          headerTitle: () => (
            <Text
              style={{
                width: '100%',
                color: 'Red',
                textAlign: 'center',
                fontSize: 20,
                fontWeight: 'bold',
                alignItems: 'center',
                marginLeft: '25%',
              }}>
              UserData
            </Text>
          ),
        }}

        // options={{
        //   title: 'About',

        //   drawerIcon: ({focused, size}) => (
        //     <Image
        //       source={require('./about.jpeg')}
        //       style={{width: 30, height: 30}}
        //     />
        //   ),
        // }}
      />

      <Drawer.Screen
        name="UpdateUserProfile"
        component={UpdateUserProfile}
        options={{
          headerShown: false,
          drawerIcon: ({focused, size}) => (
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPQ53Esibh-O6ebk0B4OBfulUoQDlQBUPQ3Q&usqp=CAU',
              }}
              style={{width: 30, height: 30}}
            />
          ),
          title: 'UpdateUserProfile',

          headerTitle: () => (
            <Text
              style={{
                width: '100%',
                color: 'Red',
                textAlign: 'center',
                fontSize: 20,
                fontWeight: 'bold',
                alignItems: 'center',
                marginLeft: '25%',
              }}>
              UpdateUserProfile
            </Text>
          ),
        }}

        // options={{
        //   title: 'About',

        //   drawerIcon: ({focused, size}) => (
        //     <Image
        //       source={require('./about.jpeg')}
        //       style={{width: 30, height: 30}}
        //     />
        //   ),
        // }}
      />

      <Drawer.Screen
        name="Category"
        component={Category}
        options={{
          headerShown: false,
          drawerIcon: ({focused, size}) => (
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK9S998XMJgz_IeuPt8gdMw7wx9aQzk57eTLcTODvnk0zd2u_sqmIkJbDD295a-iZwUKc&usqp=CAU',
              }}
              style={{width: 30, height: 30}}
            />
          ),
          title: 'Category',

          headerTitle: () => (
            <Text
              style={{
                width: '100%',
                color: 'Red',
                textAlign: 'center',
                fontSize: 20,
                fontWeight: 'bold',
                alignItems: 'center',
                marginLeft: '25%',
              }}>
              Category
            </Text>
          ),
        }}
      />

      {/* <Drawer.Screen
        name="DetailsCategory"
        component={DetailCategory}
        options={{
          headerShown: false,
          drawerIcon: ({focused, size}) => (
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK9S998XMJgz_IeuPt8gdMw7wx9aQzk57eTLcTODvnk0zd2u_sqmIkJbDD295a-iZwUKc&usqp=CAU',
              }}
              style={{width: 30, height: 30}}
            />
          ),
          title: 'DetailsCategory',

          headerTitle: () => (
            <Text
              style={{
                width: '100%',
                color: 'Red',
                textAlign: 'center',
                fontSize: 20,
                fontWeight: 'bold',
                alignItems: 'center',
                marginLeft: '25%',
              }}>
              DetailsCategory
            </Text>
          ),
        }}
      /> */}
      <Drawer.Screen
        name="DetailsUserData"
        component={DetailsUserData}
        options={{
          // headerShown: false,
          drawerIcon: ({focused, size}) => (
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPQ53Esibh-O6ebk0B4OBfulUoQDlQBUPQ3Q&usqp=CAU',
              }}
              style={{width: 30, height: 30}}
            />
          ),
          title: 'DetailsUserData',
          headerTitle: () => (
            <Text
              style={{
                width: '100%',
                color: 'Red',
                textAlign: 'center',
                fontSize: 20,
                fontWeight: 'bold',
                alignItems: 'center',
                marginLeft: '25%',
              }}>
              UserData
            </Text>
          ),
        }}
      />
      {/* <Drawer.Screen
        name="UserData"
        component={UserData}
        options={{
          headerShown:false,
          title: 'UserData',
          drawerIcon: ({focused, size}) => (
            <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPQ53Esibh-O6ebk0B4OBfulUoQDlQBUPQ3Q&usqp=CAU',
            }}
              // source={require('./download.jpeg')}
              style={{width: 30, height: 30}}
            />
          ),
        }}
      /> */}
    </Drawer.Navigator>
  );
};
// function DrawerPage() {
//   return <NavigationContainer independent={true}></NavigationContainer>;
// }

export default DrawerPage;

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
