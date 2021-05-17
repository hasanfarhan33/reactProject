import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {  
  return (
    <View style={styles.background}>
      <TouchableOpacity onPress={() => {/*Do something here*/}}>
        <View style={styles.productsButtonContainer}> 
          <Text style={styles.productsButtonText}>
            Products
          </Text>
        </View>

      </TouchableOpacity>
{/* Categories Button is here */}
      <TouchableOpacity onPress={() => {/*Do something here*/}}>
        <View style={styles.categoriesButtonContainer}> 
          <Text style={styles.categoriesButtonText}>
            Categories
          </Text>
        </View>
      </TouchableOpacity>

      {/* Orders Button is here */}
      <TouchableOpacity onPress={() => {/*Do something here*/}}>
        <View style={styles.ordersButtonContainer}> 
          <Text style={styles.ordersButtonText}>
            Orders
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F7B2AD',
    flexDirection: 'column',
    justifyContent: 'space-evenly',  
    paddingVertical: 250,  
    paddingHorizontal: 20, 
    flex: 1, 
    
    
  },

  // Products Button
  productsButtonContainer: 
  {
    backgroundColor: "#333232",
    borderRadius: 50,
    paddingVertical: 20,
    paddingHorizontal: 22,
    elevation: 5,
  }, 
  productsButtonText: 
  {
    color: "white", 
    fontSize: 40, 
    textAlign: "center", 
    fontFamily: 'Roboto',
    fontStyle: 'italic', 
  }, 

  // Categories Button
  categoriesButtonContainer: 
  {
    backgroundColor: "#333232",
    borderRadius: 50,
    paddingVertical: 20,
    paddingHorizontal: 22, 
    elevation: 5,
  }, 

  categoriesButtonText:
  {
    color: "white", 
    fontSize: 40, 
    textAlign: "center",
    fontFamily: 'Roboto',
    fontStyle: 'italic',  
  },

  // Orders Button
  ordersButtonContainer:
  {
    backgroundColor: "#333232",
    borderRadius: 50,
    paddingVertical: 20,
    paddingHorizontal: 22,
    elevation: 5, 

  }, 
  ordersButtonText:
  {
    color: "white", 
    fontSize: 40, 
    textAlign: "center",
    fontFamily: 'Roboto',
    fontStyle: 'italic', 
  }
});
