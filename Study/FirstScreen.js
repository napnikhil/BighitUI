import React from 'react'; //Login
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  Alert,
  StatusBar,
} from 'react-native';
// import Feather from 'react-native-vector-icons/Feather'

import AsyncStorage from '@react-native-async-storage/async-storage';

class FirstScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      hidePassword: true,
    };
  }

  setPasswordVisibility = () => {
    this.setState({hidePassword: !this.state.hidePassword});
  };

  loginApi = () => {
    const {email, password} = this.state;
    let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w\w+)+$/;

    const data = {
      email: email,
      password: password,
    };
    console.log('password>>', password);
    console.log('email>>', email);
    console.log('password.length>>', password.length);

    if (email == '') {
      alert('Please enter email');
    } else if (reg.test(email) == false) {
      alert('enter correct email');
    } else if (password == '') {
      alert('Please enter password ');
    } else {
      fetch('http://restapi.adequateshop.com/api/authaccount/login', {
        method: 'post',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then(res => res.json())

        .then(response => {
          {
            response.data === null ? alert(response.message) : null;
          }
          console.log('response>>', response);

          // setStorageData('token',responseJson.data.token)
          console.log('response status>>', response.status);
          console.log('loginToken>>>>>>>', response.data.Token);
          AsyncStorage.setItem('token', response.data.Token);

          //   console.log("loginToken>>>>>>>",token)
          // Alert.alert(response.message);

          Alert.alert('Message', response.message, [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {
              text: 'OK',
              onPress: () => this.props.navigation.navigate('BottomNav'),
            },
          ]);
        })

        .catch(error => {
          // console.log('err>>>', err);
          console.log('responsenill>>', error);

          // alert('invalid username or password');
        });
    }
  };

  //    componentDidMount(){
  //     this.TimeoutHandle=setTimeout(()=> {

  //         this.props.navigation.navigate(
  //             this.state.isLoggedIn ? "BottomNav" : "Firstscn"
  //         )
  //     },2000)
  //    }

  //    componentWillUnmount(){
  //     clearTimeout(this.timeoutHandle);
  //     this.getToken
  //    }

  //    getToken= async ()=>{
  //     let token=await AsyncStorage.getItem('token')

  //     if (token){
  //         console.log(token, "Firstscn")
  //         this.setState({isLoggedIn: true})
  //     }
  //     else{
  //         this.setState({isLoggedIn:false})
  //     }
  //    }

  //  #ddd== faint gray

  render() {
    return (
      <SafeAreaView
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: 'white',
        
        }}>
        <ScrollView>
          <View
            style={{backgroundColor: 'white', height: '100%', width: '100%'}}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />

            <View>
              <Image
                style={{width: 300, height: 250, marginLeft: 15, marginTop: 40}}
                source={require('../asset/background.jpeg')}
              />

              <View
                style={{
                  width: 55,
                  height: 5,
                  marginLeft: 23,
                  backgroundColor: 'black',
                  marginTop: 20,
                }}
              />
            </View>

            <View
              style={{
                backgroundColor: 'white',
                height: '60%',
                width: '100%',
                borderRadius: 30,
              }}>
              <Text
                style={{
                  marginLeft: 24,
                  marginTop: 20,
                  width: '80%',
                  fontSize: 18,
                }}>
                Log in with your email and password or register using email to
                contribute to the archieve{' '}
              </Text>

              <Text
                style={{
                  marginLeft: 25,
                  marginTop: 20,
                  width: '55%',
                  fontSize: 18,
                }}>
                Enter without registration to view the content{' '}
              </Text>

              {/* <View
                style={{
                  marginLeft: 40,
                  marginEnd: 20,
                  marginTop: 20,
                  marginBottom: 10,
                }}> */}
              <View style={{width: '95%', margin: 10, marginTop: 25}}>
                <View
                  style={{
                    width: '83%',
                    marginLeft: 20,
                  }}>
                  {/* <View
                    style={{
                      marginBottom: 10,
                      paddingRight: 60,
                      backgroundColor: 'red',
                    }}> */}
                  <TextInput
                    style={styles.emailinput}
                    placeholder="Enter Your Email Here"
                    value={this.state.email}
                    onChangeText={txt => this.setState({email: txt})}
                    autoCapitalize={false}
                  />
                  {/* </View> */}

                  <View style={{marginTop: 20}}>
                    <View style={[{flexDirection: 'row'}, styles.passinput]}>
                      <TextInput
                        placeholder="Enter Your Password Here"
                        value={this.state.password}
                        onChangeText={txt => this.setState({password: txt})}
                        secureTextEntry={this.state.hidePassword}
                      />

                      <TouchableOpacity
                        activeOpacity={0.8}
                        style={{
                          position: 'absolute',
                          right: 3,
                          height: 40,
                          width: 35,
                          padding: 2,
                        }}
                        onPress={this.setPasswordVisibility}>
                        {/* <Image source={(this.state.hidePassword)
    ? require('./Logo.png')
    : require('./Logo.png')}
    style={{ resizeMode: 'contain', height: '50%',width: '50%',marginTop:15}} /> */}
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={styles.btn1}>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate('PasswordRecov')
                      }>
                      <Text
                        style={{
                          color: 'black',
                          fontWeight: 'italic',
                          marginLeft: 5,
                          fontSize: 15,
                          fontStyle: 'italic',
                          textDecorationLine: 'underline',
                        }}>
                        Recover password
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles.touchbtn1}
                      onPress={() => this.loginApi()}>
                      <Text
                        style={{
                          fontSize: 15,
                          textAlign: 'center',
                          fontWeight: '900',
                          color: '#fff',
                        }}>
                        Log In
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      width: '100%',
                      marginTop: 22,
                    }}>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate('Secondscn')
                      }>
                      <Text
                        style={{
                          color: 'black',
                          fontWeight: 'bold',
                          marginLeft: 5,
                          fontSize: 20,
                        }}>
                        Register{' '}
                      </Text>
                      <Text
                        style={{
                          color: 'black',

                          marginLeft: 5,
                          fontSize: 13,
                          fontStyle: 'italic',
                        }}>
                        with email
                      </Text>
                    </TouchableOpacity>
                    <View
                      style={{
                        marginLeft: '18%',
                        height: '100%',
                        width: 5,
                        backgroundColor: 'black',
                      }}
                    />
                    {/* <Image
                      style={{
                        width: 20,
                        height: 80,
                        marginBottom: 80,
                        marginLeft: 50,
                      }}
                      source={require('./vert.png')}
                    /> */}
                    <TouchableOpacity style={{marginLeft: 85}}>
                      <Text
                        style={{
                          color: 'black',
                          fontWeight: 'bold',
                          fontSize: 20,
                        }}>
                        Enter
                      </Text>
                      <Text
                        style={{
                          color: 'black',
                          fontStyle: 'italic',
                          marginLeft: 2,
                          fontSize: 13,
                        }}>
                        unregistered
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
            {/* </View> */}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    // alignContent:'center',
    // justifyContent:'center',
    marginLeft: 40,
    width: 300,
    height: 135,
    marginBottom: 10,
  },
  txt1: {
    marginTop: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
    marginRight: 220,
  },
  txt2: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
    marginRight: 260,
  },
  txt3: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
    marginRight: 220,
    marginBottom: 30,
  },
  txt4: {
    fontWeight: 'bold',
    textAlign: 'center',

    fontSize: 10,
    color: 'black',
    marginRight: 220,
  },
  txt5: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 10,
    color: 'black',
    marginRight: 270,
  },
  txt6: {
    fontWeight: 'bold',
    textAlign: 'center',

    fontSize: 10,
    color: 'black',
    marginRight: 330,
  },
  txt7: {
    fontWeight: 'bold',
    textAlign: 'center',

    fontSize: 10,
    color: 'black',
    marginRight: 290,
  },
  email: {
    margin: 40,
  },
  emtxt: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 5,
    marginLeft: 10,
  },
  emailinput: {
    backgroundColor: '#fff',
    borderRadius: 0,
    width: '100%',
    borderWidth: 2,
    italic: {fontStyle: 'italic'},
    borderColor: 'black',
  },

  passtxt: {
    fontSize: 12,
    color: 'gray',
    marginTop: 20,
    marginBottom: 5,
    marginLeft: 10,
    borderColor: 'black',
  },
  passinput: {
    backgroundColor: '#fff',
    borderRadius: 0,
    width: '100%',
    borderWidth: 2,
    borderColor: 'black',
  },
  btn1: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',

    //    margin:40
  },
  touchbtn1: {
    backgroundColor: 'black',
    width: '37%',
    marginLeft: 20,
    padding: 10,
    borderRadius: 0,
    marginTop: 20,
    // width:'100%',
  },
});

export default FirstScreen;

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import {View,Image,Text} from 'react-native'
// import FirstScreen from './Study/FirstScreen';
// import Secondscn from './Study/Secondscn';
// import PasswordRecov from './Study/PasswordRecov';
// import BottomNav from './Study/BottomNav';
// import SplashScreen from './Study/SplashScreen';

// const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{
//     headerShown: false
//   }}>
//     <Stack.Screen
//          name="Splash"
//           component={SplashScreen}

//         />
//         <Stack.Screen
//          name="FirstScreen"
//           component={FirstScreen}

//         />
//         <Stack.Screen
//          name="Secondscn"
//           component={Secondscn}

//         />
//          <Stack.Screen
//          name="PasswordRecov"
//           component={PasswordRecov}

//         />
//          <Stack.Screen
//          name="BottomNav"
//           component={BottomNav}

//         />

//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
// export default App;
