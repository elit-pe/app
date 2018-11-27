import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Avatar, Text } from 'react-native-elements';

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
          icon={{name: 'usd', type: 'font-awesome'}}
          activeOpacity={0.7}
        />
        <Text h4>Crédito: R$ 100,00</Text>

        <ActionButton
          buttonColor="rgba(47,149,220,1)"
          onPress={() => { console.log("olá")}}
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
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
