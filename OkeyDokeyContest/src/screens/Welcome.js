import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Welcome = () => {
  const [distanceSensor, setDistanceSensor] = useState(true);
  const navigation = useNavigation();
  useEffect(() => {
    // 백엔드 API를 호출하여 distanceSensor 값을 받아온다고 가정
    // API 호출 로직은 해당 프로젝트의 백엔드와의 통신 방식에 따라 구현되어야 합니다.
    const fetchData = async () => {
      try {
        // 백엔드 API 호출
        // const response =` await fetch('API_ENDPOINT');
        // const data = await response.json();

        // 받아온 데이터 중 distanceSensor 값 사용
        // setDistanceSensor(data.distanceSensor);

        // 가상의 예시: 3초 후에 distanceSensor 값을 true로 변경
        const timer = setTimeout(() => {
          setDistanceSensor(true);
        }, 3000);

        return () => clearTimeout(timer);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (distanceSensor) {
      navigation.navigate('CameraScreen');
    }
  }, [distanceSensor, navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1, backgroundColor: '#F5F7FB'}}>
        <View style={styles.header}>
          <Image
            style={{width: 150, height: 50}}
            source={require('OkeyDokeyContest/assets/images/OkDkLogo.png')}
          />
        </View>
      </View>
      <View
        style={{
          flex: 9,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F5F7FB',
        }}>
        <Text style={{fontSize: 50, marginBottom: 100}}>음메카우 상명대점</Text>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#F5F7FB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
});
