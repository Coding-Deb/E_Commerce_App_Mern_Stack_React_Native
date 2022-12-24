import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import Cart from '../Component/Cart'

import SampleProduct from "../Apis/SampleProductApi";
import Category from "../Apis/CategoryApi";

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function Category_ProductScreen() {
    const route = useRoute()
    return (
        <View style={styles.container}>
            <Cart />
            <ScrollView>
                <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', height: 1 / 10 * height, margin: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: '500' }}>{route.params.name}</Text>
                </View>
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