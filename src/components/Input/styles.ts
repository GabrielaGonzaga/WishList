import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { TextInput } from 'react-native';

export const Container = styled(TextInput)`
  width: 60%;
  border-radius: 4px;
  padding: 12px;
  font-size: 16px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); 
`;