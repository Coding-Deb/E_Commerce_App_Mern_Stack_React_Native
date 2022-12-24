import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useContext } from 'react';
import CartScreen from './Screens/CartScreen';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import ProductScreen from './Screens/ProductScreen';
import StateData from './Context/State';
import Category_ProductScreen from './Screens/Category_ProductScreen';

// import CartContext from './Context/CartContext';
// const Cart = useContext({ CartContext })

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <StateData>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Login' component={LoginScreen} />
          <Stack.Screen name='Product' component={ProductScreen} />
          <Stack.Screen name='Cart' component={CartScreen} />
          <Stack.Screen name='Category_Product' component={Category_ProductScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </StateData>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
