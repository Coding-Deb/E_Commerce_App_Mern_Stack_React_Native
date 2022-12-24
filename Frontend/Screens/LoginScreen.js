import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen() {
  const navigation = useNavigation()
  const [email, setemail] = useState([])
  const [password, setpassword] = useState([])
  const [number, setnumber] = useState([])

  const [show, setshow] = useState(true)

  const Submit = () => {

    const data = { email, password, number }
    axios.post('http://192.168.121.210:5000/apidata/logindata', data)
      .then(res => console.log('1 Data Inserted Successfully'))

    navigation.replace('Home')
  }

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center', justifyContent: 'center', height: 1 / 1.5 * height, width: width - 20, backgroundColor: '#17874f', borderRadius: 30 }}>
        <Text style={{ fontSize: 35, fontWeight: '700', color: '#cfc4b8' }}>
          Login Here
        </Text>
        <TextInput
          placeholder='Enter your Email Address'
          style={{ borderBottomColor: '#cfc4b8', color: '#cfc4b8', borderBottomWidth: 2, fontSize: 18, fontWeight: '500', width: width - 60, padding: 18, margin: 25 }}
          keyboardType='email-address'
          placeholderTextColor='#cfc4b8'
          value={email}
          onChangeText={(val) => setemail(val)}
        />
        <View style={{ flexDirection: 'row' ,justifyContent:'center',alignItems:'center'}}>
          <TextInput
            placeholder='Enter your Password'
            style={{ borderBottomColor: '#cfc4b8', color: '#cfc4b8', borderBottomWidth: 2, fontSize: 18, fontWeight: '500', width: width - 60, padding: 18, margin: 25,left:20 }}
            secureTextEntry={show}
            placeholderTextColor='#cfc4b8'
            value={password}
            onChangeText={(val) => setpassword(val)}
          />
          <TouchableOpacity onPress={()=>{setshow(false)}}>
            <Ionicons name="eye" size={30} color="#cfc4b8" style={{ top: 0, right: 30 }} />
          </TouchableOpacity>
        </View>
        <TextInput
          placeholder='Enter your Contact Number'
          style={{ borderBottomColor: '#cfc4b8', color: '#cfc4b8', borderBottomWidth: 2, fontSize: 18, fontWeight: '500', width: width - 60, padding: 18, margin: 25 }}
          keyboardType='numeric'
          placeholderTextColor='#cfc4b8'
          value={number}
          onChangeText={(val) => setnumber(val)}
        />
        <TouchableOpacity style={{ backgroundColor: '#a12a55', borderColor: 'black', borderWidth: 2, borderRadius: 30, width: 1 / 1.6 * width, padding: 15, margin: 25, justifyContent: 'center', alignItems: 'center' }} onPress={() => { Submit() }}>
          <Text style={{ fontSize: 18, fontWeight: '600', color: 'white' }}>
            Log In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cfc4b8',
    justifyContent: 'center',
    alignItems: 'center'
  },
})