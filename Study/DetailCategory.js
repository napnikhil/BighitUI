import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Styles from 'react-native-underline-tabbar/lib/Styles';

import Header from '../Shared/Header';
import moment from 'moment';
// const data = [
//   {
//     id: 9118,
//     name: 'sampleUser',
//     email: '27501sampleuser@abc.com',
//     profilepicture:
//       'http://restapi.adequateshop.com/Media//Images/userimageicon.png',
//     location: 'USA',
//     createdat: '0001-01-01T00:00:00',
//   },
//   {
//     id: 9119,
//     name: 'sampleUser',
//     email: '34958sampleuser@abc.com',
//     profilepicture:
//       'http://restapi.adequateshop.com/Media//Images/userimageicon.png',
//     location: 'USA',
//     createdat: '2021-10-31T22:12:22.2301519',
//   },
//   {
//     id: 9120,
//     name: 'sampleUser',
//     email: '69015sampleuser@abc.com',
//     profilepicture:
//       'http://restapi.adequateshop.com/Media//Images/userimageicon.png',
//     location: 'USA',
//     createdat: '0001-01-01T00:00:00',
//   },
//   {
//     id: 9121,
//     name: 'sampleUser',
//     email: '14767sampleuser@abc.com',
//     profilepicture:
//       'http://restapi.adequateshop.com/Media//Images/userimageicon.png',
//     location: 'USA',
//     createdat: '2021-10-31T22:22:31.5175641',
//   },
//   {
//     id: 9122,
//     name: 'vinu',
//     email: 'arun1975@gmail.com',
//     profilepicture:
//       'http://restapi.adequateshop.com/Media//Images/userimageicon.png',
//     location: '1028 vandaloor, western coast, Chennai, Tamilnadu',
//     createdat: '0001-01-01T00:00:00',
//   },
//   {
//     id: 9123,
//     name: 'sampleUser',
//     email: '72352sampleuser@abc.com',
//     profilepicture:
//       'http://restapi.adequateshop.com/Media//Images/userimageicon.png',
//     location: 'USA',
//     createdat: '2021-10-31T22:24:23.0582104',
//   },
//   {
//     id: 9124,
//     name: 'sampleUser',
//     email: '63876sampleuser@abc.com',
//     profilepicture:
//       'http://restapi.adequateshop.com/Media//Images/userimageicon.png',
//     location: 'USA',
//     createdat: '0001-01-01T00:00:00',
//   },
//   {
//     id: 9125,
//     name: 'sampleUser',
//     email: '96979sampleuser@abc.com',
//     profilepicture:
//       'http://restapi.adequateshop.com/Media//Images/userimageicon.png',
//     location: 'USA',
//     createdat: '0001-01-01T00:00:00',
//   },
//   {
//     id: 9126,
//     name: 'sampleUser',
//     email: '74303sampleuser@abc.com',
//     profilepicture:
//       'http://restapi.adequateshop.com/Media//Images/userimageicon.png',
//     location: 'USA',
//     createdat: '0001-01-01T00:00:00',
//   },
//   {
//     id: 9127,
//     name: 'sampleUser',
//     email: '23175sampleuser@abc.com',
//     profilepicture:
//       'http://restapi.adequateshop.com/Media//Images/userimageicon.png',
//     location: 'USA',
//     createdat: '0001-01-01T00:00:00',
//   },
// ];

