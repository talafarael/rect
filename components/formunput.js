import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight,TextInput  } from 'react-native';

export default function Form ( {Clcikbuton} ){
  
      const [number , onChangeNumber] =React.useState('') 
      
    //   const Clcikbuton=(number)=>{
    //     onChangeNumber(number)
  
    // }
 
  return (
    <View> 
        <TextInput 
       style={styles.input}
      onChangeText={text => onChangeNumber(text)}
      value={number }
      placeholder="Введите здесь, чтобы перевести!"
      defaultValue={number}
      />
     <Button
      title="Right button" 
      onPress={()=>Clcikbuton(number) }
      
      />
      </View>
  
     
  );
  
}

const styles = StyleSheet.create({

 
});