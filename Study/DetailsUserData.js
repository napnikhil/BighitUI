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
import {FlatListSlider} from 'react-native-flatlist-slider';
import Styles from 'react-native-underline-tabbar/lib/Styles';
// import Carousel, {Pagination} from 'react-native-snap-carousel';
// import {FastImage} from 'react-native-fast-image';
import Header from '../Shared/Header';
import Hederrr from '../Shared/Hederrr';
import moment from 'moment';

let userData = [];

export default class DetailsUserData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timeout: 7000,
      isLoggedIn: false,
      data: [],
      page: 1,
      refreshing: false,

      images: [
        'https://source.unsplash.com/1024x768/?nature',
        'https://source.unsplash.com/1024x768/?water',
        'https://source.unsplash.com/1024x768/?girl',
        'https://source.unsplash.com/1024x768/?tree',
        // require('./.jpg'),
      ],
    };
  }

  componentDidMount() {}

  // getDatas = async () => {
  //   let Token = await AsyncStorage.getItem('token');
  //   console.log('NikhilPAgeination', this.state.page);
  //   // fetch(
  //   //   'http://restapi.adequateshop.com/api/users?page=1&Authorization=Bearer'

  //   // )

  //   fetch(`http://restapi.adequateshop.com/api/users?page=${this.state.page}`, {
  //     headers: {
  //       Authorization: `Bearer ${Token}`,
  //     },
  //   })
  //     .then(response => response.json())
  //     .then(json => {
  //       console.log('json data......', json);
  //       this.setState({data: json.data});
  //       console.log('NikhilData', this.state.data);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // };

  // pageCount = () => {
  //   this.setState({page: this.state.page + 1});
  //   this.getDatas();
  // };

  // handelRefresh = () => {
  //   this.setState({refreshing: true});
  //   this.getDatas();
  //   this.setState({refreshing: false});
  // };

  // jignesh and Saumya code
  // let userData = [];
  //     userData = this.props?.route?.params?.userSendData;
  //     console.log('USERRDATA', userData);

  //     const imageUser = userData.images.map(image => {
  //       // console.log('DataIOP', image);
  //       return {image: image};
  //     });
  //     console.log('DataIOP', imageUser);
  //     const userImage = [
  //       // 'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  //       // {
  //       //   image:
  //       //     'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  //       //   desc: 'Silent Waters in the mountains in midst of Himilayas',
  //       // },
  //       // {
  //       //   image:
  //       //     'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
  //       //   desc: 'Red fort in India New Delhi is a magnificient masterpeiece of humans',
  //       // },
  //     ];
  //     userData &&
  //       userData.images.forEach(element => {
  //         console.log('elememnt222', element);
  //         userImage.push({image: element});
  //       });
  //     console.log('UIOSERIma', userImage);

  render() {
    let imageUser = [];
    this.userData = this.props?.route?.params?.userSendData;
    console.log('USERRDATA', this.userData);
    console.log('DataIOP1234', imageUser);
    imageUser = this.userData.images.map(image => {
      // console.log('DataIOP', image);
      return {image: image};
    });
    console.log('DataIOP', imageUser);

    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Hederrr
          props="Categories Detail"
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
          {/* {console.log('userImagees', userData.images)} */}
          {/* <FlatListSlider data={userImage} height={100} width={250} /> */}
          {/* <FlatListSlider data={userData.images} height={100} width={250} /> */}

          {/**/}
          {imageUser ? (
            <View
              style={{
                width: 300,
                height: 300,
                marginTop: 30,
                borderRadius: 20,
              }}>
              <FlatListSlider data={imageUser} height={200} width={300} />
            </View>
          ) : (
            <View>
              <Text>1234</Text>
            </View>
          )}

          {/* </View> */}
          {/* <View style={{width: '100%', height: '70%'}}>
            
          </View> */}
          <Text style={{marginTop: 50}}>Name : {this.userData.title}</Text>
          <Text style={{marginTop: 15}}>price : {this.userData.price}</Text>
          <Text style={{marginTop: 15}}>
            category : {this.userData.category}
          </Text>
          <Text style={{marginTop: 15}}>rating : {this.userData.rating}</Text>
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
