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
  { thumbnail: { uri: 'http://f.i.uol.com.br/folha/mercado/images/14312269.jpeg' } },
  { thumbnail: { uri: 'http://www.montarumnegocio.com/wp-content/uploads/2013/05/como-administrar-um-mercadinho.jpg' } },
  { thumbnail: { uri: 'https://c1.staticflickr.com/3/2131/1573651185_d4f3e9aef3.jpg' } },
  { thumbnail: { uri: 'http://lh5.googleusercontent.com/proxy/Q3eVLZziWyfUfOX557I8ZE1dYc-Qrq-1er7lKOEP2pzIPQ_H5dKMnQaLTBgAfGBhUW2UM4By4Ciwi6anUSAjhO6n0selJvp_kOQDKiLpx7eFT6tvZD9BpCTcuU1swbbzk0n6vfAI0ihywMkj2Kf_V_J2hA' } },
  { thumbnail: { uri: 'https://gazetadocerrado.com.br/wp-content/uploads/2016/09/6541471221.jpg' } },
  { thumbnail: { uri: 'http://www.vozdabarra.com.br/wp-content/uploads/2018/08/MERCADINHOS-NETTOS-NOVA-BARRA-BSFCO-ES-5.jpg' } },
  { thumbnail: { uri: 'http://profalex.com.br/wp-content/uploads/2014/12/novo-extra-mongagua-1000x600.jpg' } },
  { thumbnail: { uri: 'https://www.peru-retail.com/wp-content/uploads/HIPER-BOMPRE%C3%87O-WALMART.jpg' } },
  { thumbnail: { uri: 'http://s.glbimg.com/jo/g1/f/original/2010/06/10/pao.jpg300.jpg' } },
  { thumbnail: { uri: 'http://www.saocaetanodigital.com.br/wp-content/uploads/2017/04/sonda.jpg' } },
  { thumbnail: { uri: 'http://www.jornaldaparaiba.com.br/app/uploads/2018/06/bem-mais.jpeg' } },
  { thumbnail: { uri: 'http://www.convemsupermercados.com.br/media/images/galerias/slide-300.jpg' } },
];


export default class AccountScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
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
    height: 125,
  },
});