import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomButton from './CustomButton';
import KeyPad from './KeyPad';

const InputModal = ({width, height, title}) => {
  return (
    <View style={{width: width, height: height, position: 'absolute'}}>
      <View style={styles.main}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{title}</Text>
        </View>
        <View style={styles.subtitleView}>
          <Text style={styles.subtitle}>전화번호를 입력해 주세요.</Text>
        </View>
        <View style={styles.inputView}>
          <View style={styles.inputPhoneNumber}></View>
          <KeyPad />
        </View>
      </View>

      <View style={styles.bottomButtons}>
        <CustomButton
          title={'적립 안하기'}
          onPress={''}
          width={'50%'}
          height={110}
          backgroundColor={'#6D6D6D'}
          textColor={'white'}
          fontSize={35}
        />
        <CustomButton
          title={'적립하기'}
          onPress={''}
          width={'50%'}
          height={110}
          backgroundColor={'#056CF2'}
          textColor={'white'}
          fontSize={35}
        />
      </View>
    </View>
  );
};

export default InputModal;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F5F7FB',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '15%',
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
    color: 'black',
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
  },
});
