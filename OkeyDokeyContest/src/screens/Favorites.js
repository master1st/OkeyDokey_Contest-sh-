import {StyleSheet, Image, View, Text, StatusBar, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import InputModal from '../components/InputModal';
import {SafeAreaView} from 'react-native-safe-area-context';
import FaceModal from '../components/FaceModal';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import RNFS from 'react-native-fs';
import axios from 'axios';
import Coffee from '../components/Coffee';
//즐겨찾는 메뉴 페이지
////얼굴인식 성공 -> 본인확인 계속하기 -> 백엔드에서 받아온 이름, 커피(이름,가격,사진)등의 데이터 GET요청
const Favorites = () => {
  const [Mockdata, SetMockdata] = useState([
    {
      id: 1,
      image: require('../../assets/images/coffee.png'),
      name: '에스프레소',
      price: 1000,
    },
    {
      id: 2,
      image: require('../../assets/images/coffee.png'),
      name: '아메리카노',
      price: 500,
    },
    {
      id: 3,
      image: require('../../assets/images/coffee.png'),
      name: '아메리카노',
      price: 1500,
    },
    {
      id: 4,
      image: require('../../assets/images/coffee.png'),
      name: '아메리카노',
      price: 2000,
    },
  ]);
  const totalCoffeePrice = Mockdata.reduce((total, coffee) => total + coffee.price, 0)
  console.log(totalCoffeePrice);
  const navigation = useNavigation();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('your_local_data.json'); // 목데이터 파일 경로를 입력하세요.
  //       setData(response.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // console.log(Mockdata);
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
          top: '15%',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{width: '75%', height: '100%', position: 'absolute'}}>
          <View style={styles.main}>
            <View style={styles.header}>
              <Text style={{fontWeight: 'bold', color: 'black', fontSize: 40}}>
                김OO님이 즐겨찾는 메뉴
              </Text>
            </View>
            <View style={styles.mid}>
            <View style={styles.midItemBox}>
           
              {Mockdata.map(item => {
                return (
                  <>
                    <Coffee
                      key={item.id}
                      navigation={navigation}
                      goto={'ShoppingBasket'}
                      coffeeImageWidth={120}
                      coffeeImageHeight={140}
                      // style={styles.imageWrap}
                      imgsrc={item.image}
                      CoffeeName={item.name}
                      CoffeePrice={item.price}
                    />
                  </>
                );
              })}
           
            </View>
          </View>
          <View
          style={{
            width: '100%',
            height: 100,
            backgroundColor: '#F5F7FB',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: 'black',
            }}>
            결제금액 {totalCoffeePrice}원
          </Text>
        </View>
          </View>
          <CustomButton
            title={'확인'}
            onPress={() => navigation.navigate('Payment')}
            width={'100%'}
            height={110}
            backgroundColor={'#056CF2'}
            textColor={'white'}
            fontSize={35}
          />
        </View>
      </View>
      <CustomButton
        title={'다른 메뉴 선택하기'}
        onPress={() => navigation.navigate('Qcoffee')}
        width={'100%'}
        height={110}
        backgroundColor={'#056CF2'}
        textColor={'white'}
        fontSize={35}
      />
    </SafeAreaView>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '15%',
    backgroundColor: '#F5F7FB',
    // flex:1,
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
  title: {
    fontSize: 80,
    color: '#056CF2',
    fontWeight: 'bold',
  },
  main: {
    backgroundColor: 'white',
    width: '100%',
    height: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtitleView: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  subtitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  bottomButtons: {
    flexDirection: 'row',
    flex: 1,
  },
  inputView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '75%',
    borderColor: 'black',
    marginBottom: 60,
  },
  inputPhoneNumber: {
    width: '85%',
    height: 60,
    backgroundColor: '#F5F7FB',
    marginBottom: 30,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputPhoneNumberText: {
    fontSize: 25,
    color: 'black',
  },
  imageWrap: {
    flex: 2,
  
  },
  mid: {
    flex: 1,
    height: '100%',
    marginTop: 110,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  midItemBox: {
    width: '100%',
    height: '80%',
    justifyContent: 'flex-start',
    alignContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 55,
    // paddingVertical: 30,
    backgroundColor: 'white',
    marginBottom: 120,
  },
});
