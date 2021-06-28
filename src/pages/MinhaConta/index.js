import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MinhaConta = () => {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [email, setEmail] = useState('');

  const updateConta = () => {
    let dados = 'Nome: ' + nome 
    + '\n' + 'Telefone: ' + telefone 
    + '\n' + 'E-mail: ' + email 
    + '\n' + 'Endereço: ' + endereco;
    alert('Cadastro Atualizado com sucesso!\n'+ dados);
  }

  return (
   <View style={styles.conteudo}>

     <View style={styles.header}>
       <Icon
       name="bars"
       size={25}
       color="#666"
       onPress={ () => navigation.toggleDrawer() }
       />
       <Text style={styles.titulo}>Minha Conta</Text>
     </View>

     <View style={styles.body}>
      <TextInput 
      style={styles.input}
      placeholder="Nome"
      onChangeText={text => setNome(text)}
      />
      <TextInput 
      style={styles.input}
      placeholder="Telefone"
      onChangeText={text => setTelefone(text)}
      />
      <TextInput 
      style={styles.input}
      placeholder="E-mail"
      onChangeText={text => setEmail(text)}
      />
      <TextInput 
      style={styles.input}
      placeholder="Endereço"
      onChangeText={text => setEndereco(text)}
      />
      <TouchableOpacity style={styles.botao} onPress={updateConta}>
        <Text style={styles.txtBotao}>Enviar</Text>
      </TouchableOpacity>
     </View>
     
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
  logo: {
    width: 239,
    height: 65,
    marginBottom: 50
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
    paddingTop: 30
  },
  input: {
    fontSize: 20,
    color: '#555',
    marginTop: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    width: 370,
    padding: 15,
    borderRadius: 15
  },
  botao: {
    marginTop: 15,
    width: 370,
    borderWidth: 0.5,
    borderColor: '#ddd',
    backgroundColor: '#ccc',
    borderRadius: 15,
    padding: 15,
  },
  txtBotao: {
    fontSize: 20,
    textAlign: 'center',
    color: '#555',
  },
});

export default MinhaConta;