import {StyleSheet, Text, View, Image, Animated, Easing} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React, {useRef, useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {resetShopping, updateOrderNumber} from '../redux/slices/shoppingSlice';

import axios from 'axios';

const Card = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const cardAnimation = useRef(new Animated.Value(0)).current;
  const [animationCount, setAnimationCount] = useState(0);
  const [reverseAnimation, setReverseAnimation] = useState(false);

  const shoppings = useSelector(state => state.shopping.shoppings); //장바구니에 담긴 배열
  const is_pack = useSelector(state => state.shopping.is_pack); //포장여부

  const sendData = async shoppings => {
    const requestData = {
      is_pack: is_pack,
      data: shoppings.map(item => ({
        name: item.title,
        quantity: item.quantity,
        temperature: item.ice ? 'ice' : 'hot',
        size: item.size.toLowerCase(),
      })),
    };

    try {
      const response = await axios.post(
        'http://13.125.232.138/order/create/',
        requestData,
      );

      console.log('[🥹 success ] ' + response.data.order_num);
      dispatch(updateOrderNumber(response.data.order_num));
    } catch (error) {
      console.log('[😝 error ]' + error.message);
    }
  };

  useEffect(() => {
    if (animationCount < 6) {
      //왔다갔다 3번..
      animatedCard(reverseAnimation);
      setReverseAnimation(prevReverse => !prevReverse); //방향전환
    } else {
      sendData(shoppings); //post 요청
      navigation.navigate('OrderNum'); //왔다갔다 다하면 주문번호 화면으로 이동
    }
  }, [animationCount]);

  //reverse false면 위로, true면 아래로 이동
  const animatedCard = reverse => {
    Animated.timing(cardAnimation, {
      toValue: reverse ? 0 : 1,
      easing: Easing.linear,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      setAnimationCount(count => count + 1);
    });
  };

  // 애니메이션 스타일 적용
  const animatedStyle = {
    transform: [
      {
        translateY: cardAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [50, 0], // 애니메이션에 따라 y축 이동
        }),
      },
    ],
  };

  return (
    <View style={styles.cardView}>
      <Animated.View style={[styles.cardImg, animatedStyle]}>
        <Image
          style={{width: 150, height: 100}}
          source={require('OkeyDokeyContest/assets/images/card.png')}
        />
      </Animated.View>
      <View style={styles.outlineBox}>
        <View style={styles.grayBox}></View>
        <View style={styles.redBox}></View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardView: {
    margin: 30,
  },
  outlineBox: {
    width: 275,
    height: 125,
    backgroundColor: 'black',
    borderRadius: 5,
    alignItems: 'center',
  },
  redBox: {
    position: 'absolute',
    width: '100%',
    height: 55,
    backgroundColor: '#F25D07',
    marginTop: 45,
  },
  grayBox: {
    zIndex: 1,
    width: '70%',
    height: 55,
    backgroundColor: '#595959',
    top: '25%',
    borderRadius: 10,
  },
  cardImg: {
    position: 'absolute',
    zIndex: 2,
    marginVertical: 50,
    marginHorizontal: 65,
  },
});
