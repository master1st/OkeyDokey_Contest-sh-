import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const FaceCamera = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // React Native에서는 네이티브 모듈을 사용하지 않는 한 웹 뷰와 같이 HTML 요소를 직접 사용할 수 없습니다.
    // 따라서, React Native Video 컴포넌트를 사용하여 비디오 스트림을 표시합니다.
    const constraints = { video: true, audio: false };
    navigator.mediaDevices.getUserMedia(constraints)
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.onloadedmetadata = () => {
            videoRef.current.play();
          };
        }
      })
      .catch((error) => {
        console.error('Error accessing camera:', error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Face Detection and Camera Integration</Text>
      {/* React Native Video 컴포넌트를 사용하여 비디오 스트림을 표시 */}
      <video ref={videoRef} style={styles.video} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: 300,
    height: 300,
  },
});

export default FaceCamera;
