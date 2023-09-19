import styled from 'styled-components/native';
import Button from '../../components/Button';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 16px;
  background-color: #2e2e2e;
`;

export const Header = styled.View`
  font-size: 24px;
  margin-bottom: 26px;
  margin-top: 36px;
  color: white;
  align-items: center;
  /* justify-content: center; */
  flex-direction: row;
`;

export const Text = styled.Text`
  font-size: 24px;
  color: white;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

export const PlayButton = styled(Button)``;

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
  width: 200px;
  color: #ffffff;
`;

export const CardActions = styled.View`
  flex-direction: row;
  width: 20px;
`;
