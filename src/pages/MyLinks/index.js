import React, { useState, useEffect } from 'react';
import StatusBarPage from '../../components/StatusBarPage';
import { Container, Title, ListLinks } from './styles';
import Menu from '../../components/Menu';
import ListItem from '../../components/ListItem';
import { useIsFocused } from '@react-navigation/native';
import { getLinksSave } from '../../components/utils/storeLinks';

export default function MyLinks() {
  const isFocused = useIsFocused;
  const [links, setLinks] = useState([]);
  const [data, setData] = useState({});
  const [modalVisible, setVisible] = useState(false);

  useEffect(() => {
    async function getLinks() {
      const result = await getLinksSave('1235468745');
      setLinks(result);
      console.log(result);
    }
    getLinks();
  }, []);

  return (
    <Container>
      <StatusBarPage barStyle="light-content" backgroundColor="#132742" />
      <Menu />
      <Title>Meus Links</Title>
      <ListLinks
        data={links}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ListItem data={item} />}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false} //tirar a barra de rolagem
      />
    </Container>
  );
}
