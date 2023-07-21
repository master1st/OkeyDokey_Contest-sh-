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
    <TouchableOpacity
      onPress={CoffeeName && CoffeePrice ? handleNavigation : null}
      style={{
        margin: 20,
        borderWidth: 0.1,
        borderColor: 'black',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
        borderRadius: 20,
        elevation: 3,
      }}>
      <Image
        style={{
          width: coffeeImageWidth,
          height: coffeeImageHeight,
          borderRadius: 20, // 모든 꼭지점에 20을 설정
        }}
        source={imgsrc}
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
