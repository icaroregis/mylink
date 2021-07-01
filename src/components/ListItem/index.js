import React from 'react';
import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { ContainerButton, Item, ActionContainer } from './styles';
import Swipeaple from 'react-native-gesture-handler/Swipeable';

export default function ListItem({ data, selectedItem, deleteItem }) {
  function rightActions() {
    return (
      <ActionContainer onPress={() => deleteItem(data.id)}>
        <Feather name="trash" color="fff" size={24} />
      </ActionContainer>
    );
  }
  return (
    <View>
      <Swipeaple renderRightActions={rightActions}>
        <ContainerButton activeOpacity={0.9} onPress={() => selectedItem(data)}>
          <Feather name="link" color="#fff" size={24} />
          <Item numberOfLines={1}>{data.long_url}</Item>
        </ContainerButton>
      </Swipeaple>
    </View>
  );
}
