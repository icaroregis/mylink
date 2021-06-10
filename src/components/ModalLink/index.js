import React from 'react';
import { TouchableOpacity, View, TouchableNativeFeedback } from 'react-native';
import {
  ModalContainer,
  Container,
  Header,
  LinkArea,
  Title,
  LongUrl,
  ShortLinkArea,
  ShortLinkUrl,
} from './style';
import { Feather } from '@expo/vector-icons';

export default function ModalLink({ onClose }) {
  return (
    <ModalContainer>
      <TouchableNativeFeedback onPress={onClose}>
        <View style={{ flex: 1 }}></View>
      </TouchableNativeFeedback>

      <Container>
        <Header>
          <TouchableOpacity onPress={onClose}>
            <Feather name="x" color="#212743" size={30} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="share" color="#212743" size={30} />
          </TouchableOpacity>
        </Header>
        <LinkArea>
          <Title>Link encurtado</Title>
          <LongUrl numberOfLines={1}>http://sujeitoprogramador.com</LongUrl>
          <ShortLinkArea activeOpacity={1}>
            <ShortLinkUrl numberOfLines={1}>
              http://bit.ly/fdjskjfgl
            </ShortLinkUrl>
            <TouchableOpacity>
              <Feather name="copy" color="#fff" size={25} />
            </TouchableOpacity>
          </ShortLinkArea>
        </LinkArea>
      </Container>
    </ModalContainer>
  );
}
