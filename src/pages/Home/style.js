import styled from 'styled-components/native';
import { View, Platform } from 'react-native';

export const ContainerLogo = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: ${Platform.OS === 'ios' ? 35 + 'px' : 15 + 'px'};
`;
export const Logo = styled.Image`
  width: 150px;
  height: 150px;
`;
export const ContainerContent = styled.View`
  margin-top: ${Platform.OS === 'ios' ? 25 + '%' : 15 + '%'}; ;
`;
export const Title = styled.Text`
  font-size: 35px;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;
export const SubTitle = styled.Text`
  font-size: 18px;
  color: #fff;
  text-align: center;
  padding-bottom: 10%;
`;
