import React, {useEffect, useState, useRef} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import axios from 'axios';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../components/CustomButton';

const FaceRecognition = ({route}) => {
  const camera = useRef(null);
  const devices = useCameraDevices();
  const device = devices.front;
  const reRenderPage = route.params;
  const navigation = useNavigation();

  const [showCamera, setShowCamera] = useState(false);
  const handleContinue = () => {
    navigation.navigate('Home');
  };
useEffect(() => {
  console.log("뒤로가기 성공");
},[reRenderPage])

  useEffect(() => {
    async function getPermission() {
      const newCameraPermission = await Camera.requestCameraPermission();
      console.log(`카메라 권한 ${newCameraPermission}`);
    }
    getPermission();
    // 페이지로 돌아올 때마다 카메라 상태 초기화
  }, []);

  const handleCameraInitialized = () => {
    setShowCamera(true);
  };

  useEffect(() => {
    if (showCamera) {
      autoCaptureAndUpload();
    }
  }, [showCamera]);


  useFocusEffect(
    React.useCallback(() => {
      // setShowCamera(true);
      return () => {
        // 페이지가 벗어날 때 카메라 상태 초기화
        setShowCamera(false);
      };
    }, [reRenderPage])
  );
  const autoCaptureAndUpload = async () => {
    // console.log(camera.current);
    if (camera.current == null) {
      console.log("현재 카메라 Ref 없음")
      return;
    }
  
    try {
      const photo = await camera.current.takeSnapshot({});
      console.log(`사진촬영됐음, ${photo.path}`)
      const imageSource = photo.path; // 사진 경로
     
      let formdata = new FormData();
      formdata.append('image', {
        name: 'test.jpg',
        type: 'image/jpeg',
        uri: 'file://' + imageSource,
      });

      const response = await axios.post('http://3.36.95.105/account/user/face/recognition/', formdata, {
        headers: {'Content-Type': 'multipart/form-data'},
        transformRequest: (data, headers) => {
            return data;
          },
      });
      console.log(`성공 ${response.data}`);
      console.log(response);
      console.log('Access 토큰:', response.data.access);
      console.log('Refresh 토큰:', response.data.refresh);

     await AsyncStorage.setItem("access", response.data.access);
     await AsyncStorage.setItem("refresh", response.data.refresh);
     
        navigation.navigate('Identify');
    // 토큰 받고 시작하는거지 Easymenu를 말이야
    } catch (error) {
 
        // navigation.navigate('Identify');
   
      console.log('😛 Error :', error);
      console.log('😛 Error :', error.message);
      //if 문 추가했음. 401에러일때만 다시 촬영
      if (error.response && error.response.status === 401) {
        alert("얼굴 인식 실패 ...")
      setTimeout(() => {
        autoCaptureAndUpload();
      }, 1000);
      
    }
    }
  };

  if (device == null) {
    return <Text>Camera not available</Text>;
  }

  return (
    <View style={styles.container}>
         <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={styles.header}>
          <Image
            style={{width: 150, height: 50, backgroundColor: 'white'}}
            source={require('OkeyDokeyContest/assets/images/OkDkLogo.png')}
          />
        </View>
      </View>
      <View style={{position: 'relative', width: 400, height: 500}}>
        <View>
          <Text></Text>
          </View>
        <Camera
          ref={camera}
          style={{width: 400, height: 500}}
          device={device}
          isActive={showCamera}
          photo={true}
          onInitialized={handleCameraInitialized} // 카메라 초기화 후에 호출되는 콜백
        />
        <View
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white'}}>정면을 응시해 주세요</Text>
        </View>
      </View>
      <CustomButton
        title={'비회원으로 계속하기'}
        onPress={handleContinue}
        width={'100%'}
        height={110}
        backgroundColor = '#056CF2'
        textColor={'white'}
        fontSize={35}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});

export default FaceRecognition;
