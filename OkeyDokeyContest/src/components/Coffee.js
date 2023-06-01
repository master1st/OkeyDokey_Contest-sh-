import {StyleSheet, Image, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addShopping} from '../redux/slices/shoppingSlice';
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
  goto,
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
  const dispatch = useDispatch();

  const [coffeeInfo, setCoffeeInfo] = useState([
    {
      id: 0,
      name: CoffeeName,
      src: imgsrc,
      price: CoffeePrice,
    },
  ]);
  const handleNavigation = () => {
    if (goto === 'OrderCheck') {
      navigation.push(`${goto}`, {
        qdata: coffeeInfo,
      });
    } else if (goto === 'Nothing') {
      dispatch(
        addShopping({
          title: CoffeeName,
          price: CoffeePrice,
          quantity: 1,
          imgsrc: imgsrc,
          ice: true,
          size: 'Tall',
        }),
      );
    }
  };
  return (
    <TouchableOpacity onPress={handleNavigation} style={{padding: 20}}>
      <View style={styles.coffeeBackgroundImage}>
        <Image
          style={{width: coffeeImageWidth, height: coffeeImageHeight}}
          // source={coffeeInfo[0].src}
          source={{uri: imgsrc}}
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
