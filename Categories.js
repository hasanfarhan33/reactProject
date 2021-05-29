import { StatusBar } from "expo-status-bar";
import React, { useState, Component, useEffect } from "react";
import {StyleSheet, Text, TouchableOpacity, View, Button, FlatList, SafeAreaView,} from "react-native";

import { ListItem, IconButton, Icon} from "react-native-elements";
import { NativeRouter, Switch, Route } from "react-router-native";

export default function Categories({ history }) {
  
  const [categories, setCategory] = useState([]);

  useEffect(() => {
    fetch("https://northwind.vercel.app/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
      });
  }, []);

  return (
    <View style={styles.background}>
      <Text style={styles.categories}>Categories</Text>

      {/* <View style={styles.listContainer}>
        <FlatList
        data = {category}
        renderItem = {({item}) => (
          <Text>{item.name}</Text>
        )}>

        </FlatList>
      </View> */}

      <View style={styles.listContainer}>
        <FlatList
        data = {categories}
        renderItem = {({item}) => (
          <ListItem key = {item.id} bottomDivider>
          <ListItem.Content>
            <View style={styles.listButtons}>
              <ListItem.Title>{item.name}</ListItem.Title>
              {/* ICON BUTTON TEST -- ERROR*/}
              {/* <IconButton 
                icon = "edit" 
                onPress={() => console.log('Pressed')}
              /> */}
            <Icon name ="edit"></Icon>
            <Icon name ="delete"></Icon>
            </View>
            <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        )}>
        </FlatList>
      </View>

      <TouchableOpacity
        onPress={() => {
          history.push("/addcategory");
        }}
      >
        <View style={styles.buttonContainer}>
          <Text style={styles.button}>Add Category</Text>
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
}

const styles = StyleSheet.create({
  background: {
    // backgroundColor: "#F7B2AD",
    borderRadius: 10,
    backgroundColor: "blue", 
    flexDirection: "column",
    justifyContent: "space-between",
    paddingVertical: "5%",
    paddingHorizontal: "5%",
    flex: 1,
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

  listButtons: {
    flex: 1, 
    flexDirection: "row", 
    flexWrap: "wrap", 
    flexGrow: 0
  },

  itemTitle: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
    fontFamily: "Roboto",
    fontWeight: "bold",
  },

  categories: {
    textAlign: "center",
    marginTop: "-20%",
    fontSize: 46,
    fontWeight: "bold",
    fontStyle: "italic",
    fontFamily: "Roboto",
    color: "black",
  },

  listContainer: {
    // flex: 1,
    // flexDirection: "column",
    // justifyContent: "space-between",
    // marginTop: "-40%",
    // maxHeight: 12,
    // overflow: "scroll",
    backgroundColor: "red",  
  },


  info: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    fontStyle: "italic",
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

  categoryListContainer: {
    color: "pink",
    paddingTop: "10%",
  },
});
