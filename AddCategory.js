import React, { useState, Component, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View, TextInput} from "react-native";

export default function AddCategory({ history }) {
  const [id, setID] =useState(1);
  const [name, setName] =useState(1);
  const [description, setDescription] =useState(1);

  const [bid, bsetID] =useState(1);
  const [bname, bsetName] =useState(1);
  const [bdescription, bsetDescription] =useState(1);

  const handleButton = () => {
    bsetID(id);
    bsetDescription(description);
    bsetName(name);
  }

  useEffect(() => {
    // POST request for Categories API
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({ id: bid, description: bdescription, name: bname })
    };
    fetch("https://northwind.vercel.app/api/categories", requestOptions)
        .then(response => response.json())

}, [bid,bdescription,bname]);

  return (
  <View style ={styles.background}>
    <Text style = {styles.categories}>Add new Category</Text>

            <TextInput style = {styles.input}
               placeholder = "Enter the ID..."
               autoCapitalize = "none"
               value= {id}
               onChange = {e => setID(e.target.value)}/>
            
            <TextInput style = {styles.input}
               placeholder = "Enter the category name..."
               autoCapitalize = "none"
               value= {name}
               onChange = {e => setName(e.target.value)}/>

            <TextInput style = {styles.input}
               placeholder = "Enter the category details..."
               autoCapitalize = "none"
               value= {description}
               onChange = {e => setDescription(e.target.value)}/>     

            <TouchableOpacity
              style = {styles.submitButton}
              onPress = {handleButton}>
              <View style = {styles.buttonContainer}>
                <Text style = {styles.button}>Submit</Text>
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
