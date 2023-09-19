import React from 'react';
import { ButtonText, Container, ButtonComp } from './styles';
import { TouchableOpacityProps } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { View } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
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
  // @ts-ignore
  <Container background={background}>
    {/* @ts-ignore */}
    <ButtonComp background={background} {...rest}>
      <AntDesign name={icon} size={24} color={color} />
      <ButtonText>{children}</ButtonText>
    </ButtonComp>
  </Container>
);
export default Button;
