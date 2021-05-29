import { StatusBar } from "expo-status-bar";
import React, { useState, Component, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  SafeAreaView,
} from "react-native";

import {ListItem, Icon} from 'react-native-elements'; 

import { NativeRouter, Switch, Route } from "react-router-native";

export default function Products({ history }) {

  //Fetching the data from the api here
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://northwind.vercel.app/api/products")
    .then((res) => res.json())
    .then((data) => {
      setProducts(data);
    })
  }, [])

  return (
    <View style={styles.background}>
      <Text style={styles.product}>Products</Text>

      <View style={styles.listContainer}>
        <FlatList
        data = {products}
        renderItem = {({item}) => (
          <ListItem key = {item.id} bottomDivider>
          <ListItem.Content>
            <View style={styles.listButtons}>
              <ListItem.Title>{item.name}</ListItem.Title>
              <Icon name = "delete"></Icon>
              <Icon name = "info"></Icon>
              {/* TODO: ADD ICONBUTTON INSTEAD */}
            </View>
            <ListItem.Subtitle><Text style={styles.label}>Quantity Per Unit:</Text> {item.quantityPerUnit}</ListItem.Subtitle>
            <ListItem.Subtitle><Text style={styles.label}>In Stock:</Text> {item.unitsInStock}</ListItem.Subtitle>
            <ListItem.Subtitle><Text style={styles.label}>Unit Price:</Text> {item.unitPrice}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        )}>
        </FlatList>
      </View>

      {/* <TouchableOpacity
        onPress={() => {
          history.push("/productdetails");
        }}
      >
        <View style={styles.buttonContainer}>
          <Text style={styles.button}>Product Details</Text>
        </View>
      </TouchableOpacity> */}

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
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#F7B2AD",
    flexDirection: "column",
    justifyContent: "space-evenly",
    paddingVertical: "5%",
    paddingHorizontal: "5%",
    flex: 1,
  },

  listContainer: {
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

  label: {
    fontWeight: "bold",
  },

  itemTitle: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
    fontFamily: "Roboto",
    fontWeight: "bold",
  },

  listButtons: {
    flex: 1, 
    flexDirection: "row", 
    flexWrap: "wrap", 
    flexGrow: 0
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
    marginBottom: "-10%",
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
