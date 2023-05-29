import {StyleSheet, Image, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { useState } from 'react';

const Coffee = ({
  navigation,
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
      fontWeight: '500',
      color: '#212121',
      fontSize: 20,
    },
  });

  const [coffeeInfo, setCoffeeInfo] = useState([{
      id: 0,
      name: CoffeeName,
      src: imgsrc,
      price: CoffeePrice,
      },
    ])
  const GoOrdercheckPage = () => {
    navigation.push('OrderCheck', {
      qdata : coffeeInfo,
    })
  }
  return (
    <TouchableOpacity onPress={GoOrdercheckPage} style={{padding: 20}}>
      <View style={styles.coffeeBackgroundImage}>
        <Image
          style={{width: coffeeImageWidth, height: coffeeImageHeight}}
          source={coffeeInfo[0].src}
        />
      </View>
      <View style={{marginTop: 30}}>
        <Text style={styles.CoffeeText}>{CoffeeName}</Text>
        <Text style={styles.CoffeeText}>{CoffeePrice}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Coffee;
