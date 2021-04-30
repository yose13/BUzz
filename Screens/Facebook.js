import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import AppHeader from '../components/AppHeader'

export default class Facebook extends React.Component {
  render() {
  return (
    <View>
    <AppHeader/>
    <View style={styles.container}>
      <Text>Facebook</Text>
      </View>
      </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:170
  },
});


      


