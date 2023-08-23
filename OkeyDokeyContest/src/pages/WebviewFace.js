// OpencvCamera.js

import React, { useRef, useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-vision-camera';
import { WebView } from 'react-native-webview';


export const WebviewFace = () => {
    const webViewRef = useRef(null);
    const [isCameraReady, setCameraReady] = useState(false);
  
    useEffect(() => {
      if (isCameraReady) {
        // Opencv.js와 데이터 통신을 위한 함수를 WebView에 주입합니다.
        webViewRef.current.injectJavaScript(`
          // Opencv.js 함수들과 데이터 통신을 구현하는 코드를 작성합니다.
  
          // 예시: 웹 뷰로부터 얼굴 인식 결과를 받아옵니다.
          function onFaceDetected(x, y, width, height) {
            const faceInfo = { x, y, width, height };
            // 원하는 로직을 수행합니다. 예를 들어, 얼굴 정보를 네이티브 코드로 전달할 수 있습니다.
            // NativeModules.MyModule.processFaceInfo(faceInfo); // 네이티브 모듈을 사용하는 경우
          }
  
          // 예시: 네이티브 코드로부터 얼굴 인식 결과를 받아옵니다.
          function onNativeFaceDetected(faceInfo) {
            // faceInfo에는 네이티브 코드로부터 전달받은 얼굴 정보가 포함됩니다.
            // 원하는 로직을 수행합니다.
            // 예를 들어, 얼굴 정보를 가공하여 Opencv.js 코드로 전달할 수 있습니다.
            const { x, y, width, height } = faceInfo;
            processFaceInfo(x, y, width, height);
          }
        `);
      }
    }, [isCameraReady]);
  
    // 나머지 코드는 이전과 동일합니다.
  
    return (
      <View style={styles.container}>
        {/* RNCamera 컴포넌트 */}
        <RNCamera
          style={styles.camera}
          type={RNCamera.Constants.Type.front}
          onCameraReady={() => setCameraReady(true)}
        />
        {/* WebView 컴포넌트 */}
        <WebView
          ref={webViewRef}
          source={{ uri: 'http://192.168.123.106:5500/keyosk_camera-main/index.html' }} // Opencv.js가 포함된 웹 페이지 주소를 넣어야 합니다.
          style={styles.webView}
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
    },
    webView: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'transparent',
    },
  });