import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Styles from 'react-native-underline-tabbar/lib/Styles';

import {FlatListSlider} from 'react-native-flatlist-slider';




 


// const images = [
//   {src:require('./bottomTabIcons/profile.svg'),key:'1'},
//   {src:require('./images/banner.png'),key:'2'},
//   {src:require('./images/banner.png'),key:'3'},
//   {src:require('./images/banner.png'),key:'4'},
//   {src:require('./images/banner.png'),key:'5'}

//  ]

const images = [
  {


 banner:require('./images/banner.png'),
   desc: 'Silent Waters in the mountains in midst of Himilayas',
  },
 {

   banner:require('./images/banner.png'),
   desc:
     'Red fort in India New Delhi is a magnificient masterpeiece of humans',
 },
 ]


 const dataaa=[
  {
      name: "Abhishek Cricket",
      email: "miyah.myles@gmail.com",
      position: "Data Entry Clerk",
      photo: require('./images/leaderboard.png')
  },
  {
    name: "Kanishk Cricket",
    email: "miyah.myles@gmail.com",
    position: "Data Entry Clerk",
    photo: require('./images/leaderboard.png')
},

{
  name: "Mrintyunjay Basketball",
  email: "miyah.myles@gmail.com",
  position: "Data Entry Clerk",
  photo: require('./images/leaderboard.png')
},
{
  name: "Akash Basketball",
  email: "miyah.myles@gmail.com",
  position: "Data Entry Clerk",
  photo: require('./images/leaderboard.png')
},
{
name: "Kanishk Cricket",
email: "miyah.myles@gmail.com",
position: "Data Entry Clerk",
photo: require('./images/leaderboard.png')
},

{
name: "Aparajita Cricket",
email: "miyah.myles@gmail.com",
position: "Data Entry Clerk",
photo: require('./images/leaderboard.png')
},


  
]


 const dataa=[
  {
      name: "Trending Player",
      email: "miyah.myles@gmail.com",
      position: "Data Entry Clerk",
      photo: require('./images/categories.png')
  },
  {
    name: "Trending Player",
    email: "miyah.myles@gmail.com",
    position: "Data Entry Clerk",
    photo: require('./images/categories.png')
},

{
  name: "Trending Player",
  email: "miyah.myles@gmail.com",
  position: "Data Entry Clerk",
  photo: require('./images/categories.png')
},
 

  
]

// const data = [
//   {
//     id: 9118,
//     name: 'sampleUser',
//     email: '27501sampleuser@abc.com',
//     profilepicture:
//       'http://restapi.adequateshop.com/Media//Images/userimageicon.png',
//     location: 'USA',
//     createdat: '0001-01-01T00:00:00',
//   },
//   {
//     id: 9119,
//     name: 'sampleUser',
//     email: '34958sampleuser@abc.com',
//     profilepicture:
//       'http://restapi.adequateshop.com/Media//Images/userimageicon.png',
//     location: 'USA',
//     createdat: '2021-10-31T22:12:22.2301519',
//   },
//   
// ];

