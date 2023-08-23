// import React, { useEffect, useRef } from 'react';
// import { View, Text, Button, Dimensions } from 'react-native';
// import RNFS from 'react-native-fs';
// import { WebView } from 'react-native-webview';

// const FaceWebview = () => {
//   const webViewRef = useRef(null);

//   useEffect(() => {
//     // Opencv.js의 경로를 설정합니다.
//     const opencvJsPath = RNFS.MainBundlePath + '/js/opencv.js';

//     // WebView로 HTML 파일과 Opencv.js를 로드합니다.
//     const injectScripts = `
//       <script src="${opencvJsPath}" type="text/javascript"></script>
//       <script src="js/utils.js" type="text/javascript"></script>
//       <script>
//         ${webviewScript}
//       </script>
//     `;

//     webViewRef.current.injectJavaScript(injectScripts);
//   }, []);

//   const onWebViewMessage = (event) => {
//     // WebView에서 메시지를 받아 처리하는 함수
//     const message = event.nativeEvent.data;

//     // 예시: WebView에서 메시지가 "facesDetected"인 경우
//     if (message === 'facesDetected') {
//       // 얼굴이 감지되었을 때 실행할 작업을 수행합니다.
//       // 예시: 카메라로 얼굴이 감지되면 해당 정보를 서버에 전송하거나 다른 작업을 수행합니다.
//     }
//   };

//   // 웹뷰에서 실행할 스크립트 (Opencv.js의 일부)
//   const webviewScript = `
//     var netDet = undefined, netRecogn = undefined;
//     var persons = {};

//     function detectFaces(img) {
//       // 여기서 얼굴 감지 로직을 구현합니다.
//       // ...
//       // 감지된 얼굴 정보를 어떻게 처리할지에 대한 로직을 구현합니다.
//       // 예시: Webview에서 얼굴이 감지되면 메시지를 보냅니다.
//       if (faces.length > 0) {
//         window.ReactNativeWebView.postMessage('facesDetected');
//       }
//     };

//     function main() {
//       // 메인 함수에서는 웹캠 스트리밍과 얼굴 인식을 수행합니다.
//       // ...
//       // 이하 코드는 주어진 HTML 파일과 동일하게 구현합니다.
//       // ...
//       // 예시: "Add a person" 버튼을 누르면 해당 버튼 클릭 이벤트를 React Native로 전달합니다.
//       document.getElementById('addPersonButton').onclick = function () {
//         window.ReactNativeWebView.postMessage('addPersonButtonClicked');
//       };
//     }

//     // Opencv.js 실행 준비가 끝나면 main 함수를 호출합니다.
//     onOpenCvReady = () => {
//       cv['onRuntimeInitialized'] = () => {
//         main();
//       };
//     };
//   `;

//   return (
//     <View style={{ flex: 1 }}>
//       <WebView
//         ref={webViewRef}
//         style={{ flex: 1 }}
//         source={require('./index.html')} // HTML 파일 경로를 정확히 설정해야 합니다.
//         onMessage={onWebViewMessage}
//       />
//     </View>
//   );
// };

// export default FaceWebview;
