import React from "react";   //Login
import { View, TextInput, Text, TouchableOpacity, StyleSheet,ScrollView,SafeAreaView, Image,Alert } from 'react-native'
// import Feather from 'react-native-vector-icons/Feather'

import AsyncStorage from "@react-native-async-storage/async-storage";

export default class PasswordRecov extends React.Component{

   
    render(){
  return (
    <ScrollView>
   <View style={{  backgroundColor: "#ffffff",height:'100%',width:'100%' }} >
      
<View>
       
      
      </View>
 <View >
 <Image style={{ width: 60, height: 60,marginTop:50}}
          source={require('./Logo.jpeg')}/>
                     </View>           
<View style={{paddingTop:30}} >                      
<TextInput style={{paddingTop:5,borderColor:'black',borderWidth:2,height:50,width:200}}
placeholder="Enter Your Password Here"
/>
                   
                    </View>
                    
      

                    <View >
                    

                    <TouchableOpacity style={styles.touchbtn1} onPress={()=>alert('Passowrd Reset Successfully')}>
     <Text style={{fontSize:15,textAlign:'center',fontWeight:'500',color:'#fff'}}>Reset Password</Text>
</TouchableOpacity>
                 </View>


                 
                    </View>

 </ScrollView>
  );
};
}

const styles = StyleSheet.create({
        
       
        touchbtn1:{
            backgroundColor:'black',
            width:'50%',
            padding:15,
            borderRadius:0,
            margin:20
            // width:'100%',
        
        },
    })