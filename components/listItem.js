import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
} from "react-native";

export default function ListItem({ el, deleteProduct }) {
  // console.log(deleteProduct());
  return (
    <TouchableHighlight onPress={() => deleteProduct(el.key)}>
      <Text style={styles.text}>{el.text}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({});
