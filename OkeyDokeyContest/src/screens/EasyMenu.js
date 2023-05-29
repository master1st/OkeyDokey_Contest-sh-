import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Quiz from '../components/Quiz';
import CustomButton from '../components/CustomButton';
import Toggle from '../components/Toggle';
import Coffee from '../components/Coffee';

const EasyMenu = ({navigation, route}) => {
  const {qdata} = route.params;

  return (
    <View style={{flex: 1, backgroundColor: '#F5F7FB'}}>
      <View style={styles.header}>
        <Image
          style={{width: 150, height: 50}}
          source={require('OkeyDokeyContest/assets/images/OkDkLogo.png')}
        />
      </View>
      <View
        style={{alignItems: 'center', justifyContent: 'center', width: '100%'}}>
        <Toggle />
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          marginTop: 22,
        }}>
        <Text
          style={{
            fontSize: 32,
            fontFamily: 'Pretendard',
            fontWeight: 'bold',
            color: '#212121',
          }}>
          {qdata}
        </Text>
      </View>
      <View style={{flex: 9, height: '100%'}}>
        <View style={styles.mid}>
          <View style={styles.midItemBox}>
            <Coffee
              navigation={navigation}
              backgroundImageSize={150}
              coffeeImageWidth={110}
              coffeeImageHeight={180}
              style={styles.imageWrap}
              imgsrc={require('OkeyDokeyContest/assets/images/coffee.png')}
              CoffeeName={'아메리카노'}
              CoffeePrice={'4500원'}
            />
            <Coffee
              navigation={navigation}
              backgroundImageSize={150}
              coffeeImageWidth={110}
              coffeeImageHeight={180}
              style={styles.imageWrap}
              imgsrc={require('OkeyDokeyContest/assets/images/coffee.png')}
              CoffeeName={'아메리카노'}
              CoffeePrice={'4500원'}
            />
            <Coffee
              navigation={navigation}
              backgroundImageSize={150}
              coffeeImageWidth={110}
              coffeeImageHeight={180}
              style={styles.imageWrap}
              imgsrc={require('OkeyDokeyContest/assets/images/coffee.png')}
              CoffeeName={'아메리카노'}
              CoffeePrice={'4500원'}
            />

            <Coffee
              navigation={navigation}
              backgroundImageSize={150}
              coffeeImageWidth={110}
              coffeeImageHeight={180}
              style={styles.imageWrap}
              imgsrc={require('OkeyDokeyContest/assets/images/coffee.png')}
              CoffeeName={'아메리카노'}
              CoffeePrice={'4500원'}
            />
            <Coffee
              navigation={navigation}
              backgroundImageSize={150}
              coffeeImageWidth={110}
              coffeeImageHeight={180}
              style={styles.imageWrap}
              imgsrc={require('OkeyDokeyContest/assets/images/coffee.png')}
              CoffeeName={'아메리카노'}
              CoffeePrice={'4500원'}
            />
            <Coffee
              navigation={navigation}
              backgroundImageSize={150}
              coffeeImageWidth={110}
              coffeeImageHeight={180}
              style={styles.imageWrap}
              imgsrc={require('OkeyDokeyContest/assets/images/coffee.png')}
              CoffeeName={'아메리카노'}
              CoffeePrice={'4500원'}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <CustomButton
            title={'뒤로가기'}
            onPress={() => navigation.pop()}
            width={'50%'}
            height={150}
            backgroundColor={'#6D6D6D'}
            textColor={'white'}
            fontSize={50}
          />
          <CustomButton
            title={'장바구니'}
            onPress={''}
            width={'50%'}
            height={150}
            backgroundColor={'#056CF2'}
            textColor={'white'}
            fontSize={50}
          />
        </View>
      </View>
    </View>
  );
};

export default EasyMenu;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#F5F7FB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mid: {
    flex: 1,
    height: '100%',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  midItemBox: {
    width: '80%',
    height: '80%',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 3,
    marginBottom: 120,
  },
  left: {
    height: '60%',
    marginLeft: 30,
    borderWidth: 1,
    borderColor: 'black',
    flex: 1,
    marginRight: 5,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 3,
  },
  right: {
    height: '60%',
    marginRight: 30,
    borderWidth: 1,
    borderColor: 'black',
    flex: 1,
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 3,
  },
  imageWrap: {
    flex: 2,
  },
});
