import React from 'react';
import {
  Button,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Avatar, List, ListItem, Text } from 'react-native-elements';

export default class CreditScreen extends React.Component {

  static navigationOptions = {
    title: 'Crédito',
  };

  render() {
    return (
      <View style={styles.container}>

        <Avatar
          size="xlarge"
          rounded
          source={{uri: "https://i.ibb.co/t2KZ3pj/Whats-App-Image-2018-11-16-at-09-03-22-1.jpg"}}
          activeOpacity={0.7}
          containerStyle={{alignSelf: 'center'}}
        />
        <Text h4 style={{alignSelf: 'center'}}>Crédito: R$ 250,00</Text>

        <Button
          title="Adicionar Crédito EasyBuy"
          color="#2e9bf4"
          accessibilityLabel="Forma de pagamento"
        />

        <Text h3 style={styles.text}>Formas de Pagamento</Text>

        <ListItem
          leftAvatar={{ title: 'à vista', source: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQox7fkXyHzcymf1F_N1e0ik5io9HsKxlCLUfIwRIZxu0W47Img' } }}
          title='à vista'
          chevron
        />
        <ListItem
          leftAvatar={{ title: 'Cartão de Crédito', source: { uri: 'https://jurosbaixos.com.br/conteudo/wp-content/uploads/sites/2/2017/06/credito202.jpg.jpeg' } }}
          title='Cartão de Crédito'
          chevron
        />
        <ListItem
          leftAvatar={{ title: 'Crédito EasyBuy', source: { uri: 'https://i.ibb.co/t2KZ3pj/Whats-App-Image-2018-11-16-at-09-03-22-1.jpg' } }}
          title='Crédito EasyBuy'
          chevron
        />

        <Button
          title="Finalizar Compra"
          color="#2e9bf4"
          accessibilityLabel="Finalizar a sua compra"
        />

        {/* <ActionButton
          buttonColor="rgba(47,149,220,1)"
          onPress={() => { console.log("olá")}}
        /> */}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  text:{
    alignSelf: 'center',
    marginTop: 20,
  }
});
