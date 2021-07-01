import AsyncStorage from '@react-native-async-storage/async-storage';

//buscar os links salvos
export async function getLinksSave(key) {
  const myLinks = await AsyncStorage.getItem(key);
  let linkSaves = JSON.parse(myLinks) || [];
  return linkSaves;
}

//salvar um link no storage
export async function saveLink(key, newLink) {
  let linkStored = await getLinksSave(key);
  //ignorar link com mesma descrição ou c/ mesmo id
  const hasLink = linkStored.some((link) => link.id === newLink.id);
  if (hasLink) {
    console.log('Link já existe na lista');
    return;
  }

  linkStored.push(newLink);
  await AsyncStorage.setItem(key, JSON.stringify(linkStored));
  console.log('LINK SALVO COM SUCESSO');
}

//deletear algum link específico
export async function deleteLink(links, id) {
  let mylinks = links.filter((item) => {
    return item.id !== id;
  });
  await AsyncStorage.setItem('sujeitoLinks', JSON.stringify(mylinks));
  return mylinks;
}
