import React from 'react';
import StatusBarPage from '../../components/StatusBarPage';
import { Container, Title, ListLinks } from './styles';
import Menu from '../../components/Menu';
import ListItem from '../../components/ListItem';

export default function MyLinks() {
  return (
    <Container>
      <StatusBarPage barStyle="light-content" backgroundColor="#132742" />
      <Menu />
      <Title>Meus Links</Title>
      <ListLinks
        data={[{ id: 1, link: 'teste@teste.com' }]}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ListItem data={item} />}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false} //tirar a barra de rolagem
      />
    </Container>
  );
}
