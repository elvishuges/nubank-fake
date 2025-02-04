import React from "react";
import { Container,TabsContainer,TabItem,TabText } from "./styles";
import Icon  from "react-native-vector-icons/MaterialIcons";

export default function Tabs() {
    return(
      <Container>
        <TabsContainer>
          <TabItem>
           <Icon name="person-add" size={24} color="#FFF"/>
           <TabText>Indicar amigos</TabText>
          </TabItem>
          <TabItem>
           <Icon name="chat-bubble-outline" size={24} color="#FFF"/>
           <TabText>Cobrar</TabText>
          </TabItem>
          <TabItem>
           <Icon name="arrow-downward" size={24} color="#FFF"/>
           <TabText>Depositar</TabText>
          </TabItem>
          <TabItem>
           <Icon name="arrow-upward"  size={24} color="#FFF"/>
           <TabText>Transferir</TabText>
          </TabItem>
          <TabItem>
           <Icon name="lock"   size={24} color="#FFF"/>
           <TabText>Bloquear cartão</TabText>
          </TabItem>
        </TabsContainer>
      </Container>
    )
}