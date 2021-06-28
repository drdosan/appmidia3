import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import MinhaConta from './src/pages/MinhaConta';
import MeusPedidos from './src/pages/MeusPedidos';
const Drawer = createDrawerNavigator();

const App = () => {
  return(
  <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Minha Conta" component={MinhaConta} />
      <Drawer.Screen name="Meus Pedidos" component={MeusPedidos} />
      <Drawer.Screen name="Sobre" component={Sobre} />
    </Drawer.Navigator>
  </NavigationContainer>
  );
}


export default App;
