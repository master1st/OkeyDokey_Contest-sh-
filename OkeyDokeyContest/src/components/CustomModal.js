import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CoffeeObject from './CoffeeObject';
import CustomButton from '../components/CustomButton';

const CustomModal = ({
  width,
  height,
  title,
  coffeeImgsrc,
  coffeeTitle,
  coffeePrice,
}) => {
  return (
    <View style={{width: width, height: height}}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
      <View style={styles.main}>
        <CoffeeObject
          width={'100%'}
          height={220}
          imageSize={200}
          imgsrc={coffeeImgsrc}
          title={coffeeTitle}
          price={coffeePrice}
        />
        <Text style={{fontSize: 30, color: 'black', fontWeight: 'bold'}}>
          온도
        </Text>
        <View
          style={{
            width: '60%',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <CustomButton
            title={'따뜻하게'}
            onPress={''}
            backgroundColor={'#F25D07'}
            textColor={'white'}
            fontSize={20}
            height={50}
            width={150}
          />
          <CustomButton
            title={'차갑게'}
            onPress={''}
            backgroundColor={'#056CF2'}
            textColor={'white'}
            fontSize={20}
            height={50}
            width={150}
          />
        </View>
        <Text style={{fontSize: 30, color: 'black', fontWeight: 'bold'}}>
          사이즈
        </Text>
        <View
          style={{
            width: '90%',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <CustomButton
            title={'톨'}
            onPress={''}
            backgroundColor={'#6D6D6D'}
            textColor={'white'}
            fontSize={20}
            height={50}
            width={150}
          />
          <CustomButton
            title={'그란데'}
            onPress={''}
            backgroundColor={'#6D6D6D'}
            textColor={'white'}
            fontSize={20}
            height={50}
            width={150}
          />
          <CustomButton
            title={'벤티'}
            onPress={''}
            backgroundColor={'#6D6D6D'}
            textColor={'white'}
            fontSize={20}
            height={50}
            width={150}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <CustomButton
          width={'100%'}
          title={'확인'}
          onPress={''}
          backgroundColor={'#056CF2'}
          fontSize={35}
          height={100}
          textColor={'white'}
        />
      </View>
    </View>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F5F7FB',
    alignItems: 'center',
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
  main: {
    backgroundColor: 'white',
    width: '100%',
    flex: 7,
    paddingHorizontal: 30,
    justifyContent: 'space-around',
  },

  footer: {
    flex: 1,
  },
});
