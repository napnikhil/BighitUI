import React from 'react';
import {Button, View} from 'react-native';
import Header from '../Shared/Header';

function SettingScreen({navigation}) {
  return (
    <View>
      {/* <Header props="Dashboard" onPress={() => navigation.toggleDrawer()} /> */}
      <Header
        props="Setting"
        onPress={() => navigation.toggleDrawer()}
        title={'Setting'}
      />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}></View>
    </View>
  );
}

export default SettingScreen;
