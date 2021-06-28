import React from 'react';
import { View, Image, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();
  setTimeout(() => {
    navigation.navigate('Home');
  }, 5000);
 return (
   <View style={styles.conteudo}>
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
  logo: {
    width: 239,
    height: 65,
  },
  conteudo: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#aaa',
  },
  body: {
    flex:2,
    flexDirection: 'row',
    alignItems: 'center'
  }
});


export default Splash;