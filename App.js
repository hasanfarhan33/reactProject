import { StatusBar } from "expo-status-bar";
import React, { useState, Component} from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NativeRouter, Switch, Route } from "react-router-native";

import Home from "./Home";
import About from "./About";
import Products from "./Products";
import ProductDetails from "./ProductDetails";
import Categories from "./Categories";
import AddCategory from "./AddCategory";
import Orders from "./Orders";

export default class App extends Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.background}>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/products" component={Products}></Route>
            <Route exact path="/productdetails" component={ProductDetails}></Route>
            <Route exact path="/orders" component={Orders}></Route>
            <Route exact path="/categories" component={Categories}></Route>
            <Route exact path="/addcategory" component={AddCategory}></Route>
          </Switch>
        </View>
      </NativeRouter>
    );
  }
}

// Design stuff here
const styles = StyleSheet.create({
  background: {
    backgroundColor: "#F7B2AD",
    flexDirection: "column",
    justifyContent: "space-evenly",
    paddingVertical: "20%",
    paddingHorizontal: "5%",
    flex: 1,
  },
});
