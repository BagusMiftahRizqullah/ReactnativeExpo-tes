import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={{
      flex:1,
      flexDirection: 'column',
     
     
    }}>
      <Text>home</Text>
      <TouchableOpacity style={{
        padding: 10,
        backgroundColor: 'blue',
        borderRadius: 5,
        margin: 10,
        alignItems: 'center',
      }} onPress={() => props.navigation.navigate('Home')} >
         <Text style={{
            fontSize: 20, 
            color: 'white'
            }}>
            Go To Login
         </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})