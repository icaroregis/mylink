import React from 'react';
import {
  TouchableOpacity,
  View,
  TouchableNativeFeedback,
  Share,
} from 'react-native';
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
import Clipboard from 'expo-clipboard';

export default function ModalLink({ onClose, data }) {
  function copyLink() {
    Clipboard.setString(data.link);
    alert('link copiado com sucesso');
  }

  async function handleShare() {
    try {
      const result = await Share.share({
        message: `link: ${data.link}`,
      });
      if (result.action === Share.shareAction) {
        if (result.activityType) {
          console.log('ActiveType');
        } else {
          console.log('Compartilhado com sucesso');
        }
      } else if (result.action === share.dismissedAction) {
        console.log('Modal Fechado');
      }
    } catch (error) {
      console.log(error.message);
    }
  }

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

          <TouchableOpacity onPress={handleShare}>
            <Feather name="share" color="#212743" size={30} />
          </TouchableOpacity>
        </Header>

        <LinkArea>
          <Title>Link encurtado</Title>

          <LongUrl numberOfLines={1}>{data.long_url}</LongUrl>

          <ShortLinkArea activeOpacity={1} onPress={copyLink}>
            <ShortLinkUrl numberOfLines={1}>{data.link}</ShortLinkUrl>
            <TouchableOpacity onPress={copyLink}>
              <Feather name="copy" color="#fff" size={25} />
            </TouchableOpacity>
          </ShortLinkArea>
        </LinkArea>
      </Container>
    </ModalContainer>
  );
}
