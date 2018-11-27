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

const items = [
  { uri: 'http://www.portalarp.com.br/arquivos/produtos/AUCAR_CRISTAL_PACOTE_C_05_KG.jpg', 
  product: 'Açucar Cristal 1KG' },
  { uri: 'https://tudoemcafe.com/wp-content/uploads/2014/11/06-caf%C3%A9-pil%C3%A3o-1kg-001.jpg', 
  product: 'Café Pilão' },

  { uri: 'https://http2.mlstatic.com/pasta-de-dente-colgate-maxima-proteco-D_NQ_NP_807703-MLB26465995102_112017-F.jpg', 
  product: 'Pasta de Dente Colgate' },
  { uri: 'https://facafeira.com/wp-content/uploads/2018/05/65349a9315285cfa62bc29bf31fbd0cf.png', 
  product: 'Pacote Macarrão Vitarella' },
  { uri: 'https://www.paodeacucar.com/img/uploads/1/591/554591.png?type=product', 
  product: 'Bandeja Danoninho 6 Uni.' },
  { uri: 'https://http2.mlstatic.com/S_174611-MLB20601716685_022016-O.jpg', 
  product: 'Caixa de Chocolate Nestle' },
  { uri: 'https://images-americanas.b2w.io/produtos/01/00/sku/30589/9/30589963_1SZ.jpg', 
  product: 'Vinho Quinta do Morgado' },
  { uri: 'https://muffatosupermercados.vteximg.com.br/arquivos/ids/221186-400-400/Fuba-Mimoso-Yoki-Pacote-500g-17003.jpg?v=636160058692900000', 
  product: 'Pacote de Fubá Yoki 500g' },
  { uri: 'https://savegnago.vteximg.com.br/arquivos/ids/278710-1000-1000/CARNE-BOVINA-COXAO-MOLE-MOIDO-BANDEJA-50.jpg?v=636276148425930000', 
  product: 'Bandeja Carne Coxão Mole 1Kg' },
  { uri: 'https://produtos-dbcommerce.s3.amazonaws.com/5819.jpg', 
  product: 'Caixa de pizza Sadia' },
  { uri: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA02/CONTENIDOS/201410/16/00118124600349____1__600x600.jpg', 
  product: 'Mix de Verduras 500g' },
  { uri: 'https://mambo.vteximg.com.br/arquivos/ids/209482-190-190/215994_Morango-Bandeja-270g_1157-copiar.jpg?v=636337304891130000', 
  product: 'Bandeja de Morango 300g' },
  { uri: 'https://savegnago.vteximg.com.br/arquivos/ids/277975-1000-1000/MACA-ARGENTINA-750G-BANDEJA.jpg?v=636244065368230000', 
  product: 'Bandeja de Maçã 750g' },
  { uri: 'https://supercatalaoonline.com.br/uploads/images/thumbs/uva-rosada-bandeja-04-09-2018-11-16-870-400.jpg', 
  product: 'Bandeja de Uvas' },
];

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
          subtitle='R$ 2,47'
          chevron
        />

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
