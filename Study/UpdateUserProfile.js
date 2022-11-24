import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../Shared/Header';

export default class UpdateUserProfile extends React.Component {
  async componentDidMount() {
    const {id, email, location, name} = this.props.route.params;
    console.log('<<ghgh>>', id, email, location, name);
    this.setState({name: name, email: email, location: location});
    this.setState({
      updateFirst: name,
      updateEmail: email,
      updateLoc: location,
      id: id,
    });
  }
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      location: '',
      id: '',
      visible: false,
      isEnable: false,
      updatedData: [],
      updateFirst: '',
      updateEmail: '',
      updateLoc: '',
      //editable: true,
    };
  }

  updateUserProfile = async () => {
    let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w\w+)+$/;
    // this.setState({visible: false});
    let Token = await AsyncStorage.getItem('token');
    const {email, id, location, name} = this.state;
    const data = {
      email: email,
      location: location,
      name: name,
      id: this.props.route.params.id,
    };
    this.setState({
      updateFirst: name,
      updateEmail: email,
      updateLoc: location,
      // id: id,
    });

    console.log('data>>', data);
    fetch(
      `http://restapi.adequateshop.com/api/users/${this.props.route.params.id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${Token}`,
        },
        body: JSON.stringify(data),
      },
    )
      .then(res => res.json())
      .then(result => {
        console.log('result>>>', result);
        // this.setState({updatedData: result});

        Alert.alert('Message', 'Data is Update', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'OK',
            // onPress: () => this.props.navigation.navigate('BottomNav'),
            onPress: () =>
              this.props.navigation.navigate('UserData', {
                refresh: true,
                // userSendData: item,
                // this.setState({data: []})
              }),
          },
        ]);
      })
      .catch(err => {
        console.log('err>>>', err.message);
        alert(err);
      });
    // }
  };

  validation = () => {
    if (this.state.name == '') {
      alert('Enter Name');
    } else if (this.state.email == '') {
      alert('Enter Email');
    } else if (this.state.location == '') {
      alert('Enter location');
    } else {
      this.updateUserProfile();
    }
  };

  renderButton = () => {
    return (
      <TouchableOpacity
        // onPress={() => this.updateUserProfile()}
        onPress={() => this.validation()}
        style={{
          height: 50,
          width: 120,
          borderWidth: 1,
          marginStart: 20,
          marginTop: 15,
          borderColor: 'orange',
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 140,
          backgroundColor: 'white',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'green'}}>
          Update
        </Text>
      </TouchableOpacity>
    );
  };

  render() {
    let userSendData = this.props?.route?.params?.userSendData;
    console.log('cggggg', userSendData);

    return (
      <SafeAreaView style={{flex: 1}}>
        <Header
          props="Update Profile"
          onPress={() => this.props.navigation.openDrawer()}
          title={'Update Profile'}
        />
        <View style={{alignItems: 'flex-end', right: 20, marginTop: -35}}>
          <TouchableOpacity
            onPress={() => this.setState({visible: true})}
            style={{
              position: 'relative',
              backgroundColor: 'white',
            }}>
            <Image
              style={{
                height: 40,
                width: 35,
                marginLeft: 10,
                right: 4,
              }}
              source={{
                uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIsAAACLCAMAAABmx5rNAAAAbFBMVEX///8AAADCwsL6+vrFxcX39/fd3d2vr68hISHV1dXo6OjJycm2trbR0dHh4eHu7u5KSkqPj4+jo6NkZGRBQUGJiYmVlZVxcXEyMjINDQ28vLwXFxcmJiapqalsbGx4eHg5OTlcXFyAgIBSUlKsbok0AAAEHUlEQVR4nO2ba5eyIBCAIdIUr6mVXc36///xVdcsLyijAu8Hng979uyeU08IwwxDCGk0Go1Go9FoNP8JgW9uXPfi+ZQoFrmfElxziw+mMhGyfeMO1yhQomKHXZOSNJL/qIzXkElJ4klWsc8slYKjVJXLiEnBQeJzcsdVMH5Ik9lOqWCcSVLxr9Mu+C7HxeJQwXgrQ+XIpYJTCSo+nwrGkXiXB6/LWfh2wDVxJQ0M52wpSQzBLim/i+ilxD1zS/ZiXQCPqMiuxLqcIC5YqIrRy+RGEZpzBsm0wA8XkS7+DeQidIM0+SNdidBoZ/Lt0VJcfEioE/yMgsE6hInQwEtykIsv0gVlIBehKmgHUQnFugQQF9EJDGDynkUXs3d+l7dgFRTwRzuhu1EFdwYjPMUsBoZ3e3SFqyC04VPJJaggFPOo3MTG3A8BzwbpSFFBiE6vpZ0klSKNGTshK5FQSzf4z1EV8ZHlF2OkxE9kzZUG5o59UnDcTA5DUe9hyzcpoVHansRWpsikwr5ndflmxdFGcaekeFYkoDQwFHq4R9YU3UVUogd1qy3JHRoKr6z+n5Gc/kTg5J/1k2w6KQoxP2ci51D86NBDa2N8Hpzv4JhR3g40IsMvcYYybyt+HaP9Y+g0xBI2OJt84O0mSI8iMk1vhknF6umDcZhpUhCuG4xN2PmCyKGZ7KNNsV6fLVqqUlQFKyUSgLJ1RGaV9cRZD00Rf16PuLOrOB92XMjmM4GLbeI10wV20j3GX/VW9fvjiTcdZqIrDqESqOPUacb0IesNS1VL7j+/n+Cr3FtRBdu/ByYheGRg55bjOO1AFQNDDrAvMorXLakSmIyznsqmX909QdkN6Dh3FLdezS0SiAyspTeqcqEDR31XgAusdcXmjrb46X9XdAPAZTUVu/hp0d6ODzinMdZRiT5hyuzs+ZAcC9QZZ7Jv2nGW3ZIB3fFaZUnvfz+S/bPBwdr6a2yMr3aT0mleFHjzbYWM7tQ9gnXq5Ax6uwt0e4Gl0m0jX6qZDE6n+vEASIxov5pxi3mYgVOGBQVaRY6MocJqh2x49rLQJWT1kOccQCxzSQxjuI0xq1ha5JIQRt4+r1Ri3tHl4GmQ4V1+Zgm5wCWljPw0nVlALsh2bUbLK5xbWM8fl5jRyU5nt9toludh8kxvsCs4BaYfkIFWynXZ+R2pMGoC6pum7Xme4zjbgk2L8i/FPxzPRKeEkN6wzh+VRVzxm/Tukar5LkN5DTsNOgFK0dcqql3VMloysr83UGP89SOLIHNQrVKl/dW68ZvUX8r97yGaFWT5dUImtzX7g/E9EqhTf2Uq7frBRq7ENn6PVp58dpDKjmgrqlgqGtYN5k/UzxyVJt/yIT1ulXeJyxV9zaW2Y5nQ9L0zlY+IRqPRaDQajTz+AUMbNSU3e4r6AAAAAElFTkSuQmCC',
              }}
              // source={require('./Assets/edit_icon.png')}
            />
          </TouchableOpacity>
        </View>

        {this.state.visible != true ? (
          <View
            style={{
              //   backgroundColor: 'yellow',
              width: '95%',
              height: 300,
              margin: 10,
              marginTop: 140,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                // flexDirection: 'row',
                borderColor: 'purple',
                borderWidth: 1,
                width: '95%',
                margin: 15,
                height: 300,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
              }}>
              <Text style={{fontSize: 25, color: 'red', fontWeight: 'bold'}}>
                User Profile Data
              </Text>
              <View
                style={{
                  width: '95%',
                  flexDirection: 'row',
                  borderColor: 'orange',
                  borderWidth: 1,
                  marginTop: 15,
                  borderRadius: 20,
                }}>
                <Text
                  style={{
                    height: 40,
                    fontWeight: 'bold',
                    color: '#000',

                    marginLeft: 20,
                    marginTop: 10,
                    fontSize: 20,
                  }}>
                  Name ==>
                  {/* {this.state.name} */}
                  {/* {userSendData.name} */}
                </Text>
                <Text
                  style={{
                    height: 40,
                    marginLeft: 20,
                    marginTop: 10,

                    color: '#000',
                    fontSize: 20,
                  }}>
                  {this.state.name}
                  {/* {userSendData.name} */}
                </Text>
              </View>

              <View
                style={{
                  width: '95%',
                  flexDirection: 'row',
                  borderColor: 'orange',
                  borderWidth: 1,
                  marginTop: 15,
                  height: 50,
                  borderRadius: 20,
                }}>
                <Text
                  style={{
                    height: 40,
                    fontWeight: 'bold',
                    color: '#000',
                    marginLeft: 20,
                    marginTop: 10,
                    fontSize: 20,
                  }}>
                  Email ==>
                  {/* {this.state.name} */}
                  {/* {userSendData.name} */}
                </Text>
                <Text
                  style={{
                    height: 60,
                    marginLeft: 20,
                    marginTop: 6,
                    width: '55%',

                    color: '#000',
                    fontSize: 15,
                  }}>
                  {this.state.email}
                  {/* {userSendData.name} */}
                </Text>
              </View>

              <View
                style={{
                  width: '95%',
                  flexDirection: 'row',
                  borderColor: 'orange',
                  borderWidth: 1,
                  marginTop: 15,
                  borderRadius: 20,
                }}>
                <Text
                  style={{
                    height: 40,
                    fontWeight: 'bold',
                    color: '#000',
                    marginLeft: 20,
                    marginTop: 10,
                    fontSize: 20,
                  }}>
                  Location ==>
                  {/* {userSendData.name} */}
                </Text>
                <Text
                  style={{
                    height: 40,
                    marginLeft: 20,
                    marginTop: 10,
                    color: '#000',
                    fontSize: 20,
                  }}>
                  {this.state.location}
                  {/* {userSendData.name} */}
                </Text>
              </View>
            </View>

            {/* <Text>Nikhil</Text> */}
          </View>
        ) : (
          <ScrollView style={{width: '100%', height: 300}}>
            <View
              style={{
                width: '100%',
                height: 350,
                borderColor: 'purple',
                borderWidth: 1,
                borderRadius: 20,

                justifyContent: 'center',

                marginTop: 130,
              }}>
              <Text
                style={{
                  fontSize: 25,
                  color: 'red',
                  marginLeft: 80,
                  fontWeight: 'bold',
                }}>
                Update User Profile
              </Text>
              <View
                style={{
                  height: 50,
                  width: 350,
                  borderWidth: 3,
                  marginStart: 20,
                  marginTop: 20,
                  borderColor: 'orange',
                  borderWidth: 1,
                  borderRadius: 20,
                }}>
                <TextInput
                  //title={'Email*'}
                  //value={this.state.name}
                  defaultValue={this.props.route.params.name}
                  placeholder="Name"
                  // {...this.txtInputEmailProps}
                  style={styles.emailMainViewStyle}
                  //secureTextEntry={this.state.showPassword}
                  placeholderTextColor="rgb(84,84,84)"
                  onChangeText={text => this.setState({name: text})}
                  autoCapitalize="none"
                  readOnly={true}
                />
              </View>

              <View
                style={{
                  height: 50,
                  width: 350,
                  borderWidth: 3,
                  marginStart: 20,
                  marginTop: 15,
                  borderColor: 'orange',
                  borderWidth: 1,
                  borderRadius: 20,
                }}>
                <TextInput
                  //title={'Email*'}
                  //value={this.state.name}
                  defaultValue={this.props.route.params.email}
                  placeholder="Email"
                  // {...this.txtInputEmailProps}
                  style={styles.emailMainViewStyle}
                  //secureTextEntry={this.state.showPassword}
                  placeholderTextColor="rgb(84,84,84)"
                  onChangeText={text => this.setState({email: text})}
                  autoCapitalize="none"
                  editable={true}
                />
              </View>

              <View
                style={{
                  height: 50,
                  width: 350,
                  marginStart: 20,
                  marginTop: 15,
                  borderColor: 'orange',
                  borderWidth: 1,
                  borderRadius: 20,
                }}>
                <TextInput
                  //title={'Email*'}
                  //value={this.state.name}
                  defaultValue={this.props.route.params.location}
                  placeholder="Location"
                  // {...this.txtInputEmailProps}
                  style={styles.emailMainViewStyle}
                  //secureTextEntry={this.state.showPassword}
                  placeholderTextColor="rgb(84,84,84)"
                  onChangeText={text => this.setState({location: text})}
                  autoCapitalize="none"
                  editable={true}
                />
              </View>
              {this.state.visible == true ? this.renderButton() : null}
            </View>
          </ScrollView>
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  emailMainViewStyle: {
    //width: SCREEN_WIDTH * 0.63,
    width: 300,
    fontWeight: 'bold',
    fontSize: 16,
    color: 'rgb(84,84,84)',
    marginHorizontal: 8,
    flex: 1,
  },
});
