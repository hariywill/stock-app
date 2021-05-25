import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Main from './app/views/main/Main'
import Header from './app/views/header/Header'
import Footer from './app/views/footer/Footer'

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
