import React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = () => {
  const navigation = useNavigation();
 return (
   <View style={styles.conteudo}>

     <View style={styles.header}>
       <Icon
       name="bars"
       size={25}
       color="#666"
       onPress={ () => navigation.toggleDrawer() }
       />
       <Text style={styles.titulo}>Home</Text>
     </View>

     <View style={styles.body}>
      <Image
      source={require('../../img/Logo_Midia3_Topo.png')}
      style={styles.logo}
      />
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
  },
  conteudo: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  body: {
    flex:2,
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default Home;