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

  // ACCESSING THE ITEMS FROM THE API HERE 
  constructor(props){
    super(props)
    this.state = {
      isLoading: true, 
      products: [],
    }
  }

  componentDidMount() {
    fetch("https://northwind.vercel.app/api/products")
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({ 
        isLoading: false, 
        products: responseJson
      })
    })
  }

  _renderItem = ({item, index}) => {
    return(
      <View>
        <Text>{item.name}</Text>
      </View>
    )
  }

// THE FLATLIST IS ON THE PRODUCTS.JS SO HOW THE HELL DO I TAKE THIS DATA AND PUT IT IN THE FLATLIST THERE?
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