export default class Notification extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timeout: 7000,
      isLoggedIn: false,
      data: [],
      page: 1,
      refreshing: false,
    };
  }

  componentDidMount() {
    
  }


  useList = ({item}: any) => {
    // console.log('itemUserDAta', this.state.page);
    console.log('item', item);
    // console.log('UUUSERIDDD', item.id);
    // this.setState({data: item});
    // var now = moment(item.createdat).format('MM-DD-YYYY');

    return (
      <View style={styles.listItem}>
      <Image source={item.photo}  style={{width:120, height:120,borderTopLeftRadius:25,borderTopRightRadius:25}} />
      <View style={{alignItems:"center",flex:1}}>
        <Text style={{fontWeight:"bold",marginTop:5}}>{item.name}</Text>
      
      </View>
     
    </View>
    );
  };

  
  useListt = ({item}: any) => {
    // console.log('itemUserDAta', this.state.page);
    console.log('item', item);
    // console.log('UUUSERIDDD', item.id);
    // this.setState({data: item});
    // var now = moment(item.createdat).format('MM-DD-YYYY');

    return (
      <View style={styles.listItemm}>
      <Image source={item.photo}  style={{width:70, height:70,borderTopLeftRadius:25,borderTopRightRadius:25,marginLeft:8}} />
      <View style={{alignItems:"center",flex:1}}>
        <Text style={{fontWeight:"bold",marginTop:5,width:80,marginLeft:20,color:'black'}}>{item.name}</Text>
      
      </View>
     
    </View>
    );
  };
  
 

  render() {
   
    return (
<View style={{flex:1,backgroundColor:'white'}}>

      <View style={styles.parent}>
      <StatusBar translucent backgroundColor="transparent" />
     <View style={styles.child}>


<View style={{marginTop:40,flexDirection:'row',justifyContent:'space-between'}}>
<Text style={{justifyContent:'center',marginTop:30,fontSize:18,color:'white',fontWeight:'bold',marginLeft:20}}>WelCome To BigHit</Text>

<View  style={{
  width: 120,
  height: 40,
  marginLeft:70,
  borderRadius: 50,
   borderWidth:1,
   borderColor:'white',
  alignItems: 'center',
        justifyContent: 'center',
  // transform: [{ scaleX: 3 }],
  marginTop:20,
  alignItems: 'center',

  
 
}}>
 
  
    <Text
      style={{
        color: 'white',
        fontSize: 16,
      
        textAlign: 'center',
        fontWeight: 'bold',
      }}>
      Create Profile
    </Text>
       
</View>
</View>
     
     <Text style={{color:'white',marginRight:165}}>India's Biggest Sport Platform</Text>
 <View style={{width:'75%',}}>

    <FlatListSlider 
  data={images} 
  width={300}
  height={200}
  imageKey={'banner'}
  local
/>
</View>




<Text>HIIIIIIIIIII</Text>
     </View>


</View>

<View style={{width:'100%',height:'30%',backgroundColor:'white',marginTop:40}}>



<FlatList
horizontal
style={{flex:1}}
showsHorizontalScrollIndicator={false}
data={dataa}
renderItem={(item: any) => this.useList(item)}
keyExtractor={item => item.email}
/>
</View>

<View style={{flexDirection:'row'}}>
<Image source={{uri: 'https://media.istockphoto.com/id/1135769825/vector/star-icon-vector-illustration.jpg?s=612x612&w=0&k=20&c=6jMpeAqUVM2db6kdhzj-nxA52Sqk3ImpN-GP9lIeaXE='}}  
       style={{width: 40, height: 40,marginLeft:10}} />  
<Text style={{marginTop:7,fontSize:18,marginLeft:10,color:'black'}}>Top Player on BigHit on LeaderBoard</Text>
</View>


<FlatList
horizontal
showsHorizontalScrollIndicator={false}
style={{flex:1}}
data={dataaa}
renderItem={(item: any) => this.useListt(item)}
keyExtractor={item => item.email}
/>
</View>
     
    );
  }
}
// const styles = StyleSheet.create({
//   image: {
//     marginHorizontal: 70,
//     alignSelf: 'center',
//     marginVertical: 400,
//   },
// });
const styles = StyleSheet.create({
  parent : {
      height : '40%',
      width : '100%',
      transform : [ { scaleX : 2 } ],
      borderBottomStartRadius : 200,
      borderBottomEndRadius : 200,
      overflow : 'hidden',
      justifyContent:'center',
      alignItems:'center'
  },
  child : {
      width:'100%',
      transform : [ { scaleX : 0.5 } ],

      backgroundColor : '#6226BC',
      alignItems : 'center',
     
  },
  listItem:{
    margin:10,
    padding:10,
    backgroundColor:"#FFF",
    width:"50%",
    flex:1,
    alignSelf:"center",    
    borderRadius:5
  }
  , listItemm:{
    margin:2,
    padding:2,
    backgroundColor:"#FFF",
    width:"20%",
    flex:1,
    marginTop:20,
    alignSelf:"center",    
    borderRadius:5,
    justifyContent:'center'
  }
})