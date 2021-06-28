import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MeusPedidos = () => {
  const navigation = useNavigation();
  const listPedidos = [
    {id:'1', nome: 'Matheus', telefone: '(21) 98562-4475', email: 'matheus@matheus.com', valor: 'R$ 142,35', data: '15/05/2021'},
    {id:'2', nome: 'Joao', telefone: '(21) 95324-2356', email: 'joao@joao.com', valor: 'R$ 965,00', data: '21/05/2021'},
    {id:'3', nome: 'Henrique', telefone: '(21) 97854-2133', email: 'henrique@henrique.com', valor: 'R$ 348,90', data: '23/05/2021'},
    {id:'4', nome: 'Paulo', telefone: '(21) 97452-6547', email: 'paulo@paulo.com', valor: 'R$ 412,20', data: '01/06/2021'},
    {id:'5', nome: 'Jose', telefone: '(21) 93216-4456', email: 'jose@jose.com', valor: 'R$ 154,70', data: '17/06/2021'},
  ];
 return (
   <View style={styles.conteudo}>
     <View style={styles.header}>
       <Icon
       name="bars"
       size={25}
       color="#666"
       onPress={ () => navigation.toggleDrawer() }
       />
       <Text style={styles.titulo}>Meus Pedidos</Text>
     </View>
     <View style={styles.body}>
     <FlatList
      data={listPedidos}
      keyExtractor={(item) => item.id}
      renderItem={ ({item}) => <Pedido data={item} /> }
      />
     </View>  
   </View>
  );
}

const Pedido = (props) => {
  return (
      <View style={styles.areaPessoa}>
        <Text style={styles.textoTituloPedido}>Pedido #{props.data.id} </Text>
        <Text style={styles.textoPessoa}>Nome: {props.data.nome} </Text>
        <Text style={styles.textoPessoa}>Telefone: {props.data.telefone} </Text>
        <Text style={styles.textoPessoa}>Email: {props.data.email} </Text>
        <Text style={styles.textoPessoa}>Valor: {props.data.valor} </Text>
        <Text style={styles.textoPessoa}>Data: {props.data.data} </Text>
      </View>
    );
}

const styles = StyleSheet.create({
  header:{
    flexDirection: 'row',
    backgroundColor: '#ccc',
    padding: 10,
    borderBottomColor: '#999',
    borderBottomWidth: 0.7
  },
  titulo: {
    fontSize: 20,
    flex: 1,
    textAlign: 'center'
  },
  conteudo: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  body: {
    flex:2,
    flexDirection: 'column',
    alignItems: 'center',
  },
  areaPessoa:{
    backgroundColor: '#efefef',
    width: 395,
    padding: 15,
    marginBottom: 0,
    borderBottomColor: '#ccc',
    borderBottomWidth: 0.7,
  },
  textoPessoa:{
    color: '#555',
    fontSize: 20,
  },
  textoTituloPedido:{
    color: '#555',
    fontSize: 24,
    fontWeight: 'bold'
  }
});

export default MeusPedidos;