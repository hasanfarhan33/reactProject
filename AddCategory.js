import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View, TextInput, ToastAndroid } from "react-native";

export default function AddCategory({ history }) {
 
  // Replaced 1 with ""
  const [id, setID] =useState(0);
  const [name, setName] =useState(0);
  const [description, setDescription] =useState(0);

  const [bid, bsetID] =useState(0);
  const [bname, bsetName] =useState(0);
  const [bdescription, bsetDescription] =useState(0);

  const handleButton = () => {
    bsetID(id);
    bsetDescription(description);
    bsetName(name);
  }

  useEffect(() => {
    // POST request for Categories API
    if (bid!=0) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({ id: bid, description: bdescription, name: bname })
      };
      fetch("https://northwind.vercel.app/api/categories", requestOptions)
        .then(response => response.json())
        .then(() => ToastAndroid.show(("Add category request for category ID "+bid+" has been sent."),ToastAndroid.SHORT))

  }}, [bid,bdescription,bname]);

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
    fontSize: 16, 
    marginBottom: "-5%",
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontStyle: "italic",  
  },

  inputStyle: {
    backgroundColor: "white", 
    borderRadius: 5, 
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
