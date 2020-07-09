import React from 'react';
import {
  Container,
  Content,
  Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation, SafeAreaView,
} from './styles';
import Header from "./../../components/Header";
import Tabs from "./../../components/Tabs";
import Menu from "./../../components/Menu";

import Icon from "react-native-vector-icons/MaterialIcons";

import {
  View
} from 'react-native';


export default function Main() {
  return (
    <Container>
      <Header />
      <Content>
      <Menu />
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="visibility-off" size={28} color="#666" />
          </CardHeader>
          <CardContent>
            <Title>Saldo Disponível</Title>
            <Description>R$ 12.900</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Transferência de R$ 20,00 recebida de Eveline Huges do Nascimento 27 JUN
                </Annotation>
          </CardFooter>
        </Card>

        
      </Content>
      
      <Tabs />
    </Container>
  )
}