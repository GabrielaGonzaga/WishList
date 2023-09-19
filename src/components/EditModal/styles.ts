import styled, { css } from 'styled-components/native';
import Input from '../Input';
import { Modal } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #2e2e2e;
  /* background-color: #525252; */
  color: #ffffff;
`;

export const ButtonContainer = styled.View`
  background-color: #2e2e2e;
`;

export const TextInput = styled(Input)`
    width: 90%;
    margin-bottom: 20;
`;
