import React, { useState, Component, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View, TextInput} from "react-native";

export default function AddCategory({ history }) {
 
  // Replaced 1 with ""
  const [id, setID] =useState("");
  const [name, setName] =useState("");
  const [description, setDescription] =useState("");

  const [bid, bsetID] =useState("");
  const [bname, bsetName] =useState("");
  const [bdescription, bsetDescription] =useState("");

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
            
            <Text style = {styles.inputHeader}>Category ID</Text>
            <TextInput style = {styles.inputStyle}
               placeholder = "Enter category ID"
               autoCapitalize = "none"
               value= {id}
               onChange = {e => setID(e.target.value)}/>

            <Text style = {styles.inputHeader}>Category Name</Text>          
            <TextInput style = {styles.inputStyle}
               placeholder = "Enter category name"
               autoCapitalize = "none"
               value= {name}
               onChange = {e => setName(e.target.value)}/>

            <Text style = {styles.inputHeader}>Category Description</Text>
            <TextInput style = {styles.inputStyle}
               placeholder = "Enter category description"
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

  inputHeader: {
    fontSize: 20, 
    marginBottom: "-5%",
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontStyle: "italic",  
  },

  inputStyle: {
    backgroundColor: "white", 
    paddingVertical: "5%", 
    borderRadius: 10, 
    
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