export default class DetailCategory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timeout: 7000,
      isLoggedIn: false,
      data: [],
      page: 1,
      refreshing: false,
    };
  }

  componentDidMount() {
    // this.getToken(7000);
    // this.getDatas();
    // this.getDatasource();
  }

  //   getDatas = async () => {
  //     let Token = await AsyncStorage.getItem('token');
  //     console.log('NikhilPAgeination', this.state.page);
  //     // fetch(
  //     //   'http://restapi.adequateshop.com/api/users?page=1&Authorization=Bearer'

  //     // )

  //     fetch(`http://restapi.adequateshop.com/api/users?page=${this.state.page}`, {
  //       headers: {
  //         Authorization: `Bearer ${Token}`,
  //       },
  //     })
  //       .then(response => response.json())
  //       .then(json => {
  //         console.log('json data......', json);
  //         this.setState({data: json.data});
  //         console.log('NikhilData', this.state.data);
  //       })
  //       .catch(error => {
  //         console.error(error);
  //       });
  //   };

  //   pageCount = () => {
  //     this.setState({page: this.state.page + 1});
  //     this.getDatas();
  //   };

  //   handelRefresh = () => {
  //     this.setState({refreshing: true});
  //     this.getDatas();
  //     this.setState({refreshing: false});
  //   };

  //   useList = ({item}: any) => {
  //     console.log('itemUserDAta', this.state.page);
  //     var now = moment(item.createdat).format('MM-DD-YYYY');

  //     return (
  //       <View>
  //         <TouchableOpacity
  //           style={styles.touchablestyle}
  //           onPress={() =>
  //             this.props.navigation.navigate('DetailsUserData', {
  //               userSendData: item,
  //             })
  //           }>
  //           <View
  //             style={{
  //               // backgroundColor: 'green',
  //               height: 140,

  //               width: '95%',
  //               alignItems: 'center',
  //             }}>
  //             <View
  //               style={{
  //                 width: '98%',

  //                 borderColor: 'red',
  //                 borderWidth: 1,
  //                 borderRadius: 20,
  //                 alignItems: 'center',
  //                 //   backgroundColor: 'red',
  //                 flexDirection: 'row',
  //               }}>
  //               <Image
  //                 source={{
  //                   uri: item.profilepicture,
  //                 }}
  //                 //borderRadius will help to make Round Shape
  //                 style={{
  //                   width: 70,
  //                   height: 70,
  //                   marginLeft: 20,
  //                   borderRadius: 70 / 2,
  //                 }}
  //               />

  //               <View style={{width: '65%', margin: 10}}>
  //                 <Text style={{color: '#000', margin: 2}}>
  //                   Name : {item.name}
  //                 </Text>
  //                 <Text style={{color: '#000', margin: 2}}>
  //                   Email : {item.email}
  //                 </Text>
  //                 <Text style={{color: '#000', margin: 2}}>
  //                   Location : {item.location}
  //                 </Text>
  //                 <Text style={{color: '#000', margin: 2}}>Date : {now}</Text>
  //               </View>
  //             </View>
  //           </View>
  //         </TouchableOpacity>
  //       </View>
  //     );
  //   };

  render() {
    let userData = this.props?.route?.params?.userSendData;
    console.log('USERRDATA', userData);
    return (
      <View style={{flex: 1}}>
        <Header
          props="DetailsData"
          onPress={() => this.props.navigation.openDrawer()}
          title={'DetailsData'}
        />

        <View
          style={{
            height: 660,
            width: 360,
            alignItems: 'center',
            margin: 10,

            borderColor: 'green',
            borderWidth: 1,
            borderRadius: 20,
            marginTop: 20,
          }}>
          <Image
            source={{
              uri: 'http://restapi.adequateshop.com/Media//Images/userimageicon.png',
            }}
            //borderRadius will help to make Round Shape
            style={{
              marginTop: 50,
              width: 100,
              height: 100,

              borderRadius: 100 / 2,
            }}
          />
          <Text style={{marginTop: 50}}>Name : Nikhil Patil</Text>
          <Text style={{marginTop: 15}}>Name : Nikhil Patil</Text>
          <Text style={{marginTop: 15}}>Name : Nikhil Patil</Text>
          <Text style={{marginTop: 15}}>Name : Nikhil Patil</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    marginHorizontal: 70,
    alignSelf: 'center',
    marginVertical: 400,
  },
});
