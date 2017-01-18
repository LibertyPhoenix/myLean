/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry,Navigator } from 'react-native';
import MainPage from './Component/js/MainPage';

export default class myLean extends Component {
     render() {
      return (
        <Navigator
          initialRoute={{ name: 'MainPage', component: MainPage}}
          configureScene={(route) => {
            return Navigator.SceneConfigs.PushFromRight;
          }}
          renderScene={(route, navigator) => {
            let Component = route.component;
            return <Component {...route.params} navigator={navigator} />
          }}
          />
      );
    }
}
AppRegistry.registerComponent('myLean', () => myLean);
