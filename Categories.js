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

import { ListItem, IconButton, Icon } from "react-native-elements";

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

      <View>
        <FlatList
        style = {{backgroundColor: "#F7B2AD", maxHeight: "80%", marginTop: "15%", marginHorizontal: "-5%"}}
          data={categories}
          renderItem={({ item }) => (
            <ListItem key={item.id} 
            bottomDivider
            containerStyle = {{backgroundColor: "#333232", borderRadius: 20, marginVertical: "2.5%"}}
            >
              <ListItem.Content style={styles.itemContainer}>
                <View style = {styles.categoryBox}>
                  <View style={styles.categoryInfo}>
                    <ListItem.Title style={styles.categoryName}>
                      {item.name}
                    </ListItem.Title>
                    <ListItem.Subtitle style={styles.categoryDescription}>
                      {item.description}
                    </ListItem.Subtitle>
                  </View>
                  <View style={styles.listButtons}>
                    <Icon 
                    name="edit"
                    color = "#cca199"
                    ></Icon>
                    <Icon 
                    name="delete"
                    color = "#cca199"
                    ></Icon>
                  </View>
                </View>
              </ListItem.Content>
            </ListItem>
          )}
        ></FlatList>
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
    borderRadius: 10,
    // backgroundColor: "blue",
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
    // flex: 1,
    flexDirection: "row",
    // flexWrap: "wrap",
    // flexGrow: 0,
    // backgroundColor: "green",
     
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
    marginBottom: "-10%",
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

  itemContainer: {
    flex: 1,
    // backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  categoryName: {
    // paddingRight: 20,
    color: "white", 
    fontWeight: "bold", 
    fontStyle: "italic", 
    fontSize: 25, 
    fontFamily: "Roboto", 
  },

  categoryDescription: {
    color: "#e6e6e6", 
    fontSize: 15, 
    fontFamily: "Roboto",

  },

  categoryInfo: {
    // backgroundColor: "orange",
    flexDirection: "column",
    maxWidth: "70%", 
  },

 categoryBox: {
   flex: 1, 
  //  backgroundColor: "pink", 
   flexDirection: "row",
   justifyContent: "space-between",
   alignItems:"center",   
    
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
    paddingVertical: "5%",
    marginHorizontal: "10%",
    marginVertical: "5%",
    marginBottom: "1%",
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
    // color: "pink",
    paddingTop: "10%",
  },
});
