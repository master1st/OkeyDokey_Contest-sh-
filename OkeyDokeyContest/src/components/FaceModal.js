import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomButton from './CustomButton';

// 얼굴인식이 통과하는 순간 어떤 값이 넘어 올 것임.
// 비회원으로 계속하기는 바로 Home으로 navigate
// 즉 값이 있냐 없냐에 따라 "본인확인창"이나올건지, "Home"이 나오는지 삼항연산 체크

const FaceModal = ({
  userData,
  width,
  height,
  title,
  headerTitle,
  subTitle,
  navigation,
}) => {
  const memberCheck = () => {
    navigation.navigate('Home',userData);
  };
  //home으로 가서 버튼을 눌렀을때 얼굴인식 성공 데이타가 넘어온다면 즐겨찾는 메뉴로 바로 navigate
  return (
    <View style={{width: width, height: height, position: 'absolute'}}>
      <View style={styles.main}>
        <View style={styles.header}>
          <Text style={{fontWeight: 'bold', color: 'black', fontSize: 40}}>
            {headerTitle}
          </Text>
        </View>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.subtitleView}>
          <Text style={styles.subtitle}>{subTitle}</Text>
        </View>
      </View>

      <View style={styles.bottomButtons}>
        <CustomButton
          title={'뒤로 가기'}
          onPress={() => navigation.goBack()}
          width={'50%'}
          height={110}
          backgroundColor={'#6D6D6D'}
          textColor={'white'}
          fontSize={35}
        />
        <CustomButton
          title={'계속하기'}
          onPress={memberCheck}
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

export default FaceModal;

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '15%',
  },
  title: {
    fontSize: 80,
    color: '#056CF2',
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
});
