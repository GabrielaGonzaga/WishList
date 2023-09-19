import React from 'react';
import { Container } from './styles';
import { TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
  children?: any;
}

const Input: React.FC<InputProps> = ({ children, ...rest }) => (
  <Container placeholderTextColor={'grey'} {...rest}>
    {children}
  </Container>
);
export default Input;
