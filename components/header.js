import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Header() {

  return (
    <View style={styles.main}>
      <Text styles={styles.text}> todo </Text>
    </View>
  );
}

const styles = StyleSheet.create({
 main:{
  paddingTop:50,
  backgroundColor:"blue",
  height:100, },
 text:{
  fontSize:18,
  color:'red',
}
});