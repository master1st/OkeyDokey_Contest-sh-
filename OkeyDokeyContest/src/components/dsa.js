import {StyleSheet, Image, View, Text} from 'react-native';
import React from 'react';

const Coffee = ({
  backgroundImageSize,
  title,
  price,
  imgsrc,
  coffeeImageWidth,
  coffeeImageHeight,
  CoffeeName,
  CoffeePrice,
}) => {
  const styles = StyleSheet.create({
    coffeeBackgroundImage: {
      width: backgroundImageSize,
      height: backgroundImageSize,
      borderRadius: backgroundImageSize / 2,
      backgroundColor: '#D9D9D9',
      alignItems: 'center',
    },
    CoffeeText: {
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontFamily: 'Pretendard',
      fontWeight: 'bold',
      fontSize: 20,
    },
  });
  return (
    <View
      style={{
        width: 200,
        height: 250,
        alignItems: 'center',
        padding: 40,
      }}>
      <View style={styles.coffeeBackgroundImage}>
        <Image
          style={{width: coffeeImageWidth, height: coffeeImageHeight}}
          source={require('OkeyDokeyContest/assets/images/coffee.png')}
        />
      </View>
      <View style={{width: '100%', marginTop: 30, alignItems: 'center'}}>
        <Text style={styles.CoffeeText}>{CoffeeName}</Text>
        <Text style={styles.CoffeeText}>{CoffeePrice}</Text>
      </View>
    </View>
  );
};

export default Coffee;
