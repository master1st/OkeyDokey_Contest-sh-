import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CoffeeObject from './CoffeeObject';
const CustomModal = ({width, height, title}) => {
  return (
    <View style={{width: width, height: height, position: 'absolute'}}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
      <View style={styles.main}>
        <CoffeeObject />
        <Text style={{fontSize: 30, color: 'black', fontWeight: 'bold'}}>
          온도
        </Text>
        <Text style={{fontSize: 30, color: 'black', fontWeight: 'bold'}}>
          사이즈
        </Text>
      </View>
    </View>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F5F7FB',
    alignItems: 'center',
    width: '100%',
  },
  headerTitle: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
  main: {
    backgroundColor: 'white',
    width: '100%',
    height: '50%',
  },
});
