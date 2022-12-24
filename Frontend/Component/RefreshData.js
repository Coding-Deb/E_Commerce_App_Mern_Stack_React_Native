import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'

import { FontAwesome } from '@expo/vector-icons';


export default function RefreshData() {
    return (
        <TouchableOpacity>
            <FontAwesome name="refresh" size={25} color="white" style={{ marginRight: 35 }} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})