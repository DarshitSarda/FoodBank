import { StyleSheet, Text, View,TouchableOpacity ,Image, ImageBackground} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core'

import Logo from '../assets/LogoFoodBank.png'
const image = {uri: 'https://img.freepik.com/free-vector/copy-space-gradient-orange-background_23-2148845473.jpg?w=1060&t=st=1676111286~exp=1676111886~hmac=f3de30a43f28b3ef93d515350052fa72abb355395f65af5a2e1e4fe02cda41d5'};

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
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
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
    </ImageBackground>
  )
}

export default FirstScreen

const styles = StyleSheet.create({
    logo: {
        width: 300,
        height: 300,
        alignSelf:'center'
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
    },
    image: {
        flex: 1,
        justifyContent: 'center',
      },
})