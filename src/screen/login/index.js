import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Login = (props) => {
  return (
    <View >
      <Text>login</Text>

      <TouchableOpacity onPress={() => props.navigation.navigate('Home')} >
         <Text>
            Go To Home
         </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})