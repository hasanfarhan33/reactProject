import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";

import { ListItem} from "react-native-elements";

export default function ProductDetails({ history, match }) {
  let url="https://northwind.vercel.app/api/products/";
  let prodID=JSON.stringify(match.params.id)
  prodID=prodID.replace('"','');
  prodID=prodID.replace('"','');
  let productURL=url.concat(prodID);

  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(productURL)
      .then((res) => res.json())
      .then((data) => {
        setProduct([data])})
      .catch((error) => {console.error(error)})  
  }, []);

  return (
    <View style={styles.background}>
    <Text style={styles.product}>Product Details</Text>
    <View>
      <FlatList
        style={{
          backgroundColor: "#F7B2AD",
          maxHeight: "80%",
          marginTop: "15%",
          marginHorizontal: "-5%",
        }}
        data={product}
        renderItem={({ item }) => (
          <ListItem
            key={item.id}
            bottomDivider
            containerStyle={{
              backgroundColor: "#333232",
              borderRadius: 20,
              marginVertical: "2.5%",
            }}
          >
            <ListItem.Content style={styles.itemContainer}>
              <View style={styles.productBox}>
                <View style={styles.productInfo}>
    
                    <ListItem.Title style={styles.itemTitle}>
                      {item.name}
                    </ListItem.Title>
                    <ListItem.Subtitle>
                      <Text style={styles.label}>Quantity: </Text>{" "}
                      <Text style={styles.label}>{item.quantityPerUnit}</Text>
                    </ListItem.Subtitle>
                    <ListItem.Subtitle>
                      <Text style={styles.label}>Units in Stock : </Text>{" "}
                      <Text style={styles.label}>{item.unitsInStock}</Text>
                    </ListItem.Subtitle>
                    <ListItem.Subtitle>
                      <Text style={styles.label}>Units on Order: </Text>{" "}
                      <Text style={styles.label}>{item.unitsOnOrder}</Text>
                    </ListItem.Subtitle>
                    <ListItem.Subtitle>
                      <Text style={styles.label}>Reorder Level: </Text>{" "}
                      <Text style={styles.label}>{item.reorderLevel}</Text>
                    </ListItem.Subtitle>
                    <ListItem.Subtitle>
                      <Text style={styles.label}>Unit Price: </Text>{" "}
                      <Text style={styles.label}>{item.unitPrice}</Text>
                    </ListItem.Subtitle>

                </View>
              </View>
            </ListItem.Content>
          </ListItem>
        )}
      ></FlatList>
    </View>

    <TouchableOpacity
      onPress={() => {
        history.push("/products");
      }}
    >
      <View style={styles.buttonContainer}>
        <Text style={styles.button}>Back to Products</Text>
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
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontStyle: "italic",
  },

  itemContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  itemSubtitle: {
    color: "#e6e6e6", 
    fontSize: 15, 
    fontFamily: "Roboto",
  },

  productBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  productInfo: {
    flexDirection: "column",
    maxWidth: "80%",
  },

  iconList: {
    flexDirection: "row",
    backgroundColor: "green",
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
