import React from 'react';

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../Shared/Header';
class Secondscn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  deleteApi = () => {
    // const { email, password} = this.state;

    AsyncStorage.removeItem('token');
    //   fetch('http://restapi.adequateshop.com/api/authaccount/logout', {
    //     method: 'delete',
    //     headers: {
    //       'Content-type': 'application/json',
    //     },

    //   })
    //     .then(response => response.json())
    //     .then(responseJson => {
    //       console.log('response>>', responseJson);
    //       //if(responseJson.message =="success")
    //       if (responseJson.data == null) {
    Alert.alert('Message', 'Are you sure for Logout', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => this.props.navigation.navigate('FirstScreen'),
        // onPress: () =>
        //   this.props.navigation.reset({
        //     index: 0,
        //     routes: [{name: 'FirstScreen'}],
        //   }),
      },
    ]);
    //       } else {
    //         alert(responseJson.message);
    //       }
    //     })
    //     .catch(err => {
    //       console.log('err>>>', err);
    //     });
  };

  render() {
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
      
        <TouchableOpacity
          onPress={() => this.deleteApi()}
          style={{
            backgroundColor: 'red',
            width: 70,
            height: 40,
            width: 100,
            alignItems: 'center',
            marginTop: 300,
            justifyContent: 'center',
            marginLeft: 150,
          }}>
          <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Secondscn;
