import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  SearchBar,
  Alert,
} from 'react-native';
import Styles from 'react-native-underline-tabbar/lib/Styles';

import Header from '../Shared/Header';
import moment from 'moment';
import UpdateUserProfile from './UpdateUserProfile';

export default class UserData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timeout: 7000,
      isLoggedIn: false,
      data: [],
      serchData: [],
      page: 1,
      refreshing: false,
      text: '',
      userId: '',
    };
  }

  componentDidMount() {
    this.getDatas();
    // this.getNil();
    // alert(this.state.props);
    this.props.navigation.addListener('focus', () => {
      // alert('Event Focus');
      this.getNil();
      this.getDatas();
      console.log('Focuss');
    });
  }

  deleteUser = async id => {
    // alert('DElete API call');
    let Token = await AsyncStorage.getItem('token');
    // console.log('PAgeination', this.state.page);
    // fetch(
    //   'http://restapi.adequateshop.com/api/users?page=1&Authorization=Bearer'

    // )

    fetch(`http://restapi.adequateshop.com/api/users/` + id, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    })
      .then(response => response.json())
      .then(json => {
        console.log('Dattta', this.state.data);
        this.setState({data: []});
        alert(JSON.stringify(json));
        this.getDatas();
      })
      .catch(error => {
        console.error(error);
      });
  };

  getDatas = async () => {
    let Token = await AsyncStorage.getItem('token');
    // console.log('PAgeination', this.state.page);
    // fetch(
    //   'http://restapi.adequateshop.com/api/users?page=1&Authorization=Bearer'

    // )

    fetch(`http://restapi.adequateshop.com/api/users?page=${this.state.page}`, {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    })
      .then(response => response.json())
      .then(json => {
        console.log('Dattta', this.state.data);
        // alert(json.data.length);
        // const helper = [...this.state.data, json.data];

        // alert('ok');
        // this.setState({data: json.data});
        this.setState({data: this.state.data.concat(json.data)});
        this.setState({serchData: this.state.data.concat(json.data)});
        // this.setState({serchData: this.state.data});
      })
      .catch(error => {
        console.error(error);
      });
  };

  pageCount = () => {
    this.setState({page: this.state.page + 1}, () => {
      this.getDatas();
    });
    // this.getDatas();
  };

  getNil = () => {
    this.setState({data: []});
    this.getDatas();
    // this.setState({page: this.state.page + 1}, () => {
    //   this.getDatas();
    // });
    // this.getDatas();
  };
  handelRefresh = () => {
    this.setState({refreshing: true});
    console.log('pagiiooo', this.state.page);
    // this.setState({page: this.state.page - 1});
    this.getDatas();
    this.setState({refreshing: false});
  };

  renderHeader = () => {
    alert('rendercall');
    return (
      <SearchBar
        placeholder="Type..."
        value={this.state.value}
        onChangeText={text => this.searchFilterFunction(text)}
      />
    );
  };

  useList = ({item}: any) => {
    // console.log('itemUserDAta', this.state.page);
    console.log('item', item);
    // console.log('UUUSERIDDD', item.id);
    // this.setState({data: item});
    var now = moment(item.createdat).format('MM-DD-YYYY');

    return (
      <View>
        <TouchableOpacity
          onLongPress={() =>
            Alert.alert('Message', 'Are you Want to delete Data?', [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {
                text: 'OK',
                // onPress: () => this.props.navigation.navigate('BottomNav'),
                onPress: () => this.deleteUser(item.id),
              },
            ])
          }
          // onLongPress={alert(item.id)}
          onPress={() =>
            this.props.navigation.navigate('UpdateUserProfile', {
              name: item.name,
              email: item.email,
              location: item.location,
              id: item.id.toString(),
              userSendData: item,
              // this.setState({data: []})
            })
          }
          // onPress={alert(item.id)}
          // onPress={() =>
          //   this.props.navigation.navigate('DetailsUserData', {
          //     userSendData: item,
          //   })
          // }>
        >
          <View
            style={{
              // backgroundColor: 'green',
              height: 155,

              width: '95%',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '98%',

                borderColor: 'red',
                borderWidth: 1,
                borderRadius: 20,
                alignItems: 'center',
                //   backgroundColor: 'red',
                flexDirection: 'row',
              }}>
              <Image
                source={{
                  uri: item.profilepicture,
                }}
                //borderRadius will help to make Round Shape
                style={{
                  width: 70,
                  height: 70,
                  marginLeft: 20,
                  borderRadius: 70 / 2,
                }}
              />

              <View style={{width: '65%', margin: 10}}>
                <Text style={{color: '#000', margin: 2}}>
                  Name : {item.name}
                </Text>
                <Text style={{color: '#000', margin: 2}}>
                  Email : {item.email}
                </Text>
                <Text style={{color: '#000', margin: 2}}>
                  Location : {item.location}
                </Text>
                <Text style={{color: '#000', margin: 2}}>Date : {now}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  searchFilterFunction = text => {
    console.log('Search Function Callled', text);
    if (text.length > 0) {
      let filteredData = this.state.serchData.filter(function (item) {
        const itemData = item.email
          ? item.email.toLowerCase()
          : ''.toLowerCase();
        const textData = text.toLowerCase();
        return itemData.indexOf(textData) > -1;
        // console.log('SerchItem', item);
        // return item.email.toLowerCase().includes(text.toLowerCase());
      });
      console.log('filteredData', filteredData);
      // this.setState({data: filteredData});
      this.setState({data: filteredData});
    } else {
      // setsearchdata(props.data);
      // this.state.data;
      this.setState({data: this.state.serchData});
      console.log('SearchCheking', this.state.serchData);
    }
  };

  render() {
    return (
      <View>
        <Header
          props="UserData"
          onPress={() => this.props.navigation.openDrawer()}
          title={'UserData'}
        />
        <View style={{flex: 1}}>
          <View
            style={{
              height: 680,
              width: 380,
              alignItems: 'center',
              margin: 5,
              marginTop: 25,
            }}>
            <TextInput
              style={{
                borderColor: 'red',
                borderWidth: 1,
                width: '80%',
                borderRadius: 10,
                margin: 5,
                marginRight: 30,
              }}
              onChangeText={text => this.searchFilterFunction(text)}
              // value={text}
              underlineColorAndroid="transparent"
              placeholder="Search Here"
            />

            {this.state.data.length === 0 ? (
              <Text style={{justifyContent: 'center', marginTop: 60}}>
                No Data Found
              </Text>
            ) : (
              <FlatList
                extraData={this.state.data}
                // extraData={() => this.getNil()}
                data={this.state.data}
                // data={this.state.serchData}
                style={{marginTop: 15}}
                refreshing={this.state.refreshing}
                onRefresh={() => this.getNil()}
                // onEndReached={this.getDatas()}
                // ListHeaderComponent={this.renderHeader}
                onEndReached={() => this.pageCount()}
                renderItem={(item: any) => this.useList(item)}
                keyExtractor={(item, index) => index.toString()}
              />
            )}
          </View>
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
