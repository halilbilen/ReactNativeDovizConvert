/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import Header from './src/components/header';
import Converter from './src/components/converter';
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Converter />
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'skyblue'
    }

  }
);

