import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

export default class CallAPI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      products: '',
      productid: '',
    };
  }
  componentDidMount() {
    // this.productsAPI();
  }

  //   productsAPI= async{

  //   }

  validation = () => {
    const {id, products, productid} = this.state;
    if (id == '') {
      alert('Enter ID');
    } else if (products == '') {
      alert('Enter Product');
    } else {
      fetch('https://dummyjson.com/carts/add', {
        method: 'post',
        headers: {
          'Content-type': 'application/json',
        },

        body: JSON.stringify({
          userId: id,
          products: [
            {
              id: productid,
              quantity: products,
            },
          ],
        }),
      })
        .then(res => res.json())

        .then(response => {
          {
            response.data === null ? alert(response.products) : null;
            alert(response.id);
          }
          console.log('response>>', response);

          console.log('response status>>', response.status);
          console.log('DAta Passing ', id);
        })

        .catch(error => {
          // console.log('err>>>', err);
          console.log('responsenill>>', error);

          // alert('invalid username or password');
        });
    }

    // else {
    //   this.productAPI();
    // }
  };

  //   updateUserProfile = async () => {
  //     const data = {
  //       id: id,
  //       product: product,
  //     };
  //     fetch(
  //       `http://restapi.adequateshop.com/api/users/${this.props.route.params.id}`,
  //       {
  //         method: 'PUT',
  //         headers: {
  //           'Content-Type': 'application/json',
  //           Authorization: `Bearer ${Token}`,
  //         },
  //         body: JSON.stringify(data),
  //       },
  //     )
  //       .then(res => res.json())
  //       .then(result => {
  //         console.log('result>>>', result);
  //         // this.setState({updatedData: result});

  //         Alert.alert('Message', 'Data is Update', [
  //           {
  //             text: 'Cancel',
  //             onPress: () => console.log('Cancel Pressed'),
  //             style: 'cancel',
  //           },
  //           {
  //             text: 'OK',
  //             // onPress: () => this.props.navigation.navigate('BottomNav'),
  //             onPress: () =>
  //               this.props.navigation.navigate('UserData', {
  //                 refresh: true,
  //                 // userSendData: item,
  //                 // this.setState({data: []})
  //               }),
  //           },
  //         ]);
  //       })
  //       .catch(err => {
  //         console.log('err>>>', err.message);
  //         alert(err);
  //       });
  //     // }
  //   };

  render() {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 100,
        }}>
        <TextInput
          placeholder="Enter Your Id Here"
          value={this.state.id}
          editable={true}
          onChangeText={txt => this.setState({id: txt})}
        />

        <TextInput
          placeholder="Enter product id"
          value={this.state.productid}
          onChangeText={txt => this.setState({productid: txt})}
        />
        <TextInput
          placeholder="Enter Your Product Here"
          value={this.state.products}
          onChangeText={txt => this.setState({products: txt})}
        />

        <TouchableOpacity onPress={() => this.validation()}>
          {/* onPress={() => this.productsAPI()}> */}
          <Text>Click ME</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
