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

import { NativeRouter, Switch, Route } from "react-router-native";

export default function Products({ history }) {
  //Fetching the data from the api here
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://northwind.vercel.app/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <View style={styles.background}>
      <Text style={styles.product}>Products</Text>

      <View>
        <FlatList
          style={{
            backgroundColor: "#F7B2AD",
            maxHeight: "80%",
            marginTop: "15%",
            marginHorizontal: "-5%",
          }}
          data={products}
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
                    <TouchableOpacity
                      onPress={() => {
                        history.push("/productdetails");
                      }}
                    >
                      <ListItem.Title style={styles.itemTitle}>
                        {item.name}
                      </ListItem.Title>
                      <ListItem.Subtitle style={styles.itemSubtitle}>
                        <Text style={styles.label}>Unit Price :</Text>{" "}
                        <Text style={styles.label}>{item.unitPrice}</Text>
                      </ListItem.Subtitle>
                      <ListItem.Subtitle>
                        <Text style={styles.label}>Quantity : </Text>{" "}
                        <Text style={styles.label}>{item.quantityPerUnit}</Text>
                      </ListItem.Subtitle>
                    </TouchableOpacity>
                  </View>

                  {/* TODO: ADD ICONBUTTON INSTEAD */}
                  <View styles={styles.iconList}>
                    <Icon name="delete" color="#cca199"></Icon>
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
    fontSize: 15,
  },

  itemTitle: {
    color: "white",
    fontSize: 25,
    // textAlign: "center",
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontStyle: "italic",
  },

  itemContainer: {
    flex: 1,
    // backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  itemSubtitle: {
    color: "white",
    fontSize: 10,
    paddingTop: "5%",
  },

  productBox: {
    flex: 1,
    //  backgroundColor: "blue",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  productInfo: {
    // backgroundColor: "orange",
    flexDirection: "column",
    maxWidth: "80%",
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
