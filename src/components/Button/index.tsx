import React from 'react';
import { ButtonText, Container, ButtonComp } from './styles';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { View } from 'react-native';

interface ButtonProps extends RectButtonProperties {
  children?: any;
  background?: any;
  title?: any;
  color: any;
  icon: any;
}

const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  color,
  background,
  title,
  ...rest
}) => (
  <Container background={background}>
    <ButtonComp background={background} {...rest}>
      <Feather name={icon} size={24} color={color} />
      <ButtonText>{children}</ButtonText>
    </ButtonComp>
  </Container>
);
export default Button;
