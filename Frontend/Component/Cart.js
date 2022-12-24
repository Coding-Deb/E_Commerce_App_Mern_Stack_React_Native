import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'

import Context from '../Context/Context'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import RefreshData from './RefreshData'


export default function Cart({ route }) {
  const { counter } = useContext(Context)
  const navigation = useNavigation()
  return (
    <View style={{ width: width, height: 120, backgroundColor: '#323a45', flexDirection: 'row', justifyContent: 'space-between' }}>
      <Image
        source={require('../assets/Icon_Logo.jpg')}
        style={{ height: 100, width: 100, margin: 18, padding: 12 }}
      />
      <View style={{ margin: 12, flexDirection: 'row', width: 120, height: 50, alignItems: 'center', justifyContent: 'space-around', top: 25 }}>
        <RefreshData/>
        <TouchableOpacity onPress={() => { navigation.navigate('Cart') }}>
          <View style={{ backgroundColor: 'white', width: 100, height: 35, borderRadius: 50, justifyContent: 'space-between', flexDirection: 'row', }}>
            <View style={{ padding: 2, borderRightColor: 'black', borderRightWidth: 2,width:50 }}>
              <Ionicons name="cart-sharp" size={30} color="black" style={{left:7}} />
            </View>
            <View>
              <Text style={{ fontSize: 18, fontWeight: '700', right: 25, top: 5 }}>
                {counter}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})