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
import GridView from 'react-native-super-grid';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
      const items = [
        { name: 'RPG', code: '#1abc9c' },
        { name: 'AÇÃO', code: '#2ecc71' },
        { name: 'AVENTURA', code: '#3498db' },
        { name: 'ESTRATÉGIA', code: '#9b59b6' },
        { name: 'ESPORT', code: '#34495e' }, 
        { name: 'PLUZZE', code: '#16a085' },
        { name: 'BATTLE ROYAL', code: '#27ae60' },
      ];

      return (
        <GridView
          itemDimension={130}
          items={items}
          style={styles.gridView}
          renderItem={item => (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('LinksScreen')} title="{item.name}">
              <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                  <Text style={styles.itemName}>{item.name}</Text>
              </View>
            </TouchableOpacity>
            
          )}
        />
    );
  }
}

const styles = StyleSheet.create({
  gridView: {
    paddingTop: 40,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 144,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
});
