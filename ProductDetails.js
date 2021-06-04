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

import { ListItem, Icon } from "react-native-elements";

export default function ProductDetails({ history }) {
  //Fetching the data from the api here
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://northwind.vercel.app/api/products/1/")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      });
  }, []);

  return (
    <View style={styles.background}>
      <Text>The error is here</Text>


      <View>
      <Text>The error is here1</Text>

        <FlatList
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
                    <Text>The error is here</Text>

              <ListItem.Content style={styles.itemContainer}>
              <Text>The error is here3</Text>

                <View style={styles.productBox}>
                  <View style={styles.productInfo}>
                  <Text>The error is here</Text>

                      <ListItem.Title>
                        {item.name}
                      </ListItem.Title>
                      <ListItem.Subtitle>
                        <Text style={styles.label}>Unit Price :</Text>{" "}
                        <Text style={styles.label}>{item.unitPrice}</Text>
                      </ListItem.Subtitle>
                      <ListItem.Subtitle>
                        <Text style={styles.label}>Quantity : </Text>{" "}
                        <Text style={styles.label}>{item.quantityPerUnit}</Text>
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
    fontWeight: "bold",
    color: "white",
  },

  itemTitle: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
    fontFamily: "Roboto",
    fontWeight: "bold",
  },

  productBox: {
    // flex: 1,
    backgroundColor: "pink",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  productInfo: {
    backgroundColor: "orange",
    flexDirection: "column",
    maxWidth: "70%",
  },

  iconList: {
    // flex: 1,
    flexDirection: "row",
    // flexWrap: "wrap",
    // flexGrow: 0,
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
    marginBottom: "10%",
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
