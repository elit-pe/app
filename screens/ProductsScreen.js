import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { ExpoConfigView } from '@expo/samples';
import GridList from 'react-native-grid-list';

const items = [
  { thumbnail: { uri: 'https://www.deliveryextra.com.br/img/uploads/1/843/560843.png?type=product' } },
  { thumbnail: { uri: 'https://http2.mlstatic.com/kit-5-pacote-de-feijo-preto-ki-caldo-pacote-1kg-D_NQ_NP_603622-MLB27286456190_052018-F.jpg' } },
  { thumbnail: { uri: 'http://shopblob.blob.core.windows.net/1392-produtoimagem/zoom-refri%20coca%20cola%202l.jpg' } },
  { thumbnail: { uri: 'https://www.paodeacucar.com/img/uploads/1/269/549269.jpg?type=product' } },
  { thumbnail: { uri: 'https://muffatosupermercados.vteximg.com.br/arquivos/ids/213870-400-400/cerveja-skol-lata-350-ml-12440.jpg?v=635951253300500000' } },
  { thumbnail: { uri: 'http://hirotafood.com.br/wp-content/uploads/2017/08/Carne-bovina-ganha-competitividade-em-rela%C3%A7%C3%A3o-a-carne-de-frango-em-maio.jpg' } },
  { thumbnail: { uri: 'https://static.wmobjects.com.br/imgres/arquivos/ids/4212999-344-344/.jpg' } },
  { thumbnail: { uri: 'https://www.paodeacucar.com/img/uploads/1/724/364724x200x200.jpg' } },
  { thumbnail: { uri: 'http://img.sitemercado.com.br/produtos/d0a2bf56ed24cfa3e2a561e2ea1b66bd241e2b707ce2a17eba815207540b51d9_full.jpg' } },
  { thumbnail: { uri: 'https://cdn-cosmos.bluesoft.com.br/products/del-valle-laranja-caixa-1000-ml_300x300-PU6a432_1.jpg' } },
  { thumbnail: { uri: 'http://www.portalarp.com.br/arquivos/produtos/AUCAR_CRISTAL_PACOTE_C_05_KG.jpg' } },
  { thumbnail: { uri: 'https://tudoemcafe.com/wp-content/uploads/2014/11/06-caf%C3%A9-pil%C3%A3o-1kg-001.jpg' } },
];

export default class ProductsScreen extends React.Component {
  static navigationOptions = {
    title: 'Produtos'
  };

  renderItem = ({ item, index }) => (
    <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeScreen')} title="{item.name}">
      <Image style={stylesNews.image} source={item.thumbnail} />
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={stylesNews.container}>
        <GridList
          showSeparator
          separatorBorderWidth={10}
          data={items}
          numColumns={3}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const stylesNews = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    height: 100,
  },
});
