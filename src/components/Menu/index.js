import React from 'react';
import { ButtonMenu } from './styles';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Menu(props) {
  const Navigation = useNavigation();

  return (
    <ButtonMenu onPress={() => Navigation.openDrawer()}>
      <Feather name="menu" size={40} color="#fff" />
    </ButtonMenu>
  );
}
