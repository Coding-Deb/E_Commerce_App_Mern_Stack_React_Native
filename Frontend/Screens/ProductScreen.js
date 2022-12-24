import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { useRoute } from '@react-navigation/native'
import Cart from '../Component/Cart'

import Context from '../Context/Context';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function ProductScreen() {
    const { counter, Increase } = useContext(Context)
    const route = useRoute()
    const AddToCart = () => {
        Increase()
    }
    return (
        <View style={styles.container}>
            <Cart />
            <ScrollView>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        source={route.params.img}
                        style={{ height: 1 / 2 * height, width: width - 20, margin: 20, borderRadius: 50 }}
                    />
                    <Text style={{ fontSize: 20, fontWeight: '700' }}>
                        {route.params.name}
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', width: width, height: 80, alignItems: 'center', marginTop: 15, justifyContent: 'space-between' }}>
                    <TouchableOpacity style={{ backgroundColor: '#14a670', width: 1 / 2.3 * width, height: 60, justifyContent: 'center', alignItems: 'center', margin: 18, borderRadius: 30, right: 10 }} onPress={() => AddToCart()}>
                        <Text style={{ color: 'white', fontSize: 15, fontWeight: '600' }}>
                            Add To Cart
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#145aa6', width: 1 / 2.3 * width, height: 60, justifyContent: 'center', alignItems: 'center', margin: 18, borderRadius: 30, right: 8 }}>
                        <Text style={{ color: 'white', fontSize: 15, fontWeight: '600' }}>
                            Buy Now
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#cfc4b8',
        // backgroundColor: 'ECE5DD',
    },
})