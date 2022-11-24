import React from 'react';
import {Stylesheet, View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
// import Ionicons from '@expo/vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

export default function Header({onPress, title}) {
  //   const openMenu = () => {
  //     navigation.openDrawer();
  //   };
  const {navigation} = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        // height: 50,
        // backgroundColor: 'red',
      }}>
      <TouchableOpacity
        style={{width: 30, height: 30, marginTop: 50, marginLeft: 10}}
        onPress={onPress}>
        <Image
          source={{
            uri: 'https://cdn3.iconfinder.com/data/icons/app-basic/512/ic_ham-512.png',
          }}
          //   source={require('./dashboard.jpeg')}
          style={{width: 40, height: 40}}
        />
      </TouchableOpacity>
      <View
        style={{
          width: '75%',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            marginTop: 55,
            marginLeft: 155,
            color: '#000',
          }}>
          {title}
        </Text>
        <View
          style={{
            width: 30,
            height: 30,
            marginTop: 55,
            marginLeft: 120,
          }}></View>
        {/* <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtijmjhnpE7h1Zl0ejfy8j-1Q-cQtpUyIBdg&usqp=CAU',
          }}
          //   source={require('./dashboard.jpeg')}
          style={{width: 30, height: 30, marginTop: 55, marginLeft: 120}}
        /> */}
      </View>
    </View>
  );
}
// const style = Stylesheet.crete({
//   header: {
//     width: '100%',
//     height: '100%',
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   headerText: {
//     fontWeight: 'bold',
//     fontSize: '20',
//     color: 'red',
//   },
// });
