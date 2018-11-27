import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Avatar, Input } from 'react-native-elements';

export default class AccountScreen extends React.Component {
  static navigationOptions = {
    title: 'Conta',
  };

  render() {
    return (
      <View style={styles.container}>

        <Avatar
          size="xlarge"
          rounded
          source={{uri: "https://img00.deviantart.net/b986/i/2011/359/8/1/luffy___awesome_by_cherryinthesun-d4k5xg4.png"}}
          activeOpacity={0.7}
        />
        <Input
          inputStyle={{textAlign: 'center'}}
          placeholder='Nome do Usuário'
          value='Monkey D. Ruffy'
          rightIcon={
            <Icon
              name='pencil'
              size={24}
              color='#adb5bd'
            />
          }
          leftIcon={
            <Icon
              name='user'
              size={24}
              color='#adb5bd'
            />
          }
        />
        <Input
          inputStyle={{textAlign: 'center'}}
          placeholder='Endereço'
          value='Rua Raftel, 123, Pangeia'
          rightIcon={
            <Icon
              name='pencil'
              size={24}
              color='#adb5bd'
            />
          }
          leftIcon={
            <Icon
              name='map-marker'
              size={24}
              color='#adb5bd'
            />
          }
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 10,
  },
});