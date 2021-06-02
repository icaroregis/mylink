import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import StatusBarPage from '../../components/StatusBarPage';
import Menu from '../../components/Menu';
import {
  ContainerLogo,
  Logo,
  ContainerContent,
  Title,
  SubTitle,
  ContainerInput,
  BoxIcon,
  Input,
  ButtonLink,
  ButtonLinkText,
} from './style';
import { Feather } from '@expo/vector-icons';

export default function Home() {
  return (
    <LinearGradient
      colors={['#1ddbb9', '#132742']}
      style={{ flex: 1, justifyContent: 'center' }}
    >
      <StatusBarPage backgroundColor="#1ddbb9" barStyle="light-content" />
      <Menu />

      <ContainerLogo>
        <Logo source={require('../../assets/Logo.png')} resizeMode="contain" />
      </ContainerLogo>

      <ContainerContent>
        <Title>SujeitoLink</Title>
        <SubTitle>Cole seu link para encurtar</SubTitle>

        <ContainerInput>
          <BoxIcon>
            <Feather name="link" size={22} color="#fff" />
          </BoxIcon>
          <Input
            placeholder="Cole seu link aqui..."
            placeholderTextColor="#fff"
          />
        </ContainerInput>

        <ButtonLink>
          <ButtonLinkText>Gerar Link</ButtonLinkText>
        </ButtonLink>
      </ContainerContent>
    </LinearGradient>
  );
}
