import { StatusBar } from "expo-status-bar";
import React, { useState, Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View, TextInput} from "react-native";
import { NativeRouter, Switch, Route } from "react-router-native";

const Row = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.itemTitle}>{title}</Text>
  </View>
);

const renderItem = ({ item }) => (
  <Row title={item.title} />
);

function addCategory (categoryName, categoryDetails, categoryID) {
  useEffect(() => {
    // POST request for Categories API
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({ id: categoryID, name: categoryName, description: categoryDetails})
    };
    fetch("https://northwind.vercel.app/api/categories", requestOptions)
        .then(response => response.json())
        .then(data => setPostId(data.id));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);
}

export default function AddCategory({ history }) {
  const [text, setText] = useState("");

  return (
  <View style ={styles.background}>
    <Text style = {styles.categories}>Add new Category</Text>

    <View style={styles.formRow}>
    <Text>Category ID: </Text>
    <TextInput
      placeholder="Enter the ID..."
      onChangeText={text => setText(text)}
      defaultValue={text}></TextInput>
    </View>

    <View style={styles.formRow}>
    <Text>Category Name: </Text>
    <TextInput        
      placeholder="Enter the category name..."
      onChangeText={text => setText(text)}
      defaultValue={text}></TextInput>
    </View>

    <View style={styles.formRow}>
    <Text>Category Details: </Text>
    <TextInput        
      placeholder="Enter the category details..."
      onChangeText={text => setText(text)}
      defaultValue={text}></TextInput>
    </View>

    <TouchableOpacity onPress={() => {}}>
        <View style = {styles.buttonContainer}>
            <Text style = {styles.button}>
                Add Category
            </Text>
        </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => {history.push("/categories")}}>
        <View style = {styles.buttonContainer}>
            <Text style = {styles.button}>
                Cancel
            </Text>
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

  formRow: {
    // flex: 1,
    flexDirection: "row",
  },

  categories:{
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

});
