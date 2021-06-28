import React from 'react';
import { View, Text, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawer = (props) => {
  const navigation = useNavigation();
  return(
    <DrawerContentScrollView {...props} >
      <DrawerItem label="Home"/>
      <DrawerItem label="Minha Conta" onPress={ () => navigate('Contato') }/>
      <DrawerItem label="Meus Pedidos"/>
      <DrawerItem label="Sobre"/>
    </DrawerContentScrollView>
  );
}

export default CustomDrawer;
