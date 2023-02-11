import { StyleSheet, Text, View,TouchableOpacity ,Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core'

import Logo from '../assets/LogoFoodBank.png'

const FirstScreen = () => {
    const navigation = useNavigation();
    
const handleALogin = () => {
    navigation.navigate("ALogin")
  }
  const handlePLogin = () => {
    navigation.navigate("PLogin")
  }
  const handleCLogin = () => {
    navigation.navigate("CLogin")
  }
  return (
    <View style={styles.fullview}>
      <Image style={styles.logo} source={Logo} resizeMode={'contain'} />
      <TouchableOpacity
          onPress={handleALogin}
          style={styles.button}
        >
          <Text style={styles.buttonText}>ADMIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handlePLogin}
          style={styles.button}
        >
          <Text style={styles.buttonText}>PROVIDER</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleCLogin}
          style={styles.button}
        >
          <Text style={styles.buttonText}>CUSTOMER</Text>
        </TouchableOpacity>
    </View>
  )
}

export default FirstScreen

const styles = StyleSheet.create({
    logo: {
        width: '100%',
        maxWidth: 1300,
        height: 300,
      },
    button: {
        backgroundColor: '#804fb3',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom:10,
        marginTop:20,
        shadowColor: '#571e22',
        shadowOpacity: 0.8,
        elevation: 6,
        shadowRadius: 15 ,
        shadowOffset : { width: 1, height: 13},
      },
      buttonText: {
        textAlign:'center',
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
      },
      fullview:{
        padding:80,
      
      }
})