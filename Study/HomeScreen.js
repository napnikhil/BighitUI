import React from 'react';
import {Button, View, StyleSheet, Text} from 'react-native';
import Header from '../Shared/Header';
import CustomComponent from '../Shared/CustomComponent';
function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Header
        props="Dashboard"
        onPress={() => navigation.toggleDrawer()}
        title={'Dashboard'}
      />
      <View
        style={{
          width: '98%',
          marginTop: 250,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <CustomComponent />
        <Text
          style={{
            width: '98%',
            textAlign: 'center',
            fontSize: 30,
            color: '#000',
          }}>
          This is DashBoasrd Screen
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifycontent: 'center',
    backgroundColor: '#FFF',
    flex: 1,
  },
  map: {
    height: '100%',
  },
});

export default HomeScreen;
