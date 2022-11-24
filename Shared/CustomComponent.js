//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class CustomText extends React.Component {
  render() {
    return (
      <View>
        <Text style={{color: 'red', fontWeight: 'bold', fontSize: 30}}>
          This is Custom Text
        </Text>
      </View>
    );
  }
}
