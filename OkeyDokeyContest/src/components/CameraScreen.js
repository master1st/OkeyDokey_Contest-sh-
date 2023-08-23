import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Text,
  Linking,
  Image,
} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

import {useNavigation} from '@react-navigation/native';
import * as RNFS from 'react-native-fs';
import CustomButton from './CustomButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeModules } from 'react-native';

const CameraModule = NativeModules.CameraModule;
const CameraScreen = ({state}) => {
  const navigation = useNavigation();
  const camera = useRef(null);
  const devices = useCameraDevices();
  const device = devices.front;

  const [showCamera, setShowCamera] = useState(true);
  const [imageSource, setImageSource] = useState(null);
  const [photos, setPhotos] = useState([]); // 보낼 사진들 빈 배열로 초기화
  const [imageObject, setImageObject] = useState('');

  useEffect(() => {
    async function getPermission() {
      const newCameraPermission = await Camera.requestCameraPermission();
      console.log(newCameraPermission);
    }
    getPermission();


    const FPS = 30;  // Target number of frames processed per second.
    function captureFrame() {
      var cap = new cv.VideoCapture(camera);
      console.log('Capturing frame...');
      var begin = Date.now();
      cap.read(frame);  // Read a frame from camera
      cv.cvtColor(frame, frameBGR, cv.COLOR_RGBA2BGR);

      var faces = detectFaces(frameBGR);
      faces.forEach(function (rect) {
        cv.rectangle(frame, { x: rect.x, y: rect.y }, { x: rect.x + rect.width, y: rect.y + rect.height }, [0, 255, 0, 255]);

        var face = frameBGR.roi(rect);
        var name = recognize(face);
        cv.putText(frame, name, { x: rect.x, y: rect.y }, cv.FONT_HERSHEY_SIMPLEX, 1.0, [0, 255, 0, 255]);
      });

      cv.imshow(output, frame);

      // Loop this function.
      var delay = 1000 / FPS - (Date.now() - begin);
      setTimeout(captureFrame, delay);

    };
    function loadModels(callback) {
      console.log('Loading models...');
      var utils = new Utils('');
      var proto = 'https://raw.githubusercontent.com/opencv/opencv/master/samples/dnn/face_detector/deploy_lowres.prototxt';
      var weights = 'https://raw.githubusercontent.com/opencv/opencv_3rdparty/dnn_samples_face_detector_20180205_fp16/res10_300x300_ssd_iter_140000_fp16.caffemodel';
      var recognModel = 'https://raw.githubusercontent.com/pyannote/pyannote-data/master/openface.nn4.small2.v1.t7';
      utils.createFileFromUrl('face_detector.prototxt', proto, () => {
        document.getElementById('status').innerHTML = 'Downloading face_detector.caffemodel';
        utils.createFileFromUrl('face_detector.caffemodel', weights, () => {
          document.getElementById('status').innerHTML = 'Downloading OpenFace model';
          utils.createFileFromUrl('face_recognition.t7', recognModel, () => {
            document.getElementById('status').innerHTML = '';
            netDet = cv.readNetFromCaffe('face_detector.prototxt', 'face_detector.caffemodel');
            netRecogn = cv.readNetFromTorch('face_recognition.t7');
            callback();
          });
        });
      });
    };
    captureFrame();
    loadModels()
    loadModels(function () {
      captureFrame();
      document.getElementById('addPersonButton').disabled = false;
      console.log('captureFrame')
      
    });
  }, []);
  // useEffect(() => {
  //   // if(얼굴인식이 되었다면)
  //   const timer = setTimeout(() => {
  //     navigation.navigate('Identify');
  //   }, 3000)
  //   return () => clearTimeout(timer);
  //   // else 얼굴인식이 안되었다면 다시 5번까지 인식  
  // }, [showCamera]);



//   //김연출의 키오스크 사진 보내기
//   const uploadData = async () => {
//     // 폼데이터 생성
//     var body = new FormData();
//     var photo = {
//       uri: imageSource,
//       type: 'multipart/form-data',
//       name: `${imageObject}.jpg`,
//     };
//     body.append('image', photo);
//     // 서버에게 전송
//     axios.post('serverUrl', body, {
//       headers: {'content-type': 'multipart/form-data'},
//     });
//     console.log('hi');
  
//     // 페이지 이동
//     navigation.navigate('Identify');
//   };


  const capturePhoto = async () => {
    if (camera.current == null) {
      return;
    }
    // navigation.navigate('Identify');
    const photo = await camera.current.takePhoto({});
    setImageSource(photo.path);
    console.log(photo.path);
    setPhotos(prevPhotos => [...prevPhotos, photo.path]);
    if (state == 1) {
      setImageObject(photo);
      uploadData();
    }
    // await RNFS.moveFile(
    //   `/${photo.path}`,
    //   `${RNFS.PicturesDirectoryPath}/temp.jpg`,
    // ).then(() =>
    //   console.log(
    //     'lmage Moved ',
    //     `${photo.path}`,
    //     '--to--',
    //     `${RNFS.PicturesDirectoryPath}`,
    //   ),
    // );
  };


  if (device == null) {
    return <Text>Camera not available</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
       <View style={{ flex: 1, backgroundColor: '#F5F7FB'}}>
        <View style={styles.header}>
          <Image
            style={{ width: 150, height: 50 }}
            source={require('OkeyDokeyContest/assets/images/OkDkLogo.png')}
          />
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: 'rgba(217, 217, 217, 0.75)'}}>
        <View style={styles.message}>
          <Text style={{fontSize: 24, fontWeight: 'bold', color:'black'}}>오키도키로 키오스크를 편리하게 이용하세요! </Text>
          <Image
            style={{marginLeft:30 ,width: 80, height: 80 }}
            source={require('OkeyDokeyContest/assets/images/Rectangle.png')}
          />
        </View>
      </View>
      {showCamera ? (
        <>
          <View style={{position: 'relative', flex:8, width: '100%', height: '100%'}}>
            <Camera
              ref={camera}
              style={{width: '100%', height: '100%'}}
              device={device}
              isActive={showCamera}
              photo={true}
            >
              
            </Camera>
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
          onPress={() => navigation.navigate('Home')}
          width={'100%'}
          height={110}
          backgroundColor={'#056CF2'}
          textColor={'white'}
          fontSize={35}
        />
          {/* <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.camButton}
              onPress={() => {
                capturePhoto();
                setShowCamera(false);
              }}
            />
          </View> */}
        </>
      ) : (
        <>
          {imageSource !== null ? (
            <Image
              style={styles.image}
              source={{
                uri: `file://'${imageSource}`,
              }}
            />
          ) : (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{justifyContent: 'center', alignItems: 'center'}}>
                얼굴을 등록하지 않으면 서비스 이용이 불가능합니다.
              </Text>
              <View style={styles.backButton}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#056CF2',
                    padding: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    borderWidth: 2,
                    borderColor: '#fff',
                    width: 100,
                  }}>
                  <Text style={{color: 'white', fontWeight: '500'}}>확인</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}

          <View style={styles.button}>
            <TouchableOpacity>
              <Text style={{color: 'white', fontWeight: '500'}}>
                {imageSource}
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  message : {
    flex: 1,
    flexDirection:'row',
    // backgroundColor:'rgba(217, 217, 217, 0.75)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#F5F7FB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    position: 'absolute',
    backgroundColor: 'gray',
    top: 0,
    padding: 20,
  },
  backButton: {
    backgroundColor: 'rgba(0,0,0,0.0)',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    top: 0,
    padding: 20,
  },
  buttonContainer: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    bottom: 0,
    padding: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  camButton: {
    height: 80,
    width: 80,
    borderRadius: 40,
    //ADD backgroundColor COLOR GREY
    backgroundColor: '#B2BEB5',

    alignSelf: 'center',
    borderWidth: 4,
    borderColor: 'white',
  },
  image: {
    width: 300,
    height: 300,
    //aspectRatio: 9 / 16,
  },
});

export default CameraScreen;
