import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Cart from '../Component/Cart'
import axios from 'axios'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function CartScreen() {
  const [cartdetails, setCartdetails] = useState([])

  useEffect(() => {
    async function Cart() {
      try {
        const CartDetail = await axios.get("http://192.168.121.210:5000/apidata/Cartdata")
        setCartdetails(CartDetail.data)
      } catch (error) {
        console.log(error);
      }
    }
    Cart()
  }, [])


  return (
    <View style={styles.container}>
      <Cart />
      <FlatList
        data={cartdetails}
        renderItem={({ item }) => {
          return (
            <View style={{ backgroundColor: 'white', height: 200, margin: 18, borderRadius: 30, borderColor: 'black', borderWidth: 2 }}>
              <View style={{ justifyContent: 'space-between', flexDirection: 'row', padding: 15, top: 8 }}>
                <View>
                  <Text style={{ fontSize: 20, fontWeight: '700', left: 8 }}>
                    {item.name}
                  </Text>
                  <Text style={{ fontSize: 20, fontWeight: '700', left: 8 ,marginTop:8,marginBottom:10}}>
                    {item.details}
                  </Text>

                </View>
                <Text style={{ fontSize: 20, fontWeight: '700', color: 'green', right: 8 }}>
                  {item.price}/-
                </Text>
              </View>
              <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', top: 15 }}>
                <View style={{ backgroundColor: '#145aa6', width: 220, height: 55, justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}>
                  <Text style={{ fontSize: 15, fontWeight: '700', position: 'absolute', color: 'white' }}>
                    Buy Now
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cfc4b8',
  },
})