import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './pages/Home';
import MyLinks from './pages/MyLinks';

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <Drawer.Navigation>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="MyLinks" component={MyLinks} />
    </Drawer.Navigation>
  );
}
