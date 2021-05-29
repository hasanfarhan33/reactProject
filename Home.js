import { StatusBar } from "expo-status-bar";
import React, { useState, Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Header } from "react-native";
import { NativeRouter, Switch, Route } from "react-router-native";

export default ({ history }) => (
  <View style={styles.background}>
    <Text style={styles.paragraph}>BAU Market</Text>

    {/* Products Button is here */}
    <TouchableOpacity
      onPress={() => {
        history.push("/products");
      }}
    >
      <View style={styles.productsButtonContainer}>
        <Text style={styles.productsButtonText}>Products</Text>
      </View>
    </TouchableOpacity>

    {/* Categories Button is here */}
    <TouchableOpacity 
      onPress={() => {
        history.push("/categories");
      }}>

      <View style={styles.categoriesButtonContainer}>
        <Text style={styles.categoriesButtonText}>Categories</Text>
      </View>
    </TouchableOpacity>

    {/* Orders Button is here */}
    <TouchableOpacity
      onPress={() => {
        history.push("/orders");
      }}
    >
      <View style={styles.ordersButtonContainer}>
        <Text style={styles.ordersButtonText}>Orders</Text>
      </View>
    </TouchableOpacity>

    {/* About Button is here */}
    <TouchableOpacity
      onPress={() => {
        history.push("/about");
      }}
    >
      <View style={styles.aboutButtonContainer}>
        <Text style={styles.aboutButtonText}>About</Text>
      </View>
    </TouchableOpacity>
  </View>
);

// Designing stuff here
const styles = StyleSheet.create({
  background: {
    backgroundColor: "#F7B2AD",
    flexDirection: "column",
    justifyContent: "space-evenly",
    paddingVertical: 5,
    paddingHorizontal: 20,
    // flex: 1,
  },

  // Title
  paragraph: {
    marginTop: "-50%",
    fontSize: 46,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
    fontStyle: "italic",
    marginBottom: "10%",
  },

  // Products Button
  productsButtonContainer: {
    backgroundColor: "#333232",
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 22,
    elevation: 5,
    marginBottom: "10%", 
  },
  productsButtonText: {
    color: "white",
    fontSize: 40,
    textAlign: "center",
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontStyle: "italic",
  },

  // Categories Button
  categoriesButtonContainer: {
    backgroundColor: "#333232",
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 22,
    elevation: 5,
    marginBottom: "10%",
  },

  categoriesButtonText: {
    color: "white",
    fontSize: 40,
    textAlign: "center",
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontStyle: "italic",
  },

  // Orders Button
  ordersButtonContainer: {
    backgroundColor: "#333232",
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 22,
    elevation: 5,
    marginBottom: "10%",
  },
  ordersButtonText: {
    color: "white",
    fontSize: 40,
    textAlign: "center",
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontStyle: "italic",
  },

  // About Button
  aboutButtonContainer: {
    backgroundColor: "#333232",
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 22,
    elevation: 5,
  },
  aboutButtonText: {
    color: "white",
    fontSize: 40,
    textAlign: "center",
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontStyle: "italic",
  },
});
