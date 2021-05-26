import { StatusBar } from "expo-status-bar";
import React, { useState, Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View, FlatList , SafeAreaView} from "react-native";
import { NativeRouter, Switch, Route } from "react-router-native";

const productsList = [
  {
    id: "1",
    title: "Laptop",
    type: "Electronics",
  },
  {
    id: "2",
    title: "Apple",
    type: "Food",
  },
  {
    id: "3",
    title: "Phone",
    type: "Electronics",
  },
];

const Row = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.itemTitle}>{title}</Text>
  </View>
);

const renderItem = ({ item }) => (
  <Row title={item.title} />
);

export default ({ history }) => (
  <View style={styles.background}>
    <Text style={styles.product}>Product Details</Text>

  <SafeAreaView style={styles.container}>
    <FlatList
      data = {productsList}
      renderItem = {renderItem}
      keyExtractor = {item => item.id}
    />
  </SafeAreaView>

    <TouchableOpacity
      onPress={() => {}}
    >
      <View style={styles.buttonContainer}>
        <Text style={styles.button}>Delete Item</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity
      onPress={() => {
        history.push("/");
      }}
    >
      <View style={styles.buttonContainer}>
        <Text style={styles.button}>Back to Homepage</Text>
      </View>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#F7B2AD",
    flexDirection: "column",
    justifyContent: "space-evenly",
    paddingVertical: "5%",
    paddingHorizontal: "5%",
    flex: 1,
  },

  container: {
    flex: 1,
    marginTop: 10,
  },

  item: {
    backgroundColor: "#333232",
    fontSize: 20,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },

  itemTitle: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
    fontFamily: "Roboto",
    fontWeight: "bold",    
  },

  product: {
      marginTop: "-20%",
      fontSize: 46, 
      fontWeight: "bold", 
      fontStyle: "italic", 
      color: "black", 
      textAlign: "center", 
  },

  buttonContainer: {
    backgroundColor: "#333232",
    borderRadius: 30,
    paddingVertical: 15,
    marginHorizontal: 40, 
    marginVertical: "2%",
    elevation: 5,
  },

  button: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontStyle: "italic",
  },
});
