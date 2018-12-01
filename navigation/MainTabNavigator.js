import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import ShopScreen from '../screens/ShopScreen';
import ProductsScreen from '../screens/ProductsScreen';
import CartScreen from '../screens/CartScreen';
import CreditScreen from '../screens/CreditScreen';
import AccountScreen from '../screens/AccountScreen';

const ShopStack = createStackNavigator({
  Shop: ShopScreen,
});

ShopStack.navigationOptions = {
  tabBarLabel: 'Mercados',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-shop${focused ? '' : '-outline'}`
          : 'shop'
      }
    />
  ),
};

const ProductsStack = createStackNavigator({
  Products: ProductsScreen,
});

ProductsStack.navigationOptions = {
  tabBarLabel: 'Produtos',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-shopping-bag' : 'shopping-bag'}
    />
  ),
};

const CartStack = createStackNavigator({
  Cart: CartScreen,
});

CartStack.navigationOptions = {
  tabBarLabel: 'Carrinho',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-shopping-cart' : 'shopping-cart'}
    />
  ),
};

const CreditStack = createStackNavigator({
  Credit: CreditScreen,
});

CreditStack.navigationOptions = {
  tabBarLabel: 'Crédito',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-credit' : 'credit'}
    />
  ),
};

const AccountStack = createStackNavigator({
  Account: AccountScreen,
});

AccountStack.navigationOptions = {
  tabBarLabel: 'Conta',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-user' : 'user'}
    />
  ),
};

export default createBottomTabNavigator({
  ShopStack,
  ProductsStack,
  CartStack,
  CreditStack,
  AccountStack,
});
