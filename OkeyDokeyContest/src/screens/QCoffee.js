import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import API from '../API/api';

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
import { useDispatch, useSelector } from 'react-redux';
import { resetOrderNumber } from '../redux/slices/shoppingSlice';
const QCoffee = ({navigation}) => {

  const dispatch = useDispatch();
  const [result, setResult] = useState([]);
  const [coffeeText, setCoffeeText] = useState([]);
  const [nonCoffeeText, setNonCoffeeText] = useState([]);
  //일반메뉴 받아오기 함수
  const fetchData = async () => {
    try {
      const response = await API.get("/category1/list/");
      const results = response.data;
      setResult(results);
      console.log(results);
      const coffeeItem = results.find(item => item.name === "커피");
      const nonCoffeeItem = results.find(item => item.name === "커피가 아닌것");
      
      if (coffeeItem && nonCoffeeItem) {
        setCoffeeText(coffeeItem);
        setNonCoffeeText(nonCoffeeItem);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleCoffee = () => {
    const Coffee = coffeeText.name.replace(/\n/g, '');
    navigation.push('Qmilk', {
      qCoffee: Coffee,
      qCoffeeid: coffeeText.id,
    });
  };
  const handleNonCoffee = () => {
    const nonCoffee = nonCoffeeText.name.replace(/\n/g, '');
    navigation.push('Qmilk', {
      qCoffee: nonCoffee,
      qCoffeeid : nonCoffeeText.id,
    });
  };
  let coffeedata = nonCoffeeText.name;
  if(coffeedata){
    coffeedata = coffeedata.replace(/\s/g, '\n');
  }
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
          flex: 9,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={styles.mid}>
          <Quiz handleEvent={handleCoffee} QuizText={coffeeText.name} height={"90%"}/>
          <Quiz handleEvent={handleNonCoffee} QuizText={coffeedata} height={"90%"}/>
        </View>
        <View style={{flexDirection: 'row'}}>
          <CustomButton
            title={'뒤로가기'}
            onPress={() => {
              dispatch(resetOrderNumber());
              navigation.pop();
            }}
            width={'50%'}
            height={150}
            backgroundColor={'#056CF2'}
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

export default QCoffee;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#F5F7FB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mid: {
    marginTop: 50,
    width: '80%',
    height: '100%',
    flex: 1,
    marginBottom: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
});
