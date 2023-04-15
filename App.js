import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TextInput } from 'react-native';
import Header from "./components/header";
import ListItem from './components/listItem';
import Inputform from './components/formunput'

export default function App() {
  const [listOfItems,setlistOFItems]= useState([
    {text: 'fff', key: 3},
    {text: 'afaf', key:2},
    
  ])
 const deleteProduct = (key) =>{
  listOfItems((list)=>{
    return list.filter(listOfItems => listOfItems.key !== key)
  })
 }



 const Clcikbuton=(number)=>{
  setlistOFItems((list )=>{
    return[
      {text: number , key: Math.random().toString(36).substring(7) },
      ...list
      
    ]
  }) 
}
  
  
  return (
   
    <View >
      <Header />  
       <View>
         <FlatList data={listOfItems} renderItem={({ item })=>(
         <ListItem el={item} deleteProduct={deleteProduct} />
        ) }/> 

   
      </View> 
      <Inputform  Clcikbuton={Clcikbuton}/>
   
    </View>

     
    
   
  );
}

const styles = StyleSheet.create({
 
  container: {
    input:{
      border:4,
      height:300,
      width:200,
    }
   
  },
 
});
