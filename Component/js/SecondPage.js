import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  Image,
  ListView,
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
      var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        dataSource: ds.cloneWithRows(
          ['row 1', 'row 2', 'row 3', 'row 4', 'row 5',
            'row 6', 'row 7', 'row 8', 'row 9', 'row 10',
            'row 11', 'row 12', 'row 13', 'row 14', 'row 15',
          ]),
      };
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
    }
  }

  render(){
      console.log('------>>>>render');
      let picNet = {
          uri: 'http://tva2.sinaimg.cn/crop.3.0.634.634.1024/cd516b22jw8fa4mlfynwzj20hs0hm0tr.jpg'
      };
      let picloc = require('../img/login.png');
    return (
        <Image source={picloc} style={styles.backgroundImg}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) =>
              <View style={styles.ListView}>
              <Image source={picNet} style={{width:40,height:40}}/>
              <Text style={styles.textItem}>{rowData}</Text>

              </View>
              }
            />
          <View style={styles.mianView}>
            <Text style={[styles.textButton,styles.FE663B]}
                  onPress={()=>this._login('lon')}>
            😄 返回 😄
            </Text>
          </View>
        </Image>
    );
  }
    componentWillMount(){
      console.log('------>>>>componentWillMount');
    }

    componentDidMount(){
      console.log('------>>>>componentDidMount');

    }

    componentWillReceiveProps(){
      console.log('------>>>>componentWillReceiveProps');
    }

    shouldComponentUpdate(){
      console.log('------>>>>shouldComponentUpdate');
    }

    componentWillUpdate(){
      console.log('------>>>>componentWillUpdate');
    }

    componentDidUpdate(){
      console.log('------>>>>componentDidUpdate');
    }

    componentWillUnmount(){
      console.log('------>>>>componentWillUnmount');
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
  ListView:{
    width:width,
    flexDirection: 'row',
    height:40,
    backgroundColor: '#FFFFFF1B',
    marginBottom:10,
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
  textItem:{
    fontSize: 20,   //设置文字大小
    color:'#FFFFFF',   //设置文字颜色
  },
  FE663B:{
    backgroundColor: '#FE663B',
  },
  FFFFFF1B:{
    backgroundColor: '#FFFFFF1B',
  },
  });
