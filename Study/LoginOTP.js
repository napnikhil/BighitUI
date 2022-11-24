
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Button,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    StatusBar
   
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

// 

export default class DetailsUserData extends React.Component {
  constructor(props) {
    super(props);



    this.state = {
     
      refreshing: true,


    

    };
  }

  componentDidMount() {}

 
  render() {
 

    return (
      <View style={{flex: 1,backgroundColor:'white'}}>
      <StatusBar hidden/>
      <ScrollView style={{width: '100%', height: '100%'}}>
      <View>
     
      <View style={{width: '100%', height: '100%', alignItems: 'center',
      justifyContent: 'center',}}>
        <Image
          style={styles.tinyLogo}
          source={require('./images/login2.png')}
        />
        
{this.refreshing==true?
        <Text
        style={{
          color: 'black',
          fontSize: 22,
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          marginTop:-30
        }}>
        Enter 6 Digit OTP Sent on
      </Text>:null}

      {this.refreshing!=true?
      <View style={{flexDirection:'row',width:'100%',justifyContent:'center',alignItems:'center'}}>

      <Text
      style={{
        color: 'gray',
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginTop:20,
        fontWeight: 'bold',
      }}>
      +91-999-014-7856
    </Text>

    <Text
    style={{
      color: 'blue',
      fontSize: 18,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 9,
      marginTop:20,
      fontWeight: 'bold',
    }}>
    Change
  </Text>
  


    </View>:null}

    {this.refreshing=true?
<View style={{height:'30%',marginTop:10,justifyContent:'center',alignItems:'center'}}>

    <View style={{flexDirection:'row',marginTop:20,height:'30%',justifyContent:'center'}}>

    <View
                  style={{
                    width: '10%',
                    marginHorizontal: 5,
                    borderWidth: 1,
                    height: '90%',
                    justifyContent: 'center',
                    borderRadius: 8,
                    borderColor: 'blue',
                  }}>
                  <TextInput
                    keyboardType={'phone-pad'}
                    maxLength={1}
                    style={{fontSize: 22, textAlign: 'center'}}
                  />
                </View>

                <View
                style={{
                  width: '10%',
                  marginHorizontal: 5,
                  borderWidth: 1,
                  height: '90%',
                  justifyContent: 'center',
                  borderRadius: 8,
                  borderColor: 'blue',
                }}>
                <TextInput
                  keyboardType={'phone-pad'}
                  maxLength={1}
                  style={{fontSize: 22, textAlign: 'center'}}
                />
              </View>
              <View
              style={{
                width: '10%',
                marginHorizontal: 5,
                borderWidth: 1,
                height: '90%',
                justifyContent: 'center',
                borderRadius: 8,
                borderColor: 'blue',
              }}>
              <TextInput
                keyboardType={'phone-pad'}
                maxLength={1}
                style={{fontSize: 22, textAlign: 'center'}}
              />
            </View>
            <View
            style={{
              width: '10%',
              marginHorizontal: 5,
              borderWidth: 1,
              height: '90%',
              justifyContent: 'center',
              borderRadius: 8,
              borderColor: 'blue',
            }}>
            <TextInput
              keyboardType={'phone-pad'}
              maxLength={1}
              style={{fontSize: 22, textAlign: 'center'}}
            />
          </View>
          <View
          style={{
            width: '10%',
            marginHorizontal: 5,
            borderWidth: 1,
            height: '90%',
            justifyContent: 'center',
            borderRadius: 8,
            borderColor: 'blue',
          }}>
          <TextInput
            keyboardType={'phone-pad'}
            maxLength={1}
            style={{fontSize: 22, textAlign: 'center'}}
          />
        </View>
        <View
        style={{
          width: '10%',
          marginHorizontal: 5,
          borderWidth: 1,
          height: '90%',
          justifyContent: 'center',
          borderRadius: 8,
          borderColor: 'blue',
        }}>
        <TextInput
          keyboardType={'phone-pad'}
          maxLength={1}
          style={{fontSize: 22, textAlign: 'center'}}
        />
      </View>

                </View>


                <TouchableOpacity  onPress={() => {this.props.navigation.navigate('Dashing'), this.setState({refreshing: true})}}>   
<View  style={{
    width: 200,
    height: 50,
    borderRadius: 50,
    backgroundColor: "black",
    alignItems: 'center',
          justifyContent: 'center',
    // transform: [{ scaleX: 3 }],
    marginTop:20,
    alignItems: 'center',
    justifyContent: 'center',
    
   
  }}>
   
    
      <Text
        style={{
          color: 'white',
          fontSize: 16,
        
          textAlign: 'center',
          fontWeight: 'bold',
        }}>
        Submit
      </Text>
         
  </View>
  </TouchableOpacity>




  
  


  <Text
  style={{
    color: 'gray',
    fontSize: 20,
    marginTop:20,
    textAlign: 'center',
    fontWeight: 'bold',
  }}>
 Resend OTP 30s
</Text>


  


  </View>:null}


  {this.refreshing==true?
  <Text>Login Success</Text>:null}
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
      // height:'100%',
      // height:'100%',
      backgroundColor: '#fff',
      alignItems: 'center',
     
      // justifyContent: 'center',
    },
    tinyLogo: {
      width: 400,
      height: 410,
      // marginTop: -50,
    },
  });
