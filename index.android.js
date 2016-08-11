// B1: import những thư viện cần thiết
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

// B2: Viết code cho các class (hay còn gọi là component)
// render: là yêu cầu nó phát sinh (vẽ) ra những gì người ta nhìn thấy
class Bai15TrangThaiState extends Component {


  constructor(props) {
    super(props);
  
    // Khởi tạo state
    this.state = {

      somayman : 999,
    };
  }

  onClickMe(){

    // Cập nhật giá trị cho state
    this.setState({

      somayman: this.state.somayman + 1
    });
  }

  render() {

    return (

      <View>

        <TouchableOpacity onPress={()=>{this.onClickMe()}}>

          <View style={{width:100, height:20, backgroundColor:'red'}}></View>  
          
        </TouchableOpacity>

        <Text style={{fontSize:100}}>{this.state.somayman}</Text>

      </View>


    );

  }
}



// B3: Đăng ký register Component Chính
AppRegistry.registerComponent('Bai15TrangThaiState', () => Bai15TrangThaiState);
