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

class Secondscn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      repassword: '',
    };
  }

  registerApi = () => {
    const {name, email, password, repassword} = this.state;
    let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w\w+)+$/;

    const data = {
      name: name,
      email: email,
      password: password,
    };
    console.log('password.length>>', password.length);

    if (name == '') {
      alert('Please enter Name');
    } else if (email == '') {
      alert('Please enter email');
    } else if (reg.test(email) == false) {
      alert('Please enter correct email id.');
    } else if (password == '') {
      alert('Please enter password ');
    } else if (email == '') {
      alert('Register First');
    } else if (password == '') {
      alert('Register First ');
    } else if (repassword == '') {
      alert('Please Enter Confirm Password');
    } else if (repassword != password) {
      alert('Please Enter Password and Confirm Password must Be Same');
    } else {
      fetch('http://restapi.adequateshop.com/api/authaccount/registration', {
        method: 'post',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => response.json())
        .then(responseJson => {
          console.log('response>>', responseJson);
          //if(responseJson.message =="success")
          if (responseJson.data != null) {
            Alert.alert('Message', responseJson.message, [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {
                text: 'OK',
                onPress: () => this.props.navigation.navigate('FirstScreen'),
              },
            ]);
          } else {
            alert(responseJson.message);
          }
        })
        .catch(err => {
          console.log('err>>>', err);
        });
    }
  };

  render() {
    return (
      <View style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
        <ScrollView>
          <View style={{flex: 1}}>
            <View
              style={{
                justifyContent: 'center',
                width: 330,
                marginLeft: '5%',
              }}>
              <View>
                <Image
                  style={{width: 75, height: 75, marginTop: 60}}
                  source={require('./Logo.jpeg')}
                />

                <Text style={{fontSize: 25, marginTop: 70}}>Register</Text>
              </View>

              <View style={styles.footer}>
                <TextInput
                  style={styles.name}
                  placeholder="Username"
                  value={this.state.name}
                  onChangeText={txt => this.setState({name: txt})}
                  autoCapitalize={false}
                />

                <TextInput
                  style={styles.emailinput}
                  placeholder=" Email "
                  value={this.state.email}
                  onChangeText={txt => this.setState({email: txt})}
                />

                <View style={[{flexDirection: 'row'}, styles.passinput]}>
                  <TextInput
                    placeholder="Enter Your Password Here"
                    value={this.state.password}
                    onChangeText={txt => this.setState({password: txt})}
                    // secureTextEntry={this.state.secureTextEntry}
                    secureTextEntry={true}
                  />
                </View>

                <View style={[{flexDirection: 'row'}, styles.passinput]}>
                  <TextInput
                    placeholder="Confirm Your Password Here"
                    value={this.state.repassword}
                    onChangeText={txt => this.setState({repassword: txt})}
                    // secureTextEntry={this.state.secureTextEntry}
                    secureTextEntry={true}
                  />
                </View>
              </View>

              <View style={styles.btn1}>
                <Text
                  style={{
                    fontStyle: 'italic',

                    fontSize: 16,
                  }}>
                  {' '}
                  *Required Fields
                </Text>
                <TouchableOpacity>
                  <Text
                    style={{
                      fontStyle: 'italic',
                      textDecorationLine: 'underline',
                      textDecorationLine: 'underline',
                      marginRight: 100,
                      fontSize: 17,
                      textAlign: 'center',
                      width: '100%',
                      color: '#black',
                    }}>
                    Privacy Policy
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.btn1}>
                <TouchableOpacity
                  style={{marginLeft: 10}}
                  onPress={() => this.props.navigation.navigate('FirstScreen')}>
                  <Text>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.touchbtn1}
                  onPress={() => this.registerApi()}>
                  <Text
                    style={{
                      fontSize: 18,
                      textAlign: 'center',
                      width: '100%',
                      color: '#fff',
                    }}>
                    Register
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flex: 1,

    backgroundColor: 'white',
    borderRadius: 20,
  },
  footer: {
    marginTop: 25,
  },

  txt1: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
  },

  name: {
    backgroundColor: '#fff',
    borderRadius: 0,
    width: 200,
    height: 40,
    borderWidth: 2,
    borderColor: 'black',
  },

  email: {
    // margin: 40,
  },
  emtxt: {
    fontSize: 18,
    marginBottom: 5,
    color: 'black',
  },
  emailinput: {
    backgroundColor: '#fff',
    borderRadius: 0,
    width: 200,
    height: 40,

    marginTop: 20,
    borderWidth: 2,
    borderColor: 'black',
  },

  passinput: {
    backgroundColor: '#fff',
    borderRadius: 0,
    marginTop: 20,
    width: 200,
    height: 40,
    borderWidth: 2,
    borderColor: 'black',
  },
  btn1: {
    alignItems: 'center',
    height: 50,
    marginTop: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  touchbtn1: {
    backgroundColor: 'black',
    width: '30%',
    marginRight: 50,
    justifyContent: 'center',
    height: '80%',
  },
});

export default Secondscn;
