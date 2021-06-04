import { StatusBar } from "expo-status-bar";
import React, { useState, Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Button } from "react-native";

export default ({ history }) => (
  <View style ={styles.background}>
    <Text style = {styles.about}>About</Text>
    <Text style = {styles.info}>This app was developed by Farhan Hasan (1721647) and Ege Öz (1730762) for COP4468 Cross Platform App Development Class.</Text>
    <TouchableOpacity onPress={() => {history.push("/")}}>
        <View style = {styles.backButtonContainer}>
            <Text style = {styles.back}>
                Back to Homepage
            </Text>
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

  about:{
      textAlign: "center", 
      fontSize: 46,
      fontWeight: "bold",
      fontStyle: "italic", 
      fontFamily: "Roboto",
      color: "black",    
  }, 

  info: {
      textAlign: "center", 
      fontSize: 20, 
      fontWeight: "bold", 
      color: "black", 
      fontStyle: "italic", 
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

  }

});
