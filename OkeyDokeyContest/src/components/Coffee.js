import {StyleSheet, Image, View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
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
    CoffeeText: {
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontFamily: 'Pretendard',
      fontWeight: '500',
      color: 'black',
      fontSize: 20,
    },
  });
  const dispatch = useDispatch();

  const [coffeeInfo, setCoffeeInfo] = useState([
    {
      id: 0,
      name: '',
      src: '',
      price: 0,
    },
  ]);

  useEffect(() => {
    const updatedCoffeeInfo = [
      {
        id: 0,
        name: CoffeeName,
        src: imgsrc,
        price: CoffeePrice,
      },
    ];
    setCoffeeInfo(updatedCoffeeInfo);
  }, [imgsrc]);

  // const handleNavigation = () => {
  //   if (goto === 'OrderCheck') {
  //     navigation.push(`${goto}`, {
  //       qdata: coffeeInfo,
  //     });
  //   } else if (goto === 'Nothing') {
  //     dispatch(
  //       addShopping({
  //         title: CoffeeName,
  //         price: CoffeePrice,
  //         quantity: 1,
  //         imgsrc: imgsrc,
  //         ice: true,
  //         size: 'Tall',
  //       }),
  //     );
  //   }
  // };
  const handleNavigation = () => {
    console.log(goto);
    navigation.push('OrderCheck', {
      qdata: coffeeInfo,
      goto: goto,
    });
  };

  return (
    <TouchableOpacity onPress={handleNavigation} style={{padding: 20}}>
      <Image
        style={{
          width: coffeeImageWidth,
          height: coffeeImageHeight,
          borderTopLeftRadius: CoffeeName && CoffeePrice ? 20 : 10,
          borderTopRightRadius: CoffeeName && CoffeePrice ? 20 : 10,
          borderBottomLeftRadius: CoffeeName && CoffeePrice ? 0 : 10,
          borderBottomRightRadius: CoffeeName && CoffeePrice ? 0 : 10,
        }}
        source={{uri: imgsrc}}
        // source={{uri: imgsrc}}
      />
      {CoffeeName && CoffeePrice ? (
        <View
          style={{
            padding: 5,
            backgroundColor: '#F5F7FB',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}>
          <Text style={styles.CoffeeText}>{CoffeeName}</Text>
          <Text style={styles.CoffeeText}>
            {CoffeePrice ? CoffeePrice + '원' : ''}
          </Text>
        </View>
      ) : (
        <></>
      )}
    </TouchableOpacity>
  );
};

export default Coffee;
