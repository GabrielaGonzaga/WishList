import styled from 'styled-components/native';
import { View, Text, Button, TextInput, ScrollView } from 'react-native';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 16px;
  background-color: #2E2E2E ;
`;

export const Header = styled.Text`
  font-size: 24px;
  margin-bottom: 26px;
  margin-top: 36px;
  color: white;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

export const Card = styled.View`
  background-color: #525252;
  elevation: 4;
  padding: 16px;
  border-radius: 4px;
  margin-bottom: 16px;
  flex-direction: row;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); 
`;

export const CardText = styled.Text`
  font-size: 18px;
  width: 170px;
  color: #ffffff;
`;

export const CardActions = styled.View`
  flex-direction: row;
  width: 10px;
  margin-left: 10px;
`;