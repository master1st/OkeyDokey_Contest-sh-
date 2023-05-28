import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CoffeeObject = () => {
const width = 357;
  const styles = StyleSheet.create({
    container: {
      width: width,
      height: 357,
      borderRadius: width/2,
      backgroundColor: '#D9D9D9',
    },
  });

  return (
    <View style={styles.container}>
      <Image
        style={{width: 210, height: 300}}
        source={require('OkeyDokeyContest/assets/images/coffee.png')}
      />
    </View>
  );
};

export default CoffeeObject;

