import React, { useState, useEffect } from 'react';
import StatusBarPage from '../../components/StatusBarPage';
import {
  Container,
  Title,
  ListLinks,
  ContainerEmpty,
  WarningText,
} from './styles';
import Menu from '../../components/Menu';
import ListItem from '../../components/ListItem';
import { useIsFocused } from '@react-navigation/native';
import { getLinksSave, deleteLink } from '../../components/utils/storeLinks';
import ModalLink from '../../components/ModalLink';
import { Modal, ActivityIndicator } from 'react-native';

export default function MyLinks() {
  const isFocused = useIsFocused;
  const [links, setLinks] = useState([]);
  const [data, setData] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  function handleItem(item) {
    setData(item);
    setModalVisible(true);
  }

  async function handleDelete(id) {
    const result = await deleteLink(links, id);
    setLinks(result);
  }

  useEffect(() => {
    async function getLinks() {
      const result = await getLinksSave('sujeitolinks');
      setLinks(result);
      setLoading(false);
    }
    getLinks();
  }, [isFocused]);

  return (
    <Container>
      <StatusBarPage barStyle="light-content" backgroundColor="#132742" />
      <Menu />
      <Title>Meus Links</Title>
      {
        <ContainerEmpty>
          <ActivityIndicator color="#fff" />
        </ContainerEmpty>
      }
      {!loading && links.length === 0 && (
        <ContainerEmpty>
          <WarningText>Você ainda não possui nenhum link salvo.</WarningText>
        </ContainerEmpty>
      )}
      <ListLinks
        data={links}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <ListItem
            data={item}
            selectedItem={handleItem}
            deleteItem={handleDelete}
          />
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
