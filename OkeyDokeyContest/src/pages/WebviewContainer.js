import React, { useEffect, useRef } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const WebviewContainer = () => {
  const navigation = useNavigation();
  const webviewRef = useRef(null);
  const orderNumber = useSelector((state) => state.shopping.orderNumber); // 주문 번호

  const handleSendMessage = () => {
    const message = JSON.stringify({ type: orderNumber ? orderNumber : 0 });
    console.log('메시지', message); // 수정
    webviewRef.current.postMessage(message);
  };

  const uri = 'https://receiptprinter.netlify.app'; // 수정

  return (
    <View style={{ flex: 1 }}>
      <WebView
        ref={webviewRef}
        source={{ uri: uri }} // 수정
        javaScriptEnabled={true}
        allowUniversalAccessFromFileURLs
        allowFileAccess
        allowFileAccessFromFileURLs
        mixedContentMode="always"
        onLoad={() => {
          handleSendMessage();
        }}
      />
    </View>
  );
};

export default WebviewContainer;
