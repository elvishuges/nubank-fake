import React from "react";
import { Text } from "react-native";
import { StyleSheet,Image } from 'react-native';

import {
    Container, Top, Logo, Title,
  } from './styles';
import logo from './../../assets/Nubank_Logo.png'
import Icon  from "react-native-vector-icons/MaterialIcons";

export default function Header() {
    const uriImage = 'https://media.istockphoto.com/vectors/supermarket-set-products-icon-vector-id852099060'
    return(
      <Container>
          <Top>  
              <Logo source={logo}/>            
              <Title><Text>Elvis</Text></Title>
          </Top>
          <Icon name="keyboard-arrow-down" size={20} color="#FFF" />
      </Container>
    )
}

const styles = StyleSheet.create({
  
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:50,
      alignSelf:'center',
      position: 'absolute',
      marginTop:40
    },
    
  });
  