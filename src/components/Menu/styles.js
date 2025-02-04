import { Animated, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.ScrollView)`
  margin: 0 30px;
`;

export const Code = styled.View`
  padding: 10px;
  align-self: center;
  overflow: hidden;
`;

export const Nav = styled.View`
   margin-top:10px;
   border-top-width: ${StyleSheet.hairlineWidth}px;
   border-top-color: rgba(255, 255, 255, 0.8);
`;

export const NavItem = styled.View`
  flex-direction:row;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  align-items: center;
  padding:10px;
  border-bottom-color: rgba(255, 255, 255, 0.8);
`;

export const NavText = styled.Text`
   font-size:15px;
   color: #FFF;
   margin-left: 20px;
`;

export const SingOutButton = styled.TouchableOpacity`
    border-width: ${StyleSheet.hairlineWidth}px;
    border-color: rgba(255, 255, 255, 0.8);
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    padding: 12px;
    margin-top: 15px;
`;

export const SingOutButtonText = styled.Text`
   font-size:15px;
   color: #FFF;
   align-content:center
`;
