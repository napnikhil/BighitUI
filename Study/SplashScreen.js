import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component} from 'react';
import {View, Text, SafeAreaView, Image, StyleSheet} from 'react-native';
import Styles from 'react-native-underline-tabbar/lib/Styles';
export default class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeout: 7000,
      isLoggedIn: false,
    };
    setTimeout(() => {
      this.props.navigation.navigate(
        this.state.isLoggedIn ? 'BottomNav' : 'FirstScreen',
      );
    }, 2000);
  }

  componentDidMount() {
    this.getToken(7000);
  }
  getToken = async () => {
    let Token = await AsyncStorage.getItem('token');
    console.log('rrr', Token);
    if (Token) {
      console.log(Token, 'token>>>');
      this.setState({isLoggedIn: true});
    } else {
      this.setState({isLoggedIn: false});
    }
  };

  render() {
    return (
      <View>
        <Image source={require('./Logo.jpeg')} style={styles.image} />
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
