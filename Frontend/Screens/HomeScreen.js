import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'

import CategoryApi from '../Apis/CategoryApi';
import CarosalApi from '../Apis/CarosalApi';
import { getProducts } from '../Apis/SpecialApi';

import Context from '../Context/Context';
import Cart from '../Component/Cart';

export default function HomeScreen() {

  const { counter, Increase } = useContext(Context)
  // const [data, setdata] = useState(0)
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  });

  const navigation = useNavigation()

  const AddToCart = (a, b) => {
    // const data = [a,b]
    // axios.post('http://192.168.121.210:5000/apidata/Cart', data)
    //   .then((res) => console.log(data))
    //   .catch((err) => console.log(err))
    // // console.log(data.a, data.b);
    Increase()
  }

  return (
    <View style={styles.container}>
      <Cart />
      <ScrollView>
        <View style={{ margin: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: '700' }}>
            Search By Category
          </Text>
        </View>
        <ScrollView horizontal style={{ backgroundColor: 'white', height: 100, width: width }}>
          {
            CategoryApi.map((item) => {
              return (
                <TouchableOpacity onPress={() => {
                  navigation.navigate('Category_Product', {
                    id: item.id,
                    name: item.name
                  })
                }}>
                  <View style={{ backgroundColor: `${item.color}`, justifyContent: 'center', height: 100, alignItems: 'center', borderColor: 'black', borderWidth: 2, width: 1 / 3 * width }}>
                    <Image
                      source={item.img}
                      style={{ height: 50, width: 50, borderRadius: 50 }}
                    />
                    <Text style={{ fontSize: 15, fontWeight: '600', color: `${item.textcolor}`, marginTop: 8 }}>
                      {item.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              )
            })
          }
        </ScrollView>
        <View style={{ margin: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: '700' }}>
            Coupons Here
          </Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
          {
            CarosalApi.map((item) => {
              return (
                <View style={{ height: 150, width: 1 / 1.5 * width, borderRadius: 30, marginBottom: 20, marginLeft: 9, marginRight: 9 }} key={item.id}>
                  <Image
                    source={item.img}
                    style={{ height: 150, width: 1 / 1.5 * width, borderRadius: 30, marginBottom: 20, borderColor: 'white', borderWidth: 2, marginLeft: 5, marginRight: 15 }}
                  />
                </View>
              )
            })
          }
        </ScrollView>
        <View style={{ margin: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: '700' }}>
            Specials offers
          </Text>
        </View>
        <ScrollView>
          {
            products.map((item) => {
              return (
                <TouchableOpacity onPress={() => navigation.navigate('Product', {
                  name: item.name,
                  img: item.src
                })}>
                  <View style={{ height: 130, width: width - 20, left: 10, borderRadius: 30, flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-between', marginTop: 15, marginBottom: 15, alignItems: 'center' }} key={item.id}>
                    <View style={{ flexDirection: 'row' }}>
                      <Image
                        source={item.src}
                        style={{ height: 70, width: 70, borderRadius: 30, left: 8 }}
                      />
                      <View style={{ flexDirection: 'column' }}>
                        <Text style={{ fontSize: 15, fontWeight: '700', left: 20, top: 20 }}>
                          {item.name}
                        </Text>
                        <View style={{ width: 100, height: 40, top: 20, left: 17, justifyContent: 'center', alignItems: 'center' }}>
                          <Text style={{ fontSize: 15, fontWeight: '700', color: 'green' }}>
                            Price = {item.price}/-
                          </Text>
                        </View>

                      </View>
                    </View>
                    <View style={{ padding: 10 }}>
                      <TouchableOpacity>
                        <View style={{ backgroundColor: '#145aa6', width: 120, height: 45, right: 15, marginBottom: 4, position: 'relative', justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}>
                          <Text style={{ fontSize: 15, fontWeight: '700', position: 'absolute', color: 'white' }}>
                            Buy Now
                          </Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => AddToCart(item.name, item.price)}>
                        <View style={{ backgroundColor: '#14a670', width: 120, height: 45, right: 15, marginTop: 8, position: 'relative', justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}>
                          <Text style={{ fontSize: 15, fontWeight: '700', position: 'absolute', color: 'white' }}>
                            Add To Cart
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              )
            })
          }
        </ScrollView>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cfc4b8',
  },
})