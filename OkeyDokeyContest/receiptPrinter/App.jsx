import React, { useRef } from 'react';
import { View, Button } from 'react-native';
import WebView from 'react-native-webview';
import WebviewContainer from './components/WebviewContainer';

const App = () => {
  const webviewRef = useRef(null);

  const handleSendMessage = () => {
    const message = JSON.stringify({ type: 'test' });
    if (webviewRef.current) {
      webviewRef.current.postMessage(message);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <WebviewContainer webviewRef={webviewRef} />
      <Button title="Send Message to WebView" onPress={handleSendMessage} />
    </View>
  );
};

export default App;
