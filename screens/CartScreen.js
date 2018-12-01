import React from 'react';
import {
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class CartScreen extends React.Component {
  static navigationOptions = {
    title: 'Carrinho',
  };

  render() {
    return (
      <View style={styles.container}>

        <ListItem
          leftAvatar={{ title: 'Arroz Qualitá 1KG', source: { uri: 'https://www.deliveryextra.com.br/img/uploads/1/843/560843.png?type=product' } }}
          title='Arroz Qualitá 1KG'
          subtitle='R$ 2,47'
          chevron
        />
        <ListItem
          leftAvatar={{ title: 'Arroz Qualitá 1KG', source: { uri: 'https://http2.mlstatic.com/kit-5-pacote-de-feijo-preto-ki-caldo-pacote-1kg-D_NQ_NP_603622-MLB27286456190_052018-F.jpg' } }}
          title='Feijão Kicaldo 1KG'
          subtitle='R$ 3,87'
          chevron
        />
        <ListItem
          leftAvatar={{ title: 'Coca Cola 2L.', source: { uri: 'http://shopblob.blob.core.windows.net/1392-produtoimagem/zoom-refri%20coca%20cola%202l.jpg' } }}
          title='Coca Cola 2L.'
          subtitle='R$ 4,50'
          chevron
        />
        <ListItem
          leftAvatar={{ title: 'Biscoito Negresco', source: { uri: 'https://www.paodeacucar.com/img/uploads/1/269/549269.jpg?type=product' } }}
          title='Biscoito Negresco'
          subtitle='R$ 1,50'
          chevron
        />
        <ListItem
          leftAvatar={{ title: 'Cerveja Skol Latão', source: { uri: 'https://muffatosupermercados.vteximg.com.br/arquivos/ids/213870-400-400/cerveja-skol-lata-350-ml-12440.jpg?v=635951253300500000' } }}
          title='Cerveja Skol Latão'
          subtitle='R$ 1,59'
          chevron
        />
        <ListItem
          leftAvatar={{ title: 'Bandeja Peito de Frango 1KG', source: { uri: 'https://www.garciasupermercados.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/f/i/filepeitopifpaf1k.jpg' } }}
          title='Bandeja Peito de Frango 1KG'
          subtitle='R$ 2,47'
          chevron
        />
        <ListItem
          leftAvatar={{ title: 'Sabão em pó Tixan Ypê', source: { uri: 'https://static.wmobjects.com.br/imgres/arquivos/ids/4212999-344-344/.jpg' } }}
          title='Sabão em pó Tixan Ypê'
          subtitle='R$ 2,47'
          chevron
        />
        <ListItem
          leftAvatar={{ title: 'Bandeija de ovos 30 Uni.', source: { uri: 'https://www.paodeacucar.com/img/uploads/1/724/364724x200x200.jpg' } }}
          title='Bandeija de ovos 30 Uni.'
          subtitle='R$ 2,47'
          chevron
        />
        <ListItem
          leftAvatar={{ title: 'Leite em pó Italac', source: { uri: 'http://img.sitemercado.com.br/produtos/d0a2bf56ed24cfa3e2a561e2ea1b66bd241e2b707ce2a17eba815207540b51d9_full.jpg' } }}
          title='Leite em pó Italac'
          subtitle='R$ 2,47'
          chevron
        />
        <ListItem
          leftAvatar={{ title: 'Suco de Laranja Caixa Valle', source: { uri: 'https://cdn-cosmos.bluesoft.com.br/products/del-valle-laranja-caixa-1000-ml_300x300-PU6a432_1.jpg' } }}
          title='Suco de Laranja Caixa Valle'
          subtitle='R$ 2,47'
          chevron
        />
        <ListItem
          leftAvatar={{ title: 'Açucar Cristal 1KG', source: { uri: 'http://www.portalarp.com.br/arquivos/produtos/AUCAR_CRISTAL_PACOTE_C_05_KG.jpg' } }}
          title='Açucar Cristal 1KG'
          subtitle='R$ 3,44'
          chevron
        />

        <ActionButton 
          buttonColor='rgba(47,149,220,1)' 
          icon={<Icon name='money' size={25} />}
          onPress={() => this.props.navigation.navigate('Credit')}
        />

        {/* <ActionButton
          buttonColor="rgba(47,149,220,1)"
          onPress={() => this.props.navigation.navigate('Credit')}
        >
        <Icon name="md-cart" />
        </ActionButton> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
   },
});
