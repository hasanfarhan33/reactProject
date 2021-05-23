import { StatusBar } from "expo-status-bar";
import React, { useState, Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Button } from "react-native";
import { NativeRouter, Switch, Route } from "react-router-native";

export default ({ history }) => (
  <View style={styles.background}>
    <Text style={styles.product}>Products</Text>
    <Text style={styles.info}>
      Enter a list of products here
    </Text>
    <TouchableOpacity
      onPress={() => {
        history.push("/");
      }}
    >
      <View style={styles.backButtonContainer}>
        <Text style={styles.back}>Back to Homepage</Text>
      </View>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#F7B2AD",
    flexDirection: "column",
    justifyContent: "space-evenly",
    paddingVertical: 5,
    paddingHorizontal: 20,
    flex: 1,
  },

  product: {
      fontSize: 46, 
      fontWeight: "bold", 
      fontStyle: "italic", 
      color: "black", 
      textAlign: "center", 

  },

  backButtonContainer: {
    backgroundColor: "#333232",
    borderRadius: 30,
    paddingVertical: 15,
    marginHorizontal: 40, 
    elevation: 5,
  },

  back: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontStyle: "italic",
  },

});
