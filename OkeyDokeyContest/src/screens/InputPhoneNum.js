import {StyleSheet, Image, View, Text, StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';
import InputModal from '../pages/InputModal';
import {SafeAreaView} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const InputPhoneNum = () => {

  useEffect(() => {
    const checkToken = async () => {
      try {
        const accessToken = await AsyncStorage.getItem('access');
        const refreshToken = await AsyncStorage.getItem('refresh');
        const nonmember = await AsyncStorage.getItem('nonmember');
        if ((!accessToken || !refreshToken) && !nonmember) {
          console.log('처음으로 화면 돌아가기');
          navigation.popToTop();
        }
      } catch (error) {
        console.error('Error while checking token:', error);
      }
    };
    checkToken();

    const interval = setInterval(() => {
      checkToken();
    }, 5000);
  
    // 컴포넌트 언마운트 시 타이머 정리
    return () => {
      clearInterval(interval);
    };
  }, []);
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
        <InputModal title="비회원 적립" width="75%" height="100%" />
      </View>
    </SafeAreaView>
  );
};

export default InputPhoneNum;

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
});
