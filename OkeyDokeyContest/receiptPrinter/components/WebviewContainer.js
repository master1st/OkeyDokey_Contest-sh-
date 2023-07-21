import React, { useEffect } from 'react';
import { WebView } from 'react-native-webview';

const WebviewContainer = ({ webviewRef }) => {

  const uri = { uri: 'http://192.168.123.103:5500/index.html' };

  useEffect(() => {
    if (webviewRef && webviewRef.current) {
      webviewRef.current.postMessage("hi webview!");
    }
  }, [webviewRef]);

  return (
    <WebView
      ref={webviewRef}
      source={uri}
      javaScriptEnabled={true}
      allowUniversalAccessFromFileURLs
      allowFileAccess
      allowFileAccessFromFileURLs
      mixedContentMode="always"
    />
  );
};

export default WebviewContainer;
