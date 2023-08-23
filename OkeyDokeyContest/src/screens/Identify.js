import {StyleSheet, Image, View, Text, StatusBar} from 'react-native';
import React, {useState, useEffect} from 'react';
import InputModal from '../pages/InputModal';
import {SafeAreaView} from 'react-native-safe-area-context';
import FaceModal from '../components/FaceModal';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const Identify = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState({
    name: "윤석현",
    age: "25",
    major: "computer",
  }); // 회원 정보 상태

  // useEffect(() => {
  //   // 백엔드로부터 회원 정보 GET 요청
  //   // 임시로 setTimeout으로 시뮬레이션하고, 실제 요청 코드로 대체해야 함
  //   const getUserData = async () => {
  //     try {
  //       // GET 요청을 통해 회원 정보를 가져옴
  //       const response = await fetch('backendUrl/userData');
  //       const data = await response.json();
  //       setUserData(data); // 가져온 회원 정보를 상태에 저장
  //     } catch (error) {
  //       console.error('Error fetching user data:', error);
  //     }
  //   };

  //   getUserData();
  // }, []);

  // 본인확인된 모종의 부분이 있을거아냐 여기선 userData라고 가정.
  const handleContinue = () => {
    navigation.navigate('Home');
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
        {/* {userData ? ( */}
          <FaceModal
            userData={userData}
            navigation={navigation}
            headerTitle="본인확인"
            title={`이름`}
            subTitle="으로 계속하시겠어요?"
            width="75%"
            height="100%"
          />
        {/* ) : (
          <Text>백엔드로부터 유저 데이터 받아오면 모달창이 보임.</Text>
        )} */}
      </View>
      <CustomButton
        title={'비회원으로 계속하기'}
        onPress={handleContinue}
        width={'100%'}
        height={110}
        backgroundColor =  'rgba(5, 108, 242, 0.5)'
        textColor={'white'}
        fontSize={35}
      />
    </SafeAreaView>
  );
};

export default Identify;

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
