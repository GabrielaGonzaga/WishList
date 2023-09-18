import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface IButtonTextProps {
  background?: any;
}

export const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 20px;
  margin-left: 10px;
  width: 150px;
`;

export const Container = styled.View<IButtonTextProps>`
  margin-left: 10px;
  width: 130px;
  padding: 10px;
  border-radius: 4px;
  justify-content: center;

  ${({ background }) =>
    background &&
    css`
      background-color: ${background};
    `}

    ${({ background }) =>
      !background &&
      css`
        width: 50px;
        background-color: white;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); 
      `};
`;

export const ButtonComp = styled(RectButton)<IButtonTextProps>`
  width: 70px;
  padding: 0px;
  flex-direction: row;
  align-items: center;

  ${({ background }) =>
    background &&
    css`
      background-color: ${background};
    `}
`;
