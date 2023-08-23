import React, { useRef, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import WebView from 'react-native-webview';

const FaceDetector = () => {
  const cameraRef = useRef(null);
  const devices = useCameraDevices();
  const device = devices.front;

  const [webViewRef, setWebViewRef] = useState(null);

  const handleWebViewMessage = event => {
    // 웹뷰에서 보낸 메시지 처리
    const message = JSON.parse(event.nativeEvent.data);

    if (message.type === 'faceDetected') {
      // 얼굴 인식 결과 처리
      console.log('Detected face:', message.face);
    }
  };

  if (device == null) {
    return <Text>Camera not available</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        style={styles.camera}
        device={device}
        isActive={true}
        photo={true}
      />
      <WebView
        ref={setWebViewRef}
        source={{ uri: 'http://192.168.0.2:5500/keyosk_camera-main/index.html' }} // OpenCV.js 얼굴인식 코드가 포함된 웹 페이지 주소
        style={styles.webView}
        onMessage={handleWebViewMessage}
        mediaPlaybackRequiresUserAction={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  webView: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});

export default FaceDetector;
