import {StyleSheet, Image, View, Text, StatusBar} from 'react-native';
import React, {useState} from 'react';
import InputModal from '../components/InputModal';
import {SafeAreaView} from 'react-native-safe-area-context';
import FaceModal from '../components/FaceModal';
import CustomButton from '../components/CustomButton';

const Favorites = () => {
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
        <FaceModal 
        headerTitle="김OO님이 즐겨찾는 메뉴" 
        title="김OO" 
        subTitle="으로 계속하시겠어요?"
        width="75%" 
        height="100%" />
      </View>
      <CustomButton
          title={'비회원으로 계속하기'}
          onPress={() => navigation.navigate('Payment')}
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
