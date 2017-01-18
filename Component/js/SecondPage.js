import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  Image,
  View,
  ToastAndroid,
  StyleSheet,
  Dimensions,
} from 'react-native';

import MainPage from './MainPage.js';

const {height, width} = Dimensions.get('window');   //获取屏幕宽高

export default class SecondPage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {};
  }
  _login(param) {
    if(param==='lon'){
      ToastAndroid.show('~跳转到第一页~',ToastAndroid.SHORT)
      const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'MainPage',
                component: MainPage,
            })
        }
    }else{
      ToastAndroid.show('~第二页注册~',ToastAndroid.SHORT)
    }
  }
  render(){
      let picNet = {
          uri: 'http://tva2.sinaimg.cn/crop.3.0.634.634.1024/cd516b22jw8fa4mlfynwzj20hs0hm0tr.jpg'
      };
      let picloc = require('../img/login.png');
    return (
        <Image source={picloc} style={styles.backgroundImg}>
          <View style={styles.mianView}>
            <Text style={[styles.textButton,styles.FE663B]}
                  onPress={()=>this._login('lon')}
            >
            登录
            </Text>
            <Text style={[styles.textButton,styles.FFFFFF1B]}
            selectable={true}
            onPress={()=>this._login('reg')}
            >
            注册
            </Text>
          </View>
        </Image>
    );
  }
  }
  //用多个style值控制 文本样式  数组
  const styles = StyleSheet.create({
  backgroundImg:{
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    width:null,
  },
  mianView:{
    width:width,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  textButton:{
    width:width,
    height: 59,
    textAlign:'center',  //横向居中
    textAlignVertical:'center',  //纵向居中
    fontSize: 16,   //设置文字大小
    color:'#FFFFFF',   //设置文字颜色
    marginBottom:10,
  },
  FE663B:{
    backgroundColor: '#FE663B',
  },
  FFFFFF1B:{
    backgroundColor: '#FFFFFF1B',
  },
  });
