import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { NativeModules } from 'react-native';

const CameraModule = NativeModules.CameraModule;

const MyCameraScreen = () => {
  const [cameraPermissionGranted, setCameraPermissionGranted] = useState(false);

  // Handle WebView message
  const handleWebViewMessage = async (event) => {
    const message = JSON.parse(event.nativeEvent.data);
    if (message.type === 'requestCameraPermission') {
      try {
        const granted = await CameraModule.requestCameraPermission();
        setCameraPermissionGranted(granted); // Update the state accordingly
      } catch (error) {
        console.error('Error requesting camera permission:', error);
      }
    }
  };

  const startNativeCamera = () => {
    console.log("hi");
    CameraModule.startCameraStream();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={startNativeCamera} style={styles.button}>
        <Text style={styles.buttonText}>카메라 켜기 (Native)</Text>
      </TouchableOpacity>
      {/* <WebView
        source={{ uri: 'http://192.168.123.103:5500/keyosk_camera-main/index.html' }}
        onMessage={handleWebViewMessage}
        style={styles.webView}
        allowsInlineMediaPlayback={true}
        mediaPlaybackRequiresUserAction={false}
        originWhitelist={['*']}
      /> */}
      <TouchableOpacity onPress={startNativeCamera} style={styles.button}>
        <Text style={styles.buttonText}>카메라 켜기 (Native)</Text>
      </TouchableOpacity>
      {cameraPermissionGranted ? <Text>카메라 권한 획득됨</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // 중앙 정렬
    justifyContent: 'center', // 수직 정렬
  },
  button: {
    backgroundColor: '#007AFF', // 파란색 배경
    padding: 15, // 내부 패딩
    borderRadius: 10, // 둥근 테두리 반경
    margin: 20, // 주변 여백
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  webView: {
    flex: 1,
    width: '100%',
    alignSelf: 'stretch',
  },
});

export default MyCameraScreen;
