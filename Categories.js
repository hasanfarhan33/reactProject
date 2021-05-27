import { StatusBar } from "expo-status-bar";
import React, { useState, Component, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  FlatList,
  SafeAreaView,
} from "react-native";

import {ListItem, Icon} from 'react-native-elements'; 
import { NativeRouter, Switch, Route } from "react-router-native";

export default function Categories({ history }) {


 

  const [category, setCategory] = useState([])

  useEffect(() => {
    fetch("https://northwind.vercel.app/api/categories")
    .then((res) => res.json())
    .then((data) => {
      setCategory(data);
      // console.log(data);
    })

  }, [])

  return (

    <View style={styles.background}>
      <Text style={styles.categories}>Categories</Text>

      <View>
        {
          category.map((item) => (
            <ListItem key = {item.id}>
              <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
                <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
                <Icon name ='delete'></Icon>
              </ListItem.Content>
            </ListItem>

          ))
        }
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

  categories: {
    textAlign: "center",
    marginTop: "-20%",
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

  categoryListContainer: {
    color: "pink", 
    paddingTop: "10%", 
  }
});

