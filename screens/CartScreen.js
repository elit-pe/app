import React from 'react';
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

import { ExpoConfigView } from '@expo/samples';

export default class CartScreen extends React.Component {
  static navigationOptions = {
    title: 'Carrinho',
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Feijão Caldo 1KG'},
            {key: 'CocaCola 2L'},
            {key: 'Arroz Qualitá 1KG'},
            {key: 'Leite em pó Italac 250mg'},
            {key: '1KG Carne Picanha'},
            {key: 'Café 500mg'},
            {key: 'Biscoito Negresco'},
            {key: 'Cerveja Skol pacote 9 uni.'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10
   },
   item: {
     padding: 5,
     fontSize: 10,
     height: 44,
   },
});
