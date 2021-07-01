import React, { useState, useEffect } from 'react';
import StatusBarPage from '../../components/StatusBarPage';
import { Container, Title, ListLinks } from './styles';
import Menu from '../../components/Menu';
import ListItem from '../../components/ListItem';
import { useIsFocused } from '@react-navigation/native';
import { getLinksSave } from '../../components/utils/storeLinks';
import ModalLink from '../../components/ModalLink';
import { Modal } from 'react-native';

export default function MyLinks() {
  const isFocused = useIsFocused;
  const [links, setLinks] = useState([]);
  const [data, setData] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  function handleItem(item) {
    setData(item);
    setModalVisible(true);
  }

  useEffect(() => {
    async function getLinks() {
      const result = await getLinksSave('sujeitolinks');
      setLinks(result);
      console.log(result);
    }
    getLinks();
  }, [isFocused]);

  return (
    <Container>
      <StatusBarPage barStyle="light-content" backgroundColor="#132742" />
      <Menu />
      <Title>Meus Links</Title>
      <ListLinks
        data={links}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <ListItem data={item} selectedItem={handleItem} />
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false} //tirar a barra de rolagem
      />

      <Modal visible={modalVisible} transparent animationType="slide">
        <ModalLink onClose={() => setModalVisible(false)} data={data} />
      </Modal>
    </Container>
  );
}
