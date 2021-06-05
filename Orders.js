import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from "react-native";
import { ListItem } from 'react-native-elements'; 

export default function Orders({ history }) {
  
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://northwind.vercel.app/api/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data)})
      .catch((error) => {console.error(error)})  
  }, []);

  return (
  <View style ={styles.background}>
    <Text style = {styles.orders}>Orders</Text>

      <View style={styles.listContainer}>
        <FlatList
        style = {{backgroundColor: "#F7B2AD", maxHeight: "80%", marginTop: "15%", marginHorizontal: "-5%"}}
        data = {orders}
        renderItem = {({item}) => (
          <ListItem 
          key = {item.id} bottomDivider
          containerStyle = {{backgroundColor: "#333232", borderRadius: 20, marginVertical: "2.5%"}}>
          <ListItem.Content>
            <ListItem.Title style = {styles.orderName}>{item.customerId}</ListItem.Title>
            <ListItem.Subtitle style = {styles.label}><Text style={styles.label}>Ship Name:</Text> {item.shipName}</ListItem.Subtitle>
            <ListItem.Subtitle style = {styles.label}><Text style={styles.label}>Country:</Text> {item.shipAddress.country}</ListItem.Subtitle>
            <ListItem.Subtitle style = {styles.label}><Text style={styles.label}>Order Date:</Text> {item.orderDate}</ListItem.Subtitle>
            <ListItem.Subtitle style = {styles.label}><Text style={styles.label}>Shipped Date:</Text>  {item.shippedDate}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        )}>
        </FlatList>
      </View>

    <TouchableOpacity onPress={() => {history.push("/")}}>
        <View style = {styles.buttonContainer}>
            <Text style = {styles.button}>
                Back to Homepage
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

  orderName: {
     color: "white", 
     fontWeight: "bold", 
     fontStyle: "italic", 
     fontSize: 25, 
     fontFamily: "Roboto", 
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
    color: "#e6e6e6", 
    fontSize: 15, 
    fontFamily: "Roboto",
  },

  itemTitle: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
    fontFamily: "Roboto",
    fontWeight: "bold",    
  },

  orders:{
    marginTop: "-20%",
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
