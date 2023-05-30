import {StyleSheet, Image, View, Text, StatusBar} from 'react-native';
import React from 'react';
import CustomButton from '../components/CustomButton';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {resetShopping} from '../redux/slices/shoppingSlice';

import API from '../API/api';

const OrderNum = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const shoppings = useSelector(state => state.shopping.shoppings); //장바구니에 담긴 배열
  console.log(shoppings);

  const sendData = async shoppings => {
    try {
      const requestData = {
        is_pack: true, // 이거는 프로바이더로 가져와줘야함.
        data: shoppings.map(item => ({
          name: item.title,
          quantity: item.quantity,
          temperature: item.ice ? 'iced' : 'hot',
          size: item.size.toLowerCase(),
        })),
      };

      const response = await API.post('/order/create/', requestData);
      console.log('🥹 success : ' + response.data);
    } catch (error) {
      console.log('😝 error : ' + error);
    }

    //쇼핑 배열 초기화함
    dispatch(resetShopping());
    //홈으로 돌아감
    navigation.reset({
      index: 0,
      routes: [{name: 'Home'}],
    });
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative',
      }}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Image
          style={{width: 160, height: 80}}
          source={require('OkeyDokeyContest/assets/images/OkDkLogo.png')}
        />
      </View>
      <View style={styles.div}></View>
      <View style={styles.grayDiv}></View>
      <View
        style={{
          position: 'absolute',
          top: '20%',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{width: '75%', height: '100%', position: 'absolute'}}>
          <View style={styles.main}>
            <View style={styles.modalHeader}>
              <Text style={styles.headerTitle}>주문번호</Text>
            </View>
            <View style={styles.subtitleView}>
              <Text style={styles.orderNumber}>123번</Text>
              <Text style={styles.subtitle}>주문이 완료되었습니다</Text>
            </View>
            <View style={styles.inputView}></View>
          </View>

          <CustomButton
            title={'확인'}
            onPress={() => sendData(shoppings)}
            width={'100%'}
            height={110}
            backgroundColor={'#056CF2'}
            textColor={'white'}
            fontSize={35}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OrderNum;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#F5F7FB',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  div: {
    flex: 9,
  },
  grayDiv: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000000',
    position: 'absolute',
    opacity: 0.3,
  },
  modalHeader: {
    backgroundColor: '#F5F7FB',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '15%',
    marginTop: 0,
  },
  headerTitle: {
    fontSize: 35,
    color: 'black',
    fontWeight: 'bold',
  },
  main: {
    backgroundColor: 'white',
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subtitleView: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  subtitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  orderNumber: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#F25D07',
  },
});
